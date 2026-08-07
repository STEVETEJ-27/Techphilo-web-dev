import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './ImpactSection.css'

const stats = [
  { value: 100, suffix: '+', label: 'Projects', subLabel: 'Built by students', icon: '🛠️' },
  { value: 50, suffix: '+', label: 'Learning Modules', subLabel: 'Structured content', icon: '📚' },
  { value: 10, suffix: '+', label: 'Technology Domains', subLabel: 'From AI to Full Stack', icon: '🌐' },
  { value: 7, suffix: '', label: 'Learning Paths', subLabel: 'Tailored to your goals', icon: '🗺️' },
]

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, duration / 60)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="counter-number">{count}{suffix}</span>
  )
}

const capabilities = [
  { icon: '🎯', title: 'Goal-Oriented Learning', desc: 'Every path is designed with a clear outcome — a skill, a project, or a portfolio piece.' },
  { icon: '🔄', title: 'Iterative Practice', desc: 'Build, review, iterate. The same cycle used by real professionals.' },
  { icon: '📈', title: 'Progress Tracking', desc: 'Monitor your learning velocity and understand where to focus next.' },
  { icon: '🌱', title: 'Continuous Growth', desc: 'The learning never stops — new content added as technology evolves.' },
]

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section impact">
      <div className="orb orb-blue" style={{ width: '50vw', height: '50vw', top: '-20%', right: '-15%', opacity: 0.1 }} />
      <div className="orb orb-gold" style={{ width: '30vw', height: '30vw', bottom: '-10%', left: '-5%', opacity: 0.06 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Platform Capabilities</div>
          <h2 className="display-lg gradient-text-blue">
            Built to Help You<br />Go Further, Faster.
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            TechPhilo is built around the idea that the best learning produces tangible results.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={sectionRef} className="impact__stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="impact__stat glass"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            >
              <span className="impact__stat-icon">{stat.icon}</span>
              <div className="impact__stat-value">
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="impact__stat-label">{stat.label}</div>
              <div className="impact__stat-sub text-xs text-muted">{stat.subLabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="impact__capabilities">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="impact__cap-card glass"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span className="impact__cap-icon">{cap.icon}</span>
              <div>
                <h3 className="impact__cap-title text-md" style={{ fontWeight: 600, marginBottom: '0.3rem' }}>{cap.title}</h3>
                <p className="text-sm text-muted">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
