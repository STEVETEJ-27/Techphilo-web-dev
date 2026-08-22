"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface StoryScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

/**
 * The source frames are 1280x720, so a backing store wider than that adds
 * cost without adding a single pixel of detail. On a retina display an
 * uncapped DPR asks the GPU to upscale ~5.7M pixels per frame instead of
 * ~1.4M — the single most expensive thing this component used to do.
 */
const MAX_DPR = 1.5;

export default function StoryScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: StoryScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const currentFrameRef = useRef<number>(-1);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  /** Per-frame flag: the bitmap is downloaded AND decoded, so drawing it can't block. */
  const readyRef = useRef<boolean[]>([]);
  const pendingFrameRef = useRef<number | null>(null);
  const rafIdRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0, dpr: 1 });

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

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    // setTransform must be reapplied after any width/height write, and is
    // cheap enough to just always run.
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // The frames are photographic and always upscaled; "low" costs
    // noticeably less per blit and is indistinguishable here.
    ctx.imageSmoothingQuality = "low";

    dimensionsRef.current = { w: rect.width, h: rect.height, dpr };
  }, []);

  /**
   * Walks outward from `index` to the closest frame that is decoded and safe
   * to draw. Without this, scrolling through a not-yet-loaded stretch left
   * the canvas holding a stale frame — which reads as the animation freezing.
   */
  const nearestReadyFrame = useCallback(
    (index: number): number => {
      const ready = readyRef.current;
      if (ready[index]) return index;
      for (let offset = 1; offset < totalFrames; offset++) {
        const back = index - offset;
        if (back >= 0 && ready[back]) return back;
        const fwd = index + offset;
        if (fwd < totalFrames && ready[fwd]) return fwd;
      }
      return -1;
    },
    [totalFrames]
  );

  // Ultra-fast draw — no getBoundingClientRect, no getContext, no allocations
  const drawFrame = useCallback(
    (index: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      const target = Math.max(0, Math.min(Math.round(index), totalFrames - 1));
      const clamped = nearestReadyFrame(target);
      if (clamped < 0) return;
      if (clamped === currentFrameRef.current) return;

      const img = imagesRef.current[clamped];
      if (!img) return;

      const { w, h } = dimensionsRef.current;
      if (w === 0 || h === 0) return;

      currentFrameRef.current = clamped;

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
    [totalFrames, nearestReadyFrame]
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
    const ready: boolean[] = new Array(totalFrames).fill(false);
    imagesRef.current = images;
    readyRef.current = ready;

    const BATCH_SIZE = 12;

    /**
     * `new Image()` + onload does NOT decode the bitmap; the browser defers
     * that until something paints it. That made the very first drawImage of
     * each of the 300 frames run a synchronous JPEG decode on the main
     * thread *while the user was scrolling* — ~5-10ms each, i.e. a dropped
     * frame every time the sequence advanced to new artwork. Decoding here,
     * during preload, is what actually removes the stutter.
     */
    const settle = (i: number, img: HTMLImageElement) => {
      if (cancelled) return;
      const finish = () => {
        if (cancelled) return;
        ready[i] = true;
        if (i === 0) setFirstFrameReady(true);
      };

      if (typeof img.decode === "function") {
        img.decode().then(finish, finish);
      } else {
        finish();
      }
    };

    const loadBatch = (startIdx: number) => {
      if (cancelled || startIdx >= totalFrames) return;
      const end = Math.min(startIdx + BATCH_SIZE, totalFrames);
      let settledInBatch = 0;

      const onBatchItemDone = () => {
        settledInBatch++;
        // Chain batches off completion rather than a timer, so the network
        // never has more than BATCH_SIZE requests in flight competing with
        // the page's own resources.
        if (settledInBatch === end - startIdx) loadBatch(end);
      };

      for (let i = startIdx; i < end; i++) {
        const img = new Image();
        images[i] = img;
        const frameNum = String(i + 1).padStart(3, "0");
        img.decoding = "async";
        img.src = `${imageFolderPath}/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
          settle(i, img);
          onBatchItemDone();
        };
        img.onerror = () => {
          if (cancelled) return;
          onBatchItemDone();
        };
      }
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

  // ResizeObserver — recache dimensions, then redraw. Debounced through RAF
  // because a resize write to canvas.width forces a full reallocation.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeRaf = 0;
    const observer = new ResizeObserver(() => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        setupCanvas();
        currentFrameRef.current = -1;
        drawFrame(frameIndex.get());
      });
    });

    observer.observe(canvas);
    return () => {
      observer.disconnect();
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
    };
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
