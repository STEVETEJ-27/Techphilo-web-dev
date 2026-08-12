"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface StoryScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function StoryScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: StoryScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const currentFrameRef = useRef<number>(-1);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const pendingFrameRef = useRef<number | null>(null);
  const rafIdRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0, dpr: 1 });

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Transform scroll progress → frame index
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  // Cache canvas context and dimensions — only recalculate on resize
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    ctxRef.current = ctx;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    dimensionsRef.current = { w: rect.width, h: rect.height, dpr };
  }, []);

  // Ultra-fast draw — no getBoundingClientRect, no getContext, no allocations
  const drawFrame = useCallback(
    (index: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      const clamped = Math.max(
        0,
        Math.min(Math.round(index), totalFrames - 1)
      );
      if (clamped === currentFrameRef.current) return;
      currentFrameRef.current = clamped;

      const img = imagesRef.current[clamped];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const { w, h } = dimensionsRef.current;
      if (w === 0 || h === 0) return;

      // Cover-fit math (inlined for zero overhead)
      const imgR = img.naturalWidth / img.naturalHeight;
      const canR = w / h;
      let dw: number, dh: number, ox: number, oy: number;
      if (canR > imgR) {
        dw = w;
        dh = w / imgR;
        ox = 0;
        oy = (h - dh) / 2;
      } else {
        dh = h;
        dw = h * imgR;
        ox = (w - dw) / 2;
        oy = 0;
      }

      ctx.drawImage(img, ox, oy, dw, dh);
    },
    [totalFrames]
  );

  // RAF-gated render loop — coalesces rapid scroll events into single draws
  const scheduleFrame = useCallback(
    (index: number) => {
      pendingFrameRef.current = index;

      if (rafIdRef.current) return; // already scheduled

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        if (pendingFrameRef.current !== null) {
          drawFrame(pendingFrameRef.current);
          pendingFrameRef.current = null;
        }
      });
    },
    [drawFrame]
  );

  // Preload images in batches to avoid network congestion
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;
    const BATCH_SIZE = 20;

    const onLoad = (i: number, img: HTMLImageElement) => {
      if (cancelled) return;
      images[i] = img;
      loadedCount++;

      // Throttle progress updates to avoid excessive re-renders
      if (loadedCount % 10 === 0 || loadedCount === totalFrames) {
        setLoadProgress(loadedCount);
      }

      if (i === 0) {
        imagesRef.current = images;
        setFirstFrameReady(true);
      }

      if (loadedCount === totalFrames) {
        imagesRef.current = images;
        setIsLoaded(true);
      }
    };

    const loadBatch = (startIdx: number) => {
      if (cancelled || startIdx >= totalFrames) return;
      const end = Math.min(startIdx + BATCH_SIZE, totalFrames);

      for (let i = startIdx; i < end; i++) {
        const img = new Image();
        const frameNum = String(i + 1).padStart(3, "0");
        img.src = `${imageFolderPath}/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => onLoad(i, img);
        img.onerror = () => {
          if (cancelled) return;
          loadedCount++;
          if (loadedCount % 10 === 0 || loadedCount === totalFrames) {
            setLoadProgress(loadedCount);
          }
          if (loadedCount === totalFrames) {
            imagesRef.current = images;
            setIsLoaded(true);
          }
        };
      }

      // Schedule next batch after a microtask to avoid blocking main thread
      setTimeout(() => loadBatch(end), 0);
    };

    loadBatch(0);

    return () => {
      cancelled = true;
    };
  }, [totalFrames, imageFolderPath]);

  // Initialize canvas on mount and first frame ready
  useEffect(() => {
    if (firstFrameReady) {
      setupCanvas();
      currentFrameRef.current = -1;
      drawFrame(frameIndex.get());
    }
  }, [firstFrameReady, setupCanvas, drawFrame, frameIndex]);

  // Subscribe to scroll changes — uses RAF-gated scheduling
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      scheduleFrame(latest);
    });
    return () => {
      unsubscribe();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
    };
  }, [frameIndex, scheduleFrame]);

  // ResizeObserver — recache dimensions, then redraw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver(() => {
      setupCanvas();
      currentFrameRef.current = -1;
      drawFrame(frameIndex.get());
    });

    observer.observe(canvas);
    return () => observer.disconnect();
  }, [setupCanvas, drawFrame, frameIndex]);

  return (
    <div className="absolute inset-0 z-0">

      {/* Canvas — alpha: false for GPU compositing boost */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          opacity: firstFrameReady ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}
