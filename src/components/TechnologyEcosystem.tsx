import { useState, useRef } from 'react'
import { Atom, BarChart3, Bot, Brain, Cloud, Code2, Eye, Hexagon, Leaf, Music, Search, Settings, Sparkles } from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './TechnologyEcosystem.css'

const technologies = [
  {
    id: 'python', label: 'Python', Icon: Code2, color: 'var(--hue-blue)', category: 'Language',
    desc: 'The foundation of modern AI and data science. Write clean, powerful code that works across every domain.',
    related: ['AI', 'ML', 'Data Science'],
    projects: ['Data Analysis Tools', 'ML Pipelines', 'Automation Scripts'],
    x: 50, y: 50,
  },
  {
    id: 'ai', label: 'AI', Icon: Bot, color: 'var(--accent)', category: 'Domain',
    desc: 'Artificial Intelligence transforms how systems learn, reason and interact. Build models that think.',
    related: ['Python', 'ML', 'Gen AI'],
    projects: ['Conversational Agents', 'Recommendation Systems', 'AI Assistants'],
    x: 20, y: 25,
  },
  {
    id: 'ml', label: 'Machine Learning', Icon: Brain, color: 'var(--hue-violet)', category: 'Domain',
    desc: 'Train models on real data to make predictions, classifications, and decisions at scale.',
    related: ['Python', 'Data Science', 'AI'],
    projects: ['Predictive Models', 'Classification Systems', 'Anomaly Detection'],
    x: 78, y: 22,
  },
  {
    id: 'data', label: 'Data Science', Icon: BarChart3, color: 'var(--hue-teal)', category: 'Domain',
    desc: 'Turn raw data into insight. Analyse, visualise, and communicate findings that drive real decisions.',
    related: ['Python', 'ML', 'Cloud'],
    projects: ['Analytics Dashboards', 'Exploratory Analysis', 'Business Intelligence'],
    x: 82, y: 68,
  },
  {
    id: 'genai', label: 'Generative AI', Icon: Sparkles, color: 'var(--hue-rose)', category: 'Emerging',
    desc: 'Build applications powered by large language models, image generation, and creative AI systems.',
    related: ['AI', 'Python', 'Cloud'],
    projects: ['Content Generators', 'AI Art Tools', 'LLM Applications'],
    x: 15, y: 70,
  },
  {
    id: 'cv', label: 'Computer Vision', Icon: Eye, color: 'var(--hue-amber)', category: 'Domain',
    desc: 'Teach computers to see — object detection, facial recognition, medical imaging and more.',
    related: ['ML', 'Python', 'AI'],
    projects: ['Object Detection Apps', 'Image Classifiers', 'Video Analytics'],
    x: 50, y: 20,
  },
  {
    id: 'react', label: 'React', Icon: Atom, color: 'var(--hue-blue)', category: 'Frontend',
    desc: 'Build fast, interactive user interfaces with the world\'s most popular frontend library.',
    related: ['Node.js', 'Full Stack'],
    projects: ['Web Applications', 'Dashboards', 'Portfolio Sites'],
    x: 18, y: 50,
  },
  {
    id: 'node', label: 'Node.js', Icon: Hexagon, color: 'var(--hue-green)', category: 'Backend',
    desc: 'Server-side JavaScript that scales. Build APIs, real-time apps, and backend services.',
    related: ['React', 'MongoDB', 'Full Stack'],
    projects: ['REST APIs', 'Real-time Apps', 'Microservices'],
    x: 82, y: 45,
  },
  {
    id: 'cloud', label: 'Cloud', Icon: Cloud, color: 'var(--hue-blue)', category: 'Infrastructure',
    desc: 'Deploy, scale, and manage applications on cloud platforms — AWS, GCP, Azure and beyond.',
    related: ['Data Science', 'Node.js', 'Automation'],
    projects: ['Serverless Functions', 'Deployed ML Models', 'Cloud Pipelines'],
    x: 50, y: 82,
  },
  {
    id: 'django', label: 'Django', Icon: Music, color: 'var(--hue-green)', category: 'Backend',
    desc: 'The web framework for perfectionists with deadlines. Build robust Python-powered web apps.',
    related: ['Python', 'MongoDB', 'Cloud'],
    projects: ['Web Platforms', 'REST APIs', 'Admin Systems'],
    x: 30, y: 82,
  },
  {
    id: 'mongo', label: 'MongoDB', Icon: Leaf, color: 'var(--hue-green)', category: 'Database',
    desc: 'Flexible, scalable NoSQL database for modern applications that handle dynamic data.',
    related: ['Node.js', 'Django', 'Full Stack'],
    projects: ['Data Storage', 'App Backends', 'Analytics Stores'],
    x: 70, y: 82,
  },
  {
    id: 'automation', label: 'Automation', Icon: Settings, color: 'var(--hue-violet)', category: 'Tools',
    desc: 'Automate repetitive tasks, workflows, and deployments. Work smarter, not harder.',
    related: ['Python', 'Cloud', 'Data Science'],
    projects: ['CI/CD Pipelines', 'Data Scrapers', 'Workflow Bots'],
    x: 50, y: 50,
  },
]


