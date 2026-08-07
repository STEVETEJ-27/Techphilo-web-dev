import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './GrandExpo.css'

const connections = [
  { icon: '🎓', label: 'Students', desc: 'Present their projects with pride and confidence', color: '#4F6FBF' },
  { icon: '👨‍👩‍👧', label: 'Parents', desc: 'Witness and celebrate their child\'s growth', color: '#F5CB70' },
  { icon: '🧑‍🏫', label: 'Teachers', desc: 'Showcase the impact of their facilitation', color: '#43B89C' },
  { icon: '🏫', label: 'School', desc: 'Demonstrate future-readiness to the community', color: '#7C83FD' },
  { icon: '🌍', label: 'Community', desc: 'Engage with the next generation of builders', color: '#FF9F43' },
]

export default function GrandExpo() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="section grand-expo">
      <div className="grand-expo__bg-glow" />
      <div className="orb orb-gold" style={{ width: '45vw', height: '45vw', bottom: '-10%', left: '-10%', opacity: 0.07 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Grand Expo</div>
          <h2 className="display-lg">
            Learning Deserves<br />
            <span className="gradient-text">To Be Seen.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 580, margin: '1.25rem auto 0' }}>
            The Grand Expo is the culmination of the TechPhilo journey — a school-wide celebration where students present their work, parents witness the transformation and communities come together to celebrate learning.
          </p>
        </motion.div>

        {/* Exhibition stage visual */}
        <motion.div
          className="expo__stage glass"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Stage header */}
          <div className="expo__stage-banner">
            <div className="expo__banner-lights">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="expo__light"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5 + i * 0.3, delay: i * 0.2 }}
                />
              ))}
            </div>
            <h3 className="expo__banner-text display-sm">
              <span style={{ color: 'var(--gold)' }}>GRAND EXPO</span>
              <span className="expo__banner-sub">Student Learning Showcase</span>
            </h3>
          </div>

          {/* Connections */}
          <div className="expo__connections">
            {connections.map((c, i) => (
              <motion.div
                key={c.label}
                className="expo__connection"
                style={{ '--conn-color': c.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              >
                <div className="expo__conn-icon" style={{ background: `${c.color}18`, border: `1px solid ${c.color}35` }}>
                  {c.icon}
                </div>
                <div className="expo__conn-label" style={{ color: c.color }}>{c.label}</div>
                <div className="expo__conn-desc text-xs text-muted">{c.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div
            className="expo__message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-md text-muted" style={{ textAlign: 'center' }}>
              <span className="text-gold" style={{ fontWeight: 600 }}>The Grand Expo</span> is not just an event — it is proof of transformation.
              Students who once had an idea now have a project. A skill. A story.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
