import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './ProjectShowcase.css'

const projects = [
  {
    id: 1,
    name: 'AI Healthcare Assistant',
    category: 'Artificial Intelligence',
    tags: ['Python', 'NLP', 'Machine Learning'],
    desc: 'An intelligent assistant that helps patients understand symptoms, schedule consultations, and navigate healthcare information using natural language.',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 40%, #1565c0 100%)',
    accent: '#4F6FBF',
    icon: '🏥',
    size: 'large',
  },
  {
    id: 2,
    name: 'Taxi Fare Prediction',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    desc: 'Predictive model trained on ride data to accurately forecast taxi fares using regression and feature engineering techniques.',
    gradient: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)',
    accent: '#43B89C',
    icon: '🚕',
    size: 'medium',
  },
  {
    id: 3,
    name: 'Data Analytics Platform',
    category: 'Data Science',
    tags: ['Python', 'Plotly', 'Dash', 'SQL'],
    desc: 'Interactive analytics dashboard that visualises business metrics, sales trends, and KPI performance in real-time.',
    gradient: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #7b1fa2 100%)',
    accent: '#7C83FD',
    icon: '📊',
    size: 'medium',
  },
  {
    id: 4,
    name: 'Computer Vision Application',
    category: 'Computer Vision',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'],
    desc: 'Real-time object detection and image classification system capable of identifying objects in live video streams.',
    gradient: 'linear-gradient(135deg, #e65100 0%, #f57c00 50%, #ff9800 100%)',
    accent: '#FF9F43',
    icon: '👁️',
    size: 'large',
  },
  {
    id: 5,
    name: 'Full Stack Web Application',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    desc: 'End-to-end web platform with secure authentication, real-time updates, and a polished, responsive user interface.',
    gradient: 'linear-gradient(135deg, #006064 0%, #00838f 50%, #00acc1 100%)',
    accent: '#61DAFB',
    icon: '🌐',
    size: 'medium',
  },
  {
    id: 6,
    name: 'Generative AI Application',
    category: 'Generative AI',
    tags: ['Python', 'LangChain', 'OpenAI', 'Streamlit'],
    desc: 'LLM-powered application that generates creative content, answers domain-specific questions, and summarises complex documents.',
    gradient: 'linear-gradient(135deg, #880e4f 0%, #ad1457 50%, #c2185b 100%)',
    accent: '#FF7AA2',
    icon: '✨',
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
          <span className="project-card__icon">{project.icon}</span>
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
            <span key={tag} className="tech-tag" style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}15` }}>
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
