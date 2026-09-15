import { Code2, Landmark, Lightbulb, MessageSquare, PenTool, Crown, LucideIcon } from 'lucide-react'

export interface Course {
  slug: string
  title: string
  category: 'technology' | 'entrepreneurship' | 'communication' | 'design' | 'leadership' | 'finance'
  categoryLabel: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  duration: string
  Icon: LucideIcon
  color: string
  summary: string
  outcomes: string[]
  image?: string
}

export const courses: Course[] = [
  {
    slug: 'coding-technology',
    title: 'Coding & Technology',
    category: 'technology',
    categoryLabel: 'Technology',
    level: 'Beginner',
    duration: '12 weeks',
    Icon: Code2,
    color: 'var(--brand)',
    summary: 'A foundation in coding, AI and modern technology — built around real, hands-on projects rather than theory alone.',
    outcomes: ['Write and debug real code confidently', 'Understand core AI & data concepts', 'Ship a working project end-to-end', 'Build a portfolio-ready case study'],
    image: '/images/course-coder.png',
  },
  {
    slug: 'financial-literacy',
    title: 'Financial Literacy',
    category: 'finance',
    categoryLabel: 'Life Skills',
    level: 'All Levels',
    duration: '6 weeks',
    Icon: Landmark,
    color: 'var(--accent)',
    summary: 'Practical, real-scenario money skills — budgeting, saving and decision-making that students actually use.',
    outcomes: ['Build and manage a simple budget', 'Understand saving vs. spending trade-offs', 'Evaluate basic financial decisions', 'Apply concepts to a real-life scenario'],
    image: '/images/course-financial-literacy.png',
  },
  {
    slug: 'entrepreneurship-innovation',
    title: 'Entrepreneurship & Innovation',
    category: 'entrepreneurship',
    categoryLabel: 'Innovation',
    level: 'Intermediate',
    duration: '8 weeks',
    Icon: Lightbulb,
    color: 'var(--hue-amber)',
    summary: 'Turn an idea into a pitch-ready venture concept, learning validation, positioning and storytelling along the way.',
    outcomes: ['Validate a real problem worth solving', 'Build a simple business model canvas', 'Pitch an idea with confidence', 'Learn from iteration and feedback'],
    image: '/images/course-innovation.png',
  },
  {
    slug: 'communication',
    title: 'Communication',
    category: 'communication',
    categoryLabel: 'Life Skills',
    level: 'All Levels',
    duration: '6 weeks',
    Icon: MessageSquare,
    color: 'var(--hue-teal)',
    summary: 'Clear, confident expression — written, verbal and presentation skills built through real practice.',
    outcomes: ['Structure a clear, persuasive argument', 'Present ideas confidently to a group', 'Give and receive constructive feedback', 'Adapt tone for different audiences'],
    image: '/images/course-communication.png',
  },
  {
    slug: 'design-thinking',
    title: 'Design Thinking',
    category: 'design',
    categoryLabel: 'Innovation',
    level: 'Intermediate',
    duration: '8 weeks',
    Icon: PenTool,
    color: 'var(--hue-rose)',
    summary: 'Human-centred problem solving — empathise, define, ideate, prototype and test, applied to real challenges.',
    outcomes: ['Run a structured empathy interview', 'Reframe a problem before solving it', 'Prototype a solution quickly', 'Test and iterate based on feedback'],
    image: '/images/course-DesignThinking.png',
  },
  {
    slug: 'leadership',
    title: 'Leadership',
    category: 'leadership',
    categoryLabel: 'Life Skills',
    level: 'All Levels',
    duration: '6 weeks',
    Icon: Crown,
    color: 'var(--hue-violet)',
    summary: 'Collaboration and ownership built through team projects, not lectures — learning to lead by doing.',
    outcomes: ['Lead a small project team', 'Navigate disagreement constructively', 'Take ownership of outcomes', 'Support and mentor peers'],
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
