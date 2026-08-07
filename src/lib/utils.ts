import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind CSS conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Clamp a value between min and max.
 */
export function clampValue(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Given a scroll progress (0–1), determine which phase is active
 * and return the normalized progress within that phase (0–1).
 */
export function getPhaseProgress(
  scrollProgress: number,
  phases: readonly { scrollRange: readonly [number, number] }[]
): { phaseIndex: number; progress: number } {
  const clamped = clampValue(scrollProgress, 0, 1);

  for (let i = 0; i < phases.length; i++) {
    const [start, end] = phases[i].scrollRange;
    if (clamped >= start && clamped < end) {
      const progress = (clamped - start) / (end - start);
      return { phaseIndex: i, progress };
    }
  }

  // At exactly 1.0, we're in the last phase at 100%
  return { phaseIndex: phases.length - 1, progress: 1 };
}
