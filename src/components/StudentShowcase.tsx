import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './StudentShowcase.css'

const showcaseProjects = [
  {
    title: 'Medical Diagnosis AI',
    domain: 'Healthcare × AI',
    tech: ['Python', 'TensorFlow', 'Computer Vision'],
    outcome: 'Detects anomalies in X-ray images with high accuracy',
    gradient: 'linear-gradient(135deg, #0d47a1, #1565c0)',
    accent: '#4F6FBF',
    icon: '🏥',
  },
  {
    title: 'Smart Inventory System',
    domain: 'Retail × Machine Learning',
    tech: ['Python', 'Scikit-learn', 'React'],
    outcome: 'Reduces overstock by predicting demand patterns',
    gradient: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
    accent: '#43B89C',
    icon: '📦',
  },
  {
    title: 'Sentiment Analysis Dashboard',
    domain: 'NLP × Data Science',
    tech: ['Python', 'BERT', 'Plotly'],
    outcome: 'Analyses customer reviews across thousands of products',
    gradient: 'linear-gradient(135deg, #4a148c, #6a1b9a)',
    accent: '#7C83FD',
    icon: '💬',
  },
  {
    title: 'Autonomous Drone Navigation',
    domain: 'Computer Vision × Robotics',
    tech: ['Python', 'OpenCV', 'ROS'],
    outcome: 'Real-time obstacle avoidance for indoor environments',
    gradient: 'linear-gradient(135deg, #e65100, #ef6c00)',
    accent: '#FF9F43',
    icon: '🚁',
  },
  {
    title: 'E-Commerce Platform',
    domain: 'Full Stack × Cloud',
    tech: ['React', 'Node.js', 'MongoDB'],
    outcome: 'Full-featured platform with payments and real-time inventory',
    gradient: 'linear-gradient(135deg, #006064, #00838f)',
    accent: '#61DAFB',
    icon: '🛒',
  },
  {
    title: 'AI Writing Companion',
    domain: 'Generative AI × Productivity',
    tech: ['Python', 'LangChain', 'Streamlit'],
    outcome: 'Helps students draft, revise and improve written work',
    gradient: 'linear-gradient(135deg, #880e4f, #ad1457)',
    accent: '#FF7AA2',
    icon: '✍️',
  },
]

export default function StudentShowcase() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="section showcase" aria-labelledby="showcase-heading">
      <div className="orb orb-gold" style={{ width: '35vw', height: '35vw', top: '10%', left: '-10%', opacity: 0.06 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Student Showcase</div>
          <h2 id="showcase-heading" className="display-lg">
            From Learners<br />
            <span className="gradient-text">to Builders.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            A glimpse at the kind of projects built inside TechPhilo. Every domain, every technology — brought to life.
          </p>
        </motion.div>

        <div className="showcase__grid">
          {showcaseProjects.map((proj, i) => (
            <motion.article
              key={proj.title}
              className="showcase-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="showcase-card__visual" style={{ background: proj.gradient }}>
                <span className="showcase-card__icon">{proj.icon}</span>
                <div className="showcase-card__visual-accent" style={{ borderColor: proj.accent }} />
              </div>

              <div className="showcase-card__body">
                <div className="showcase-card__domain text-xs" style={{ color: proj.accent }}>
                  {proj.domain}
                </div>
                <h3 className="showcase-card__title">{proj.title}</h3>
                <p className="showcase-card__outcome text-sm text-muted">{proj.outcome}</p>

                <div className="showcase-card__tags">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-tag" style={{ color: proj.accent, borderColor: `${proj.accent}30`, background: `${proj.accent}12` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
