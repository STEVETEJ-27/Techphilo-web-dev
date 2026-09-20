"use client";

import { useRef } from "react";
import { useScroll, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Landmark,
  Lightbulb,
  MessageSquare,
  PenTool,
  Crown,
  Building2,
  BookOpen,
  ClipboardList,
  CheckCircle2,
  BarChart3,
  GraduationCap,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import StoryScrollCanvas from "@/components/StoryScrollCanvas";
import StoryExperience from "@/components/StoryExperience";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import HowItWorksHome from "@/components/HowItWorksHome";
import FinalCTA from "@/components/FinalCTA";

/* ─── 1. Programs Preview ─────────────────────────────────────────────────── */
const programs = [
  {
    Icon: Code2,
    title: "Coding & Technology",
    desc: "Build, code and create real projects with modern tools.",
    href: "/courses?category=technology",
    color: "var(--brand)",
  },
  {
    Icon: Landmark,
    title: "Financial Literacy",
    desc: "Real-world money skills — budgeting, decisions, and planning.",
    href: "/courses?category=finance",
    color: "var(--accent)",
  },
  {
    Icon: Lightbulb,
    title: "Entrepreneurship",
    desc: "Turn ideas into ventures through validation and pitching.",
    href: "/courses?category=entrepreneurship",
    color: "var(--hue-amber)",
  },
  {
    Icon: MessageSquare,
    title: "Communication",
    desc: "Written, verbal and presentation skills built through practice.",
    href: "/courses?category=communication",
    color: "var(--hue-teal)",
  },
  {
    Icon: PenTool,
    title: "Design Thinking",
    desc: "Human-centred problem solving — empathise, prototype, test.",
    href: "/courses?category=design",
    color: "var(--hue-rose)",
  },
  {
    Icon: Crown,
    title: "Leadership",
    desc: "Collaboration and ownership built through team projects.",
    href: "/courses?category=leadership",
    color: "var(--hue-violet)",
  },
];

function ProgramsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section programs-preview" style={{ background: "var(--surface)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag">
            <BookOpen size={12} aria-hidden="true" /> Six Programs
          </div>
          <h2 className="display-lg">
            What students{" "}
            <span className="gradient-text-gold">actually build.</span>
          </h2>
          <p className="text-md text-muted" style={{ maxWidth: 520, margin: "1rem auto 0" }}>
            Each program is built around doing — not just learning concepts, but
            applying them through real projects and challenges.
          </p>
        </motion.div>

        <div className="programs-preview__grid">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={prog.href} className="program-card card">
                <div
                  className="program-card__icon"
                  style={{
                    color: prog.color,
                    background: `color-mix(in srgb, ${prog.color} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${prog.color} 20%, transparent)`,
                  }}
                >
                  <prog.Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="program-card__title">{prog.title}</h3>
                <p className="program-card__desc text-sm text-muted">{prog.desc}</p>
                <span className="program-card__cta">
                  Explore <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: "center", marginTop: "2.5rem" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
        >
          <Link href="/courses" className="btn btn-outline">
            View All Programs <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 2. Student Journey Home ─────────────────────────────────────────────── */
const journeySteps = [
  { step: "Explore", desc: "Start with curiosity. Pick what interests you." },
  { step: "Build",   desc: "Work on real projects from the very first session." },
  { step: "Solve",   desc: "Apply skills to real-world problems and challenges." },
  { step: "Communicate", desc: "Present your work and ideas to real audiences." },
  { step: "Create",  desc: "Put skills together into something that's genuinely yours." },
  { step: "Grow",    desc: "Track your progress, earn recognition, go further." },
];

function StudentJourneyHome() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section student-journey-home"
      style={{
        background: "linear-gradient(180deg, var(--canvas-light) 0%, var(--surface-alt) 100%)",
      }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag">
            <GraduationCap size={12} aria-hidden="true" /> Student Experience
          </div>
          <h2 className="display-lg" style={{ maxWidth: 700, margin: "0 auto" }}>
            Learning isn't something you complete.{" "}
            <span className="gradient-text">It's something you build.</span>
          </h2>
        </motion.div>

        <div className="journey-home__grid">
          {journeySteps.map((s, i) => (
            <motion.div
              key={s.step}
              className="journey-home__step"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="journey-home__num">0{i + 1}</div>
              <h3 className="journey-home__step-title display-sm">{s.step}</h3>
              <p className="text-sm text-muted" style={{ lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: "center", marginTop: "2.5rem" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <Link href="/students" className="btn btn-ghost">
            See Student Programs <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 3. School Value Home (4 pillars, dark) ──────────────────────────────── */
const schoolPillars = [
  {
    Icon: BookOpen,
    title: "Practical Learning",
    desc: "Every session is hands-on. Students build, make and present — not just listen.",
    color: "var(--brand-bright)",
  },
  {
    Icon: ClipboardList,
    title: "Ready to Implement",
    desc: "Structured lesson plans, age-appropriate content, ready before day one.",
    color: "var(--accent-bright)",
  },
  {
    Icon: Wrench,
    title: "Teacher Support",
    desc: "Full training, teaching tools, and a dedicated point of contact throughout the year.",
    color: "var(--sage)",
  },
  {
    Icon: BarChart3,
    title: "Progress Visibility",
    desc: "Skill reports and badge tracking give schools and parents clear visibility of growth.",
    color: "var(--accent)",
  },
];

function SchoolValueHome() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section school-value-home"
      style={{ background: "var(--surface-dark)", position: "relative", overflow: "hidden" }}
      aria-label="School value proposition"
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", borderRadius: "50%",
          width: "600px", height: "600px",
          top: "-120px", right: "-80px",
          background: "radial-gradient(circle, rgba(24,88,68,0.3) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", borderRadius: "50%",
          width: "400px", height: "400px",
          bottom: "-100px", left: "-60px",
          background: "radial-gradient(circle, rgba(176,138,79,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="label-tag"
            style={{
              background: "rgba(176,138,79,0.12)",
              borderColor: "rgba(176,138,79,0.32)",
              color: "var(--accent-bright)",
            }}
          >
            <Building2 size={12} aria-hidden="true" /> For Schools
          </div>
          <h2
            className="display-lg"
            style={{ color: "var(--canvas-light)" }}
          >
            Built for schools.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--canvas-light) 20%, var(--accent-bright) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Designed around students.
            </span>
          </h2>
          <p style={{ color: "rgba(242,235,221,0.58)", maxWidth: 520, margin: "1.25rem auto 0" }} className="text-md">
            An integrated programme that reduces teacher workload,
            gives leadership measurable outcomes, and gives students skills that last.
          </p>
        </motion.div>

        <div className="school-value__pillars">
          {schoolPillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="school-value__pillar"
              style={{ "--sv-color": p.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="school-value__icon">
                <p.Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div>
                <h3 className="school-value__title">{p.title}</h3>
                <p className="school-value__desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: "center", marginTop: "2.75rem" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/schools"
            className="btn btn-outline"
            style={{
              background: "transparent",
              color: "var(--canvas-light)",
              borderColor: "rgba(255,255,255,0.22)",
            }}
          >
            Explore for Schools <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="btn btn-gold"
            style={{ marginLeft: "1rem" }}
          >
            Partner With TechPhilo <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page composition ────────────────────────────────────────────────────── */
export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null);

  // Lenis drives scroll smoothing; useScroll tracks the section's own progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div style={{ backgroundColor: "var(--canvas)" }}>

      {/* ─── CINEMATIC STORY — 600vh sticky scroll sequence ─── */}
      <section
        ref={containerRef}
        id="story"
        style={{ height: "600vh", position: "relative" }}
        aria-label="TechPhilo story"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Layer 0: Canvas — 300 preloaded frames */}
          <StoryScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={300}
            imageFolderPath="/images/story-sequence"
          />

          {/* Layer 1: Cinematic scrim */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 5,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.45) 100%), " +
                "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.65) 100%), " +
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 40%)",
            }}
          />

          {/* Layer 2: Story HUD overlay */}
          <StoryExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* ─── HOMEPAGE CONTENT ─── */}
      <div style={{ position: "relative", zIndex: 20 }}>

        {/* 01 — Hero: What / Who / Why / Next */}
        <div id="hero-overview">
          <Hero />
        </div>

        {/* 02 — Audience Gateway: two clear paths */}
        <div id="audience-gateway">
          <WhoWeAre />
        </div>

        {/* 03 — Programs: what students actually build */}
        <div id="programs">
          <ProgramsPreview />
        </div>

        {/* 04 — Student Journey: how learning feels */}
        <div id="student-journey">
          <StudentJourneyHome />
        </div>

        {/* 05 — School Value: 4-pillar teaser */}
        <div id="school-value">
          <SchoolValueHome />
        </div>

        {/* 06 — How It Works: 5-step partnership process */}
        <HowItWorksHome />

        {/* 07 — Final CTA: dual-audience closing */}
        <FinalCTA />
      </div>
    </div>
  );
}
