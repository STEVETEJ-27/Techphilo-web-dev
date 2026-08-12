"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { storyData } from "../data/storyData";
import { getPhaseProgress } from "../lib/utils";

const premiumEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {},
};

const childVariants = {
  hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: premiumEase },
  },
  exit: {
    y: -20,
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.4, ease: premiumEase },
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

  // Direct DOM manipulation for the progress bar — no React re-renders
  const updateProgressBar = useCallback((value: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${value})`;
    }
  }, []);

  // Direct DOM manipulation for scroll indicator visibility
  const updateScrollIndicator = useCallback((value: number) => {
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.style.opacity = value < 0.05 ? "1" : "0";
    }
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // These are pure DOM writes — zero React overhead
      updateProgressBar(latest);
      updateScrollIndicator(latest);

      // Only trigger React re-render when the phase actually changes
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
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Progress bar — top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      >
        <div
          ref={progressBarRef}
          className="h-full bg-blue-500"
          style={{
            transformOrigin: "left",
            transform: "scaleX(0)",
            willChange: "transform",
          }}
        />
      </div>



      {/* Bottom-right tagline */}
      <div className="absolute bottom-8 right-6 md:right-12 z-30">
        <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/70 font-semibold">
          AI & EdTech Canvas
        </span>
      </div>

      {/* SCROLL INDICATOR — bottom center */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        style={{ transition: "opacity 0.4s ease", willChange: "opacity" }}
      >
        <motion.div
          className="w-[1px] h-8 bg-blue-400"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-sans text-[10px] tracking-[0.25em] font-semibold text-white/80 uppercase">
          Scroll to Explore
        </span>
      </div>

      {/* PHASE CONTENT — vertically centered & horizontally aligned */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20 container mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl pointer-events-auto"
          >

            {/* Title */}
            <motion.h1
              variants={childVariants}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-amber-300 drop-shadow-lg"
            >
              {phase.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] font-semibold mt-3 text-amber-400 uppercase"
            >
              {phase.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="font-sans text-sm md:text-base leading-relaxed mt-4 max-w-xl text-slate-200/95"
            >
              {phase.description}
            </motion.p>


          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
