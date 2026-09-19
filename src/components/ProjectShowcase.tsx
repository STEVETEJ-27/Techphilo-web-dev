import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Code2, Landmark, Lightbulb, MessageSquare, PenTool, Crown } from 'lucide-react'
import './ProjectShowcase.css'

const projects = [
  {
    id: 1,
    name: 'Smart Community Care Web App',
    category: 'Coding & Technology',
    tags: ['Coding', 'AI Basics', 'Web App'],
    desc: 'An interactive application designed by students to connect volunteers with local community care initiatives.',
    gradient: 'linear-gradient(135deg, var(--brand-strong) 0%, var(--brand) 100%)',
    accent: 'var(--brand)',
    Icon: Code2,
    size: 'large',
  },
  {
    id: 2,
    name: 'Student Savings & Financial Planner',
    category: 'Financial Literacy',
    tags: ['Budgeting', 'Savings', 'Money Skills'],
    desc: 'A real-scenario budgeting system that helps teenagers track goals, manage allowances, and evaluate financial choices.',
    gradient: 'linear-gradient(135deg, var(--accent) 0%, var(--hue-teal) 100%)',
    accent: 'var(--accent)',
    Icon: Landmark,
    size: 'medium',
  },
  {
    id: 3,
    name: 'Zero-Waste Campus Venture Pitch',
    category: 'Entrepreneurship & Innovation',
    tags: ['Market Validation', 'Business Canvas', 'Pitch Deck'],
    desc: 'A validated business model and pitch deck presented to school administrators to implement sustainable recycling.',
    gradient: 'linear-gradient(135deg, var(--hue-amber) 0%, var(--hue-amber) 100%)',
    accent: 'var(--hue-amber)',
    Icon: Lightbulb,
    size: 'medium',
  },
  {
    id: 4,
    name: 'Youth Environmental Action Campaign',
    category: 'Communication',
    tags: ['Public Speaking', 'Persuasive Writing', 'Presentation'],
    desc: 'A multi-channel communication initiative featuring speeches, written proposals, and digital presentations.',
    gradient: 'linear-gradient(135deg, var(--hue-teal) 0%, var(--hue-teal) 100%)',
    accent: 'var(--hue-teal)',
    Icon: MessageSquare,
    size: 'large',
  },
  {
    id: 5,
    name: 'Campus Accessibility Navigation System',
    category: 'Design Thinking',
    tags: ['Empathy Mapping', 'User Research', 'Prototyping'],
    desc: 'A human-centred redesign of school navigation and physical signage built through student empathy interviews.',
    gradient: 'linear-gradient(135deg, var(--hue-rose) 0%, var(--hue-rose) 100%)',
    accent: 'var(--hue-rose)',
    Icon: PenTool,
    size: 'medium',
  },
  {
    id: 6,
    name: 'Student Mentorship & Leadership Network',
    category: 'Leadership',
    tags: ['Team Leadership', 'Peer Coaching', 'Ownership'],
    desc: 'A student-driven community leadership framework pairing senior student leaders with incoming freshmen.',
    gradient: 'linear-gradient(135deg, var(--hue-violet) 0%, var(--hue-violet) 100%)',
    accent: 'var(--hue-violet)',
    Icon: Crown,
    size: 'medium',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref}
      className={`project-card project-card--${project.size}`}
      style={{ '--project-accent': project.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient */}
      <div className="project-card__bg" style={{ background: project.gradient }} />

      {/* Pattern overlay */}
      <div className="project-card__pattern" />

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__top">
          <span className="project-card__icon"><project.Icon size={20} strokeWidth={1.7} /></span>
          <motion.div
            className="project-card__action"
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="project-card__arrow-btn">
              <ArrowUpRight size={16} />
            </div>
          </motion.div>
        </div>

        <div className="project-card__meta">
          <span className="text-xs" style={{ color: `${project.accent}`, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            {project.category}
          </span>
        </div>

        <h3 className="project-card__title">{project.name}</h3>

        <motion.p
          className="project-card__desc text-sm"
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {project.desc}
        </motion.p>

        <motion.div
          className="project-card__tags"
          animate={{ opacity: hovered ? 1 : 0.6, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.25 }}
        >
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag" style={{ color: project.accent, borderColor: `color-mix(in srgb, ${project.accent} 19%, transparent)`, background: `color-mix(in srgb, ${project.accent} 8%, transparent)` }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function ProjectShowcase() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section projects">
      <div className="orb orb-blue" style={{ width: '40vw', height: '40vw', bottom: '10%', left: '-10%', opacity: 0.1 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Student Project Showcase</div>
          <h2 className="display-lg">
            Don't Just Learn Concepts.<br />
            <span className="gradient-text">Build Real Projects.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            Explore practical student projects developed across TechPhilo’s 6 core course pathways.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
