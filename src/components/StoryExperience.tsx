"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { storyData } from "../data/storyData";
import { getPhaseProgress } from "../lib/utils";

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: cinematicEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: { duration: 0.45, ease: cinematicEase },
  },
};

interface StoryExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function StoryExperience({
  scrollYProgress,
}: StoryExperienceProps) {
  const [activePhase, setActivePhase] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const lastPhaseRef = useRef(0);

  const updateProgressBar = useCallback((value: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${value})`;
    }
  }, []);

  const updateScrollIndicator = useCallback((value: number) => {
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.style.opacity = value < 0.05 ? "1" : "0";
    }
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      updateProgressBar(latest);
      updateScrollIndicator(latest);

      const { phaseIndex } = getPhaseProgress(latest, storyData.phases);
      if (phaseIndex !== lastPhaseRef.current) {
        lastPhaseRef.current = phaseIndex;
        setActivePhase(phaseIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, updateProgressBar, updateScrollIndicator]);

  const phase = storyData.phases[activePhase];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Top Progress Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
      >
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-500 to-amber-400"
          style={{
            transformOrigin: "left",
            transform: "scaleX(0)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Top Right Story Indicator */}
      <div className="absolute top-8 right-6 md:right-12 z-30 flex items-center gap-3">
        <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 font-semibold">
          AI & EdTech Canvas
        </span>
      </div>

      {/* Scroll Prompt — initial viewport */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        style={{ transition: "opacity 0.4s ease", willChange: "opacity" }}
      >
        <motion.div
          className="w-[1px] h-7 bg-amber-300/80"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-sans text-[10px] tracking-[0.25em] font-semibold text-white/70 uppercase">
          Scroll to Explore
        </span>
      </div>

      {/* PHASE CONTENT — Original position: vertically centered & left-aligned layout */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20 container mx-auto pointer-events-none">
        <AnimatePresence mode="wait">
          {phase.title && (
            <motion.div
              key={phase.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="cinematic-glass-card max-w-xl w-full pointer-events-auto"
            >
              {/* Small Story Eyebrow Label */}
              <span className="cinematic-eyebrow">
                {phase.eyebrow}
              </span>

              {/* Main Story Statement */}
              <h2 className="cinematic-title">
                {phase.title}
              </h2>

              {/* Optional Short Supporting Text */}
              {phase.description && (
                <p className="cinematic-desc">
                  {phase.description}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SUBTLE STORY PROGRESSION STEPS (01 — 02 — 03 — 04) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {storyData.phases
          .filter((p) => p.title)
          .map((p, idx) => (
            <div key={p.id} className="flex items-center gap-2">
              <span
                className={`font-mono text-[10px] md:text-xs transition-colors duration-400 ${
                  idx === activePhase
                    ? "text-[#F5CB70] font-bold"
                    : "text-white/40 font-medium"
                }`}
              >
                {p.label}
              </span>
              {idx < storyData.phases.filter((p) => p.title).length - 1 && (
                <span className="w-3 h-[1px] bg-white/20" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
