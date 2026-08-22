"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect the OS "reduce motion" setting — smoothing hijacks scroll,
    // so users who opted out get the native scroller.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      // `lerp` is frame-rate independent — `duration` re-eases from the
      // current position on every wheel event, which is what made fast
      // scrolling feel like it was dragging behind the cursor.
      lerp: 0.12,
      smoothWheel: true,
      // 1.3 amplified every wheel notch, so the story sequence had to jump
      // ~17 frames per notch. 1 keeps the sequence readable.
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      // Touch devices already scroll smoothly; hijacking them costs frames.
      syncTouch: false,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
