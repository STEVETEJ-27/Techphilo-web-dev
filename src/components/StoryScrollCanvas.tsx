"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface StoryScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cssWidth: number,
  cssHeight: number
) {
  const imgRatio = img.width / img.height;
  const canvasRatio = cssWidth / cssHeight;
  let drawWidth: number,
    drawHeight: number,
    offsetX: number,
    offsetY: number;

  if (canvasRatio > imgRatio) {
    drawWidth = cssWidth;
    drawHeight = cssWidth / imgRatio;
    offsetX = 0;
    offsetY = (cssHeight - drawHeight) / 2;
  } else {
    drawHeight = cssHeight;
    drawWidth = cssHeight * imgRatio;
    offsetX = (cssWidth - drawWidth) / 2;
    offsetY = 0;
  }
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

export default function StoryScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: StoryScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef<number>(-1);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Transform scroll progress → frame index (0 to totalFrames - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  // Draw function
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const roundedIndex = Math.round(index);
      const clampedIndex = Math.max(0, Math.min(roundedIndex, totalFrames - 1));

      // Only redraw when frame actually changes
      if (clampedIndex === currentFrameRef.current) return;
      currentFrameRef.current = clampedIndex;

      const img = imagesRef.current[clampedIndex];
      if (!img || !img.complete) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Only resize canvas buffer if dimensions changed
      const targetWidth = Math.round(rect.width * dpr);
      const targetHeight = Math.round(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, rect.width, rect.height);
      drawCover(ctx, img, rect.width, rect.height);
    },
    [totalFrames]
  );

  // Preload all images
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    // Load first frame immediately for quick first paint
    const firstImg = new Image();
    firstImg.src = `${imageFolderPath}/ezgif-frame-001.jpg`;
    firstImg.onload = () => {
      if (cancelled) return;
      images[0] = firstImg;
      imagesRef.current = images;
      setFirstFrameReady(true);
      // Draw frame 0 immediately
      currentFrameRef.current = -1; // Force redraw
      drawFrame(0);
    };

    // Then preload all frames
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i + 1).padStart(3, "0");
      img.src = `${imageFolderPath}/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        if (cancelled) return;
        images[i] = img;
        loadedCount++;
        setLoadProgress(loadedCount);

        if (loadedCount === totalFrames) {
          imagesRef.current = images;
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(loadedCount);
        if (loadedCount === totalFrames) {
          imagesRef.current = images;
          setIsLoaded(true);
        }
      };
    }

    return () => {
      cancelled = true;
    };
  }, [totalFrames, imageFolderPath, drawFrame]);

  // Subscribe to frame changes
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      drawFrame(latest);
    });
    return () => unsubscribe();
  }, [frameIndex, drawFrame]);

  // ResizeObserver for responsive redraw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver(() => {
      currentFrameRef.current = -1;
      drawFrame(frameIndex.get());
    });

    observer.observe(canvas);
    return () => observer.disconnect();
  }, [drawFrame, frameIndex]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Loading Overlay */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md text-white"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl text-white bg-blue-600 shadow-lg shadow-blue-500/30">
              T
            </div>

            {/* Loading label */}
            <span className="font-display text-xs tracking-[0.3em] font-semibold text-blue-200">
              LOADING EXPERIENCE
            </span>

            {/* Progress bar */}
            <div className="w-48 h-[2px] rounded-full overflow-hidden bg-white/20">
              <div
                className="h-full rounded-full transition-all duration-150 ease-out bg-blue-500"
                style={{
                  width: `${(loadProgress / totalFrames) * 100}%`,
                }}
              />
            </div>

            {/* Count */}
            <span className="font-display text-xs tabular-nums tracking-wider text-slate-400">
              {loadProgress} / {totalFrames}
            </span>
          </div>
        </div>
      )}

      {/* Canvas */}
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