export default function TechnologyEcosystem() {
  const [active, setActive] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const activeTech = technologies.find(t => t.id === (active || hovered))

  // For the network layout — use a grid for mobile
  const gridTechs = technologies.filter(t => t.id !== 'automation')

  return (
    <section id="technologies" className="section tech-ecosystem">
      <div className="orb orb-gold" style={{ width: '40vw', height: '40vw', top: '20%', right: '-10%', opacity: 0.07 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Technology Ecosystem</div>
          <h2 className="display-lg gradient-text-blue">
            One Ecosystem.<br />Every Technology You Need.
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            Explore the interconnected technologies that power modern digital careers. Hover to discover connections.
          </p>
        </motion.div>

        <div className="tech-ecosystem__layout" ref={containerRef}>
          {/* Tech Grid */}
          <div className="tech-ecosystem__grid">
            {gridTechs.map((tech, i) => (
              <motion.button
                key={tech.id}
                className={`tech-node glass ${active === tech.id || hovered === tech.id ? 'tech-node--active' : ''}`}
                style={{ '--node-color': tech.color } as React.CSSProperties}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(active === tech.id ? null : tech.id)}
                onMouseEnter={() => setHovered(tech.id)}
                onMouseLeave={() => setHovered(null)}
                aria-pressed={active === tech.id}
                aria-label={`${tech.label} — ${tech.category}`}
              >
                <span className="tech-node__icon"><tech.Icon size={20} strokeWidth={1.7} /></span>
                <span className="tech-node__label">{tech.label}</span>
                <span className="tech-node__category text-xs">{tech.category}</span>
              </motion.button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="tech-ecosystem__panel">
            <AnimatePresence mode="wait">
              {activeTech ? (
                <motion.div
                  key={activeTech.id}
                  className="tech-detail glass"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="tech-detail__header">
                    <span className="tech-detail__icon"><activeTech.Icon size={20} strokeWidth={1.7} /></span>
                    <div>
                      <h3 className="display-sm" style={{ color: activeTech.color }}>{activeTech.label}</h3>
                      <span className="label-tag" style={{ marginTop: '0.3rem', display: 'inline-flex', color: activeTech.color, borderColor: `color-mix(in srgb, ${activeTech.color} 25%, transparent)`, background: `color-mix(in srgb, ${activeTech.color} 8%, transparent)` }}>{activeTech.category}</span>
                    </div>
                  </div>
                  <p className="text-md text-muted" style={{ margin: '1rem 0' }}>{activeTech.desc}</p>

                  <div className="tech-detail__section">
                    <span className="text-xs" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', display: 'block', marginBottom: '0.6rem' }}>Related Technologies</span>
                    <div className="tech-detail__tags">
                      {activeTech.related.map(r => (
                        <span key={r} className="tech-tag">{r}</span>
                      ))}
                    </div>
                  </div>

                  <div className="tech-detail__section" style={{ marginTop: '1rem' }}>
                    <span className="text-xs" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', display: 'block', marginBottom: '0.6rem' }}>Example Applications</span>
                    <div className="tech-detail__projects">
                      {activeTech.projects.map(p => (
                        <div key={p} className="tech-detail__project">
                          <span style={{ color: activeTech.color, marginRight: '0.5rem' }}>→</span>
                          <span className="text-sm">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="tech-detail tech-detail--empty glass"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="tech-detail__empty-content">
                    <span style={{ fontSize: '2.5rem' }}><Search size={16} strokeWidth={2} /></span>
                    <p className="text-md text-muted" style={{ marginTop: '1rem', textAlign: 'center' }}>
                      Hover or click a technology<br />to explore its ecosystem.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
