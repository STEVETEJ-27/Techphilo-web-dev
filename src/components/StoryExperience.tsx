"use client";

import { useEffect, useState } from "react";
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
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollValue(latest);
      const { phaseIndex } = getPhaseProgress(latest, storyData.phases);
      setActivePhase(phaseIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const phase = storyData.phases[activePhase];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Progress bar — thin accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-20"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <motion.div
          className="h-full bg-blue-500"
          style={{
            width: `${scrollValue * 100}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* Phase dots — top right */}
      <div className="absolute top-24 right-6 md:right-10 flex flex-col gap-3 z-20">
        {storyData.phases.map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full transition-all duration-500 border"
            style={{
              backgroundColor: i === activePhase ? "#3B82F6" : "transparent",
              borderColor: i === activePhase ? "#3B82F6" : "rgba(255,255,255,0.5)",
              transform: i === activePhase ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* Bottom-right tagline */}
      <div className="absolute bottom-6 right-6 md:right-10 z-20">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
          AI & EdTech Canvas
        </span>
      </div>

      {/* SCROLL INDICATOR (Phase 1 only, fades after 5%) */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        animate={{ opacity: scrollValue < 0.05 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="w-[1px] h-10 bg-blue-500"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-sans text-[10px] tracking-[0.3em] font-semibold text-white/80 uppercase">
          Scroll to Explore
        </span>
      </motion.div>

      {/* PHASE CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phase.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-10 lg:px-16"
        >
          <div className="max-w-2xl">
            <motion.div variants={childVariants}>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] font-semibold text-blue-400 uppercase">
                {phase.label}
              </span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold mt-4 leading-[1.1] text-white"
            >
              {phase.title}
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="font-sans text-sm md:text-base tracking-[0.15em] font-medium mt-4 text-amber-300"
            >
              {phase.subtitle}
            </motion.p>

            <motion.p
              variants={childVariants}
              className="font-sans text-sm md:text-base leading-relaxed mt-4 max-w-lg text-white/80"
            >
              {phase.description}
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-3 mt-8 pointer-events-auto"
            >
              <a
                href="#who-we-are"
                className="px-6 py-3 rounded-lg font-sans text-xs tracking-[0.15em] font-semibold text-white bg-blue-600 transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] shadow-lg shadow-blue-600/30"
              >
                DISCOVER TECHPHILO
              </a>
              <a
                href="/courses"
                className="px-6 py-3 rounded-lg font-sans text-xs tracking-[0.15em] font-semibold text-white border border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                EXPLORE COURSES
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
