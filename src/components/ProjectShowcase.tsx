import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, BarChart3, Car, Eye, Globe, HeartPulse, Sparkles } from 'lucide-react'
import './ProjectShowcase.css'

const projects = [
  {
    id: 1,
    name: 'AI Healthcare Assistant',
    category: 'Artificial Intelligence',
    tags: ['Python', 'NLP', 'Machine Learning'],
    desc: 'An intelligent assistant that helps patients understand symptoms, schedule consultations, and navigate healthcare information using natural language.',
    gradient: 'linear-gradient(135deg, var(--brand-strong) 0%, var(--brand-strong) 40%, var(--brand) 100%)',
    accent: 'var(--brand)',
    Icon: HeartPulse,
    size: 'large',
  },
  {
    id: 2,
    name: 'Taxi Fare Prediction',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    desc: 'Predictive model trained on ride data to accurately forecast taxi fares using regression and feature engineering techniques.',
    gradient: 'linear-gradient(135deg, var(--hue-green) 0%, var(--hue-green) 60%, var(--hue-green) 100%)',
    accent: 'var(--hue-teal)',
    Icon: Car,
    size: 'medium',
  },
  {
    id: 3,
    name: 'Data Analytics Platform',
    category: 'Data Science',
    tags: ['Python', 'Plotly', 'Dash', 'SQL'],
    desc: 'Interactive analytics dashboard that visualises business metrics, sales trends, and KPI performance in real-time.',
    gradient: 'linear-gradient(135deg, var(--hue-violet) 0%, var(--hue-violet) 50%, var(--hue-violet) 100%)',
    accent: 'var(--hue-violet)',
    Icon: BarChart3,
    size: 'medium',
  },
  {
    id: 4,
    name: 'Computer Vision Application',
    category: 'Computer Vision',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'],
    desc: 'Real-time object detection and image classification system capable of identifying objects in live video streams.',
    gradient: 'linear-gradient(135deg, var(--accent-strong) 0%, var(--hue-amber) 50%, var(--hue-amber) 100%)',
    accent: 'var(--hue-amber)',
    Icon: Eye,
    size: 'large',
  },
  {
    id: 5,
    name: 'Full Stack Web Application',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    desc: 'End-to-end web platform with secure authentication, real-time updates, and a polished, responsive user interface.',
    gradient: 'linear-gradient(135deg, var(--hue-teal) 0%, var(--hue-teal) 50%, var(--hue-teal) 100%)',
    accent: 'var(--hue-blue)',
    Icon: Globe,
    size: 'medium',
  },
  {
    id: 6,
    name: 'Generative AI Application',
    category: 'Generative AI',
    tags: ['Python', 'LangChain', 'OpenAI', 'Streamlit'],
    desc: 'LLM-powered application that generates creative content, answers domain-specific questions, and summarises complex documents.',
    gradient: 'linear-gradient(135deg, var(--hue-rose) 0%, var(--hue-rose) 50%, var(--hue-rose) 100%)',
    accent: 'var(--hue-rose)',
    Icon: Sparkles,
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
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Project Showcase</div>
          <h2 className="display-lg">
            Don't Just Learn Technology.<br />
            <span className="gradient-text">Build With It.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            Every project is a step forward. Real problems, real technology, real outcomes.
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
