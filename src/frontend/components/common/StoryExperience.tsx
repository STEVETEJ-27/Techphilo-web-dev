"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { storyData } from "@/data/storyData";
import { getPhaseProgress } from "@/lib/utils";

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
      {/* Top Progress Bar — brand token gradient instead of Tailwind blue */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            background: `linear-gradient(to right, var(--brand), var(--accent-bright))`,
            transformOrigin: "left",
            transform: "scaleX(0)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Top Right — TechPhilo brand label */}
      <div className="absolute top-8 right-6 md:right-12 z-30 flex items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 600,
          }}
        >
          TechPhilo
        </span>
      </div>

      {/* Scroll Prompt — initial viewport only */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        style={{ transition: "opacity 0.4s ease", willChange: "opacity" }}
      >
        <motion.div
          style={{
            width: "1px",
            height: "1.75rem",
            background: "var(--accent-bright)",
            opacity: 0.8,
          }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            fontWeight: 600,
            color: "rgba(255,255,255,0.65)",
            textTransform: "uppercase",
          }}
        >
          Scroll to Explore
        </span>
      </div>

      {/* PHASE CONTENT — left-aligned cinematic card */}
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
              {/* Eyebrow */}
              <span className="cinematic-eyebrow">
                {phase.eyebrow}
              </span>

              {/* Main Story Statement */}
              <h2 className="cinematic-title">
                {phase.title}
              </h2>

              {/* Supporting description */}
              {phase.description && (
                <p className="cinematic-desc">
                  {phase.description}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Story progression steps */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {storyData.phases
          .filter((p: any) => p.title)
          .map((p: any, idx: number) => (
            <div key={p.id} className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: idx === activePhase ? 700 : 500,
                  color:
                    idx === activePhase
                      ? "var(--accent-bright)"
                      : "rgba(255,255,255,0.35)",
                  transition: "color 0.4s ease",
                }}
              >
                {p.label}
              </span>
              {idx < storyData.phases.filter((p: any) => p.title).length - 1 && (
                <span
                  style={{
                    width: "0.75rem",
                    height: "1px",
                    background: "rgba(255,255,255,0.18)",
                    display: "block",
                  }}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
