export interface Phase {
  id: string;
  scrollRange: [number, number];
  label: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Program {
  title: string;
  description: string;
}

export interface Feature {
  number: string;
  title: string;
  description: string;
}

export const storyData = {
  brand: "TechPhilo",
  tagline: "Inspire. Educate. Transform.",
  headline: "Empowering the Next Generation of Tech Leaders",

  phases: [
    {
      id: "foundation",
      scrollRange: [0, 0.25] as [number, number],
      label: "01 / FOUNDATION",
      title: "EVERY JOURNEY STARTS WITH CURIOSITY",
      subtitle: "STRUCTURE MEETS INNOVATION",
      description:
        "Every learner begins with core STEM & AI fundamentals — guided, structured, and tailored for futuristic education.",
    },
    {
      id: "independence",
      scrollRange: [0.25, 0.5] as [number, number],
      label: "02 / INDEPENDENCE",
      title: "LEARNING BEYOND BOUNDARIES",
      subtitle: "YOUR PACE, YOUR FUTURE",
      description:
        "From foundational modules to self-driven creation — students master technology at their own unique pace.",
    },
    {
      id: "toolkit",
      scrollRange: [0.5, 0.75] as [number, number],
      label: "03 / THE TOOLKIT",
      title: "BUILD WHAT YOU IMAGINE",
      subtitle: "AI & ROBOTICS CREATION",
      description:
        "Code, design, and engineer real-world hardware & software solutions using modern AI-driven tools.",
    },
    {
      id: "horizon",
      scrollRange: [0.75, 1.0] as [number, number],
      label: "04 / THE HORIZON",
      title: "THE FUTURE OF EDTECH",
      subtitle: "INSPIRE. EDUCATE. TRANSFORM.",
      description:
        "Graduation is just the beginning — TechPhilo equips schools, teachers, and students for lifelong leadership.",
    },
  ] satisfies Phase[],

  stats: [
    { value: "50,000+", label: "Students Reached" },
    { value: "120+", label: "Courses Available" },
    { value: "30+", label: "Countries" },
  ],
} as const;
