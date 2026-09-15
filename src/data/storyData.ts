export interface Phase {
  id: string;
  scrollRange: [number, number];
  label: string;
  eyebrow: string;
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
      scrollRange: [0, 0.22] as [number, number],
      label: "01",
      eyebrow: "THE START",
      title: "Every journey starts with curiosity.",
      subtitle: "STRUCTURE MEETS INNOVATION",
      description:
        "Every learner begins with core STEM & AI fundamentals — structured for futuristic education.",
    },
    {
      id: "independence",
      scrollRange: [0.22, 0.44] as [number, number],
      label: "02",
      eyebrow: "THE SHIFT",
      title: "Learning moves beyond boundaries.",
      subtitle: "YOUR PACE, YOUR FUTURE",
      description:
        "From foundational modules to self-driven creation, students master technology at their own pace.",
    },
    {
      id: "toolkit",
      scrollRange: [0.44, 0.66] as [number, number],
      label: "03",
      eyebrow: "THE TOOLKIT",
      title: "Build what you imagine.",
      subtitle: "AI & ROBOTICS CREATION",
      description:
        "Code, design, and engineer real-world hardware and software solutions with modern AI tools.",
    },
    {
      id: "horizon",
      scrollRange: [0.66, 0.85] as [number, number],
      label: "04",
      eyebrow: "THE HORIZON",
      title: "Empowering next-gen leaders.",
      subtitle: "GLOBAL EDUCATIONAL ECOSYSTEM",
      description:
        "Connecting schools, educators, and students into one unified ecosystem for future impact.",
    },
    {
      id: "ending",
      scrollRange: [0.85, 1.0] as [number, number],
      label: "04",
      eyebrow: "",
      title: "",
      subtitle: "",
      description: "",
    },
  ] satisfies Phase[],

  stats: [
    { value: "50,000+", label: "Students Reached" },
    { value: "120+", label: "Courses Available" },
    { value: "30+", label: "Countries" },
  ],
} as const;
