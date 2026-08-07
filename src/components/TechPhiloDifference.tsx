import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './TechPhiloDifference.css'

const rows = [
  { from: 'Coding Club', to: 'Integrated Future-Readiness Programme', fromIcon: '💻', toIcon: '🚀' },
  { from: 'Separate Subjects', to: 'Connected, Interdisciplinary Learning', fromIcon: '📖', toIcon: '🔗' },
  { from: 'Individual Competitions', to: 'Collaborative Practical Learning', fromIcon: '🏆', toIcon: '🤝' },
  { from: 'Theory & Rote Learning', to: 'Experiential, Mission-Based Learning', fromIcon: '📝', toIcon: '🛠️' },
  { from: 'Certificates Only', to: 'Explorer Passport + Grand Expo', fromIcon: '📜', toIcon: '🎓' },
  { from: 'Limited Visibility of Progress', to: 'Data-Backed Skill Reports & Tracking', fromIcon: '🔭', toIcon: '📊' },
]

export default function TechPhiloDifference() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="section tp-difference">
      <div className="orb orb-blue" style={{ width: '40vw', height: '40vw', bottom: '0%', right: '-10%', opacity: 0.09 }} />
      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>The TechPhilo Difference</div>
          <h2 className="display-lg">
            From Traditional Activities<br />
            <span className="gradient-text">To Integrated Future-Readiness</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            TechPhilo doesn't add to the chaos. It replaces fragmented activities with one coherent, purposeful learning ecosystem.
          </p>
        </motion.div>

        {/* Desktop comparison table */}
        <div className="tp-diff__table" aria-label="Comparison: Traditional vs TechPhilo">
          <div className="tp-diff__table-header">
            <div className="tp-diff__col-label tp-diff__col-label--from">Traditional Approach</div>
            <div className="tp-diff__arrow-spacer" />
            <div className="tp-diff__col-label tp-diff__col-label--to">The TechPhilo Way</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row.from}
              className="tp-diff__row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="tp-diff__cell tp-diff__cell--from">
                <span className="tp-diff__cell-icon">{row.fromIcon}</span>
                <span className="tp-diff__cell-text">{row.from}</span>
              </div>
              <div className="tp-diff__arrow">
                <div className="tp-diff__arrow-line" />
                <span className="tp-diff__arrow-icon">→</span>
              </div>
              <div className="tp-diff__cell tp-diff__cell--to">
                <span className="tp-diff__cell-icon tp-diff__cell-icon--to">{row.toIcon}</span>
                <span className="tp-diff__cell-text tp-diff__cell-text--to">{row.to}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="tp-diff__mobile-cards">
          {rows.map((row, i) => (
            <motion.div
              key={row.from}
              className="tp-diff__mobile-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="tp-diff__mobile-from">
                <span>{row.fromIcon}</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>{row.from}</span>
              </div>
              <div className="tp-diff__mobile-arrow">↓</div>
              <div className="tp-diff__mobile-to">
                <span>{row.toIcon}</span>
                <span className="text-sm" style={{ color: 'var(--gold)', fontWeight: 600 }}>{row.to}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
