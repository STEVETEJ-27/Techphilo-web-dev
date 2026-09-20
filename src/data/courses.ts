import { Code2, Landmark, Lightbulb, MessageSquare, PenTool, Crown, LucideIcon } from 'lucide-react'

export interface CourseModule {
  num: string
  title: string
  desc: string
}

export interface Course {
  slug: string
  title: string
  category: 'technology' | 'entrepreneurship' | 'communication' | 'design' | 'leadership' | 'finance'
  categoryLabel: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  gradeBand: string
  duration: string
  Icon: LucideIcon
  color: string
  summary: string
  badge: string
  capstoneProject: string
  outcomes: string[]
  modules: CourseModule[]
  image?: string
}

export const courses: Course[] = [
  {
    slug: 'coding-technology',
    title: 'Coding & Technology',
    category: 'technology',
    categoryLabel: 'Technology',
    level: 'Beginner',
    gradeBand: 'Grades 6–10',
    duration: '12 weeks',
    Icon: Code2,
    color: 'var(--hue-blue)',
    summary: 'A foundation in coding, AI and modern technology — built around real, hands-on projects rather than theory alone.',
    badge: 'Tech Innovator Badge',
    capstoneProject: 'Smart Community Care Web App',
    outcomes: [
      'Write and debug real code confidently using web standards and algorithms',
      'Understand core AI & data concepts through practical model interactions',
      'Ship a working, responsive web application end-to-end',
      'Build a portfolio-ready case study for Grand Expo presentation'
    ],
    modules: [
      { num: '01', title: 'Computational Logic & Syntax', desc: 'Variables, conditional logic, loops, and structured problem decomposition.' },
      { num: '02', title: 'Web Structure & Interface Design', desc: 'Building responsive user interfaces with HTML, CSS, and modern UI patterns.' },
      { num: '03', title: 'Data Structures & AI Foundations', desc: 'Working with lists, API integrations, and machine learning model prompts.' },
      { num: '04', title: 'Capstone Project & Portfolio Build', desc: 'Developing, testing, and publishing a web application ready for Grand Expo.' }
    ],
    image: '/images/course-coder.png',
  },
  {
    slug: 'financial-literacy',
    title: 'Financial Literacy',
    category: 'finance',
    categoryLabel: 'Life Skills',
    level: 'All Levels',
    gradeBand: 'Grades 7–12',
    duration: '6 weeks',
    Icon: Landmark,
    color: 'var(--hue-gold)',
    summary: 'Practical, real-scenario money skills — budgeting, saving and decision-making that students actually use.',
    badge: 'Money-Smart Explorer Badge',
    capstoneProject: 'Personal Budget & Allowance Planner',
    outcomes: [
      'Build and manage a personal monthly budget with real income/expense tracking',
      'Understand saving vs. spending trade-offs and compounding growth concepts',
      'Evaluate basic financial decisions, opportunity costs, and interest rates',
      'Apply financial decision-making frameworks to a real-life scenario'
    ],
    modules: [
      { num: '01', title: 'Earning, Allowance & Money Mindset', desc: 'Understanding value exchange, personal income, and financial goals.' },
      { num: '02', title: 'Budgeting & Expense Allocation', desc: 'Creating the 50/30/20 rule framework tailored for students.' },
      { num: '03', title: 'Saving, Interest & Smart Purchasing', desc: 'Evaluating inflation, emergency funds, and avoiding impulse decisions.' },
      { num: '04', title: 'Real-World Financial Simulation', desc: 'Simulating life scenario budgets, unexpected costs, and investment choices.' }
    ],
    image: '/images/course-financial-literacy.png',
  },
  {
    slug: 'entrepreneurship-innovation',
    title: 'Entrepreneurship & Innovation',
    category: 'entrepreneurship',
    categoryLabel: 'Innovation',
    level: 'Intermediate',
    gradeBand: 'Grades 8–12',
    duration: '8 weeks',
    Icon: Lightbulb,
    color: 'var(--hue-terracotta)',
    summary: 'Turn an idea into a pitch-ready venture concept, learning validation, positioning and storytelling along the way.',
    badge: 'Venture Founder Badge',
    capstoneProject: 'Eco-Venture School Pitch Deck',
    outcomes: [
      'Validate a real problem worth solving through stakeholder interviews',
      'Build a concise 1-page Business Model Canvas',
      'Pitch a venture idea with confidence to community and school leaders',
      'Learn from iteration, feedback, and customer validation'
    ],
    modules: [
      { num: '01', title: 'Problem Discovery & Market Need', desc: 'Identifying real-world friction points worth solving in schools and communities.' },
      { num: '02', title: 'Solution Design & Business Model Canvas', desc: 'Mapping value propositions, key activities, and revenue/cost structures.' },
      { num: '03', title: 'Financial Projections & Pricing Strategy', desc: 'Calculating unit economics, break-even targets, and pricing tiers.' },
      { num: '04', title: 'The Pitch & Showcase Presentation', desc: 'Crafting persuasive pitch decks and delivering live venture presentations.' }
    ],
    image: '/images/course-innovation.png',
  },
  {
    slug: 'communication',
    title: 'Communication',
    category: 'communication',
    categoryLabel: 'Life Skills',
    level: 'All Levels',
    gradeBand: 'Grades 6–12',
    duration: '6 weeks',
    Icon: MessageSquare,
    color: 'var(--hue-teal)',
    summary: 'Clear, confident expression — written, verbal and presentation skills built through real practice.',
    badge: 'Master Communicator Badge',
    capstoneProject: 'Youth Action Campaign Video & Speech',
    outcomes: [
      'Structure a clear, persuasive argument using the Pyramidal Communication framework',
      'Present ideas confidently to groups without relying on script reading',
      'Give and receive constructive peer feedback effectively',
      'Adapt tone, medium, and body language for diverse audiences'
    ],
    modules: [
      { num: '01', title: 'Structure & Persuasive Logic', desc: 'Framing claims, backing evidence, and structuring concise arguments.' },
      { num: '02', title: 'Public Speaking & Vocal Dynamics', desc: 'Pacing, pause control, eye contact, and managing presentation anxiety.' },
      { num: '03', title: 'Digital & Visual Presentation', desc: 'Designing high-impact slide decks and asynchronous video messages.' },
      { num: '04', title: 'Active Listening & Debate', desc: 'Engaging in constructive dialogues, handling Q&A, and active listening.' }
    ],
    image: '/images/course-communication.png',
  },
  {
    slug: 'design-thinking',
    title: 'Design Thinking',
    category: 'design',
    categoryLabel: 'Innovation',
    level: 'Intermediate',
    gradeBand: 'Grades 7–12',
    duration: '8 weeks',
    Icon: PenTool,
    color: 'var(--hue-plum)',
    summary: 'Human-centred problem solving — empathise, define, ideate, prototype and test, applied to real challenges.',
    badge: 'Design Strategist Badge',
    capstoneProject: 'Campus Accessibility Interactive Prototype',
    outcomes: [
      'Run a structured empathy interview to unearth genuine user needs',
      'Reframe complex problem statements into actionable design prompts',
      'Prototype a physical or digital solution quickly using low-fidelity materials',
      'Test prototypes with real users and iterate based on structured feedback'
    ],
    modules: [
      { num: '01', title: 'Empathy & User Research', desc: 'Empathy maps, user interviews, and observational research techniques.' },
      { num: '02', title: 'Problem Definition & Ideation', desc: 'How Might We questions, brainstorming techniques, and feature prioritization.' },
      { num: '03', title: 'Rapid Wireframing & Prototyping', desc: 'Paper prototyping, digital wireframes, and interactive mockups.' },
      { num: '04', title: 'Usability Testing & Iteration', desc: 'Conducting user tests, gathering structured rubrics, and refining solutions.' }
    ],
    image: '/images/course-DesignThinking.png',
  },
  {
    slug: 'leadership',
    title: 'Leadership',
    category: 'leadership',
    categoryLabel: 'Life Skills',
    level: 'All Levels',
    gradeBand: 'Grades 8–12',
    duration: '6 weeks',
    Icon: Crown,
    color: 'var(--hue-forest)',
    summary: 'Collaboration and ownership built through team projects, not lectures — learning to lead by doing.',
    badge: 'Peer Leader Badge',
    capstoneProject: 'School Peer Mentorship Initiative',
    outcomes: [
      'Lead a small project team through goal-setting and role assignment',
      'Navigate team conflict and disagreements constructively',
      'Take accountability for team outcomes and deadline management',
      'Support and mentor peer team members through empathetic feedback'
    ],
    modules: [
      { num: '01', title: 'Self-Awareness & Leadership Styles', desc: 'Identifying personal strengths, values, and adaptive leadership styles.' },
      { num: '02', title: 'Team Building & Delegation', desc: 'Building trust, assigning strengths-based roles, and clear goal alignment.' },
      { num: '03', title: 'Conflict Resolution & Empathy', desc: 'Mediation frameworks, crucial conversations, and emotional intelligence.' },
      { num: '04', title: 'Project Ownership & Peer Mentoring', desc: 'Executing team initiatives and building sustainable peer mentorship loops.' }
    ],
    image: '/images/course-leadership.png',
  },
]

export const categories: { id: Course['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'technology', label: 'Technology' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
  { id: 'communication', label: 'Communication' },
  { id: 'design', label: 'Design' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'finance', label: 'Life Skills' },
]
