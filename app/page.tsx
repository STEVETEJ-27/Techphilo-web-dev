"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import StoryScrollCanvas from "@/components/StoryScrollCanvas";
import StoryExperience from "@/components/StoryExperience";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhySchools from "@/components/WhySchools";
import HowItWorksHome from "@/components/HowItWorksHome";
import FeaturedCoursesHome from "@/components/FeaturedCoursesHome";
import FinalCTA from "@/components/FinalCTA";

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
        <FeaturedCoursesHome />
        <FinalCTA />
      </div>
    </div>
  );
}
