export interface Phase {
  id: string;
  scrollRange: [number, number];
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
}

export const storyData = {
  brand: "TechPhilo",
  tagline: "Learn today. Lead tomorrow.",
  headline: "One Ecosystem. Two Journeys.",

  phases: [
    {
      id: "foundation",
      scrollRange: [0, 0.22] as [number, number],
      label: "01",
      eyebrow: "THE START",
      title: "Every journey starts with curiosity.",
      subtitle: "WHERE LEARNING BEGINS",
      description:
        "Students don't arrive with a blank slate — they arrive with questions. TechPhilo builds from there.",
    },
    {
      id: "build",
      scrollRange: [0.22, 0.44] as [number, number],
      label: "02",
      eyebrow: "THE WORK",
      title: "Learning moves from theory into practice.",
      subtitle: "HANDS ON FROM DAY ONE",
      description:
        "Every program is built around doing — coding real projects, pitching real ideas, solving real problems.",
    },
    {
      id: "toolkit",
      scrollRange: [0.44, 0.66] as [number, number],
      label: "03",
      eyebrow: "THE SKILLS",
      title: "Build what you imagine.",
      subtitle: "SIX PILLARS OF FUTURE-READINESS",
      description:
        "Coding, Design Thinking, Entrepreneurship, Financial Literacy, Communication, Leadership — woven together.",
    },
    {
      id: "horizon",
      scrollRange: [0.66, 0.85] as [number, number],
      label: "04",
      eyebrow: "THE OUTCOME",
      title: "Schools and students, growing together.",
      subtitle: "ONE ECOSYSTEM",
      description:
        "TechPhilo partners with schools to bring future-readiness into every classroom — not as an add-on, but as a programme.",
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
} as const;
