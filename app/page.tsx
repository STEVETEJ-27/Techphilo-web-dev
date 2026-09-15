"use client";

import { useRef } from "react";
import { useScroll, motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import StoryScrollCanvas from "@/components/StoryScrollCanvas";
import StoryExperience from "@/components/StoryExperience";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhySchools from "@/components/WhySchools";
import HowItWorksHome from "@/components/HowItWorksHome";
import FinalCTA from "@/components/FinalCTA";

/* ─── Inline "Explore Courses" CTA Banner ─── */
function ExploreCoursesBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="explore-courses"
      style={{
        padding: "clamp(4rem, 7vw, 6.5rem) 0",
        position: "relative",
        overflow: "hidden",
        background: "var(--canvas-light)",
      }}
    >
      {/* Decorative background orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(24,88,68,0.07), transparent 70%)",
          top: "-100px",
          right: "-80px",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(176,138,79,0.06), transparent 70%)",
          bottom: "-60px",
          left: "5%",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.75rem",
          }}
        >
          {/* Eyebrow tag */}
          <motion.div
            className="label-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ display: "inline-flex", gap: "0.45rem", alignItems: "center" }}
          >
            <Sparkles size={12} strokeWidth={2.5} />
            Our Programs
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="display-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6 }}
            style={{ maxWidth: "800px", color: "var(--ink)" }}
          >
            Learn what{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-strong) 0%, var(--accent-bright) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              matters most
            </span>{" "}
            for tomorrow's world.
          </motion.h2>

          {/* Sub-description */}
          <motion.p
            className="text-lg text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.6 }}
            style={{ maxWidth: "580px", lineHeight: 1.75 }}
          >
            Structured programs in AI, Coding, Robotics &amp; STEM — built by educators,
            designed for the future. Find the right path for your school or student.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.36, duration: 0.55 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Link
              href="/courses"
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: "0.95rem 2.25rem", gap: "0.6rem" }}
            >
              <BookOpen size={18} strokeWidth={2} />
              Explore Courses
              <ArrowRight size={17} strokeWidth={2} />
            </Link>
            <Link
              href="/book-demo"
              className="btn btn-outline"
              style={{ fontSize: "1rem", padding: "0.95rem 2rem" }}
            >
              Book a Free Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null);

  // Master scroll progress — Lenis provides the smoothing,
  // no additional useSpring needed (double-smoothing causes oscillation/lag)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* ─── SCROLL SEQUENCE — 600vh for 300 preloaded frames ───
          The sticky child eats 100vh, so this leaves ~500vh of travel:
          roughly 18px of scroll per frame. At the old 320vh each frame got
          under 8px, so a single wheel notch jumped a dozen frames and the
          sequence read as a stutter rather than motion. Tune here. */}
      <section
        ref={containerRef}
        id="story"
        style={{ height: "600vh", position: "relative" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Layer 0: Canvas z-0, cover-fit rendering 300 preloaded frames */}
          <StoryScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={300}
            imageFolderPath="/images/story-sequence"
          />

          {/* Layer 1: Scrim overlay — slightly faded, feathered black vignette for cinematic depth */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 5,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at center, transparent 45%, rgba(0, 0, 0, 0.45) 100%), linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.65) 100%), linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 40%)",
            }}
          />

          {/* Layer 2: Interactive Story HUD overlay */}
          <StoryExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* ─── REST OF TECHPHILO SITE ─── */}
      <div style={{ position: "relative", zIndex: 20 }}>
        <div id="hero-overview">
          <Hero />
        </div>
        <div id="who-we-are">
          <WhoWeAre />
        </div>
        <WhySchools />
        <HowItWorksHome />
        {/* Explore Courses CTA — replaces the course cards grid for a cleaner homepage */}
        <ExploreCoursesBanner />
        <FinalCTA />
      </div>
    </div>
  );
}

