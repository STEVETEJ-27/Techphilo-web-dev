import { useRef } from 'react'
import { Globe2, GraduationCap, Presentation, School, Users } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import './GrandExpo.css'

const connections = [
  { Icon: GraduationCap, label: 'Students', desc: 'Present their projects with pride and confidence', color: 'var(--brand)' },
  { Icon: Users, label: 'Parents', desc: 'Witness and celebrate their child\'s growth', color: 'var(--accent)' },
  { Icon: Presentation, label: 'Teachers', desc: 'Showcase the impact of their facilitation', color: 'var(--hue-teal)' },
  { Icon: School, label: 'School', desc: 'Demonstrate future-readiness to the community', color: 'var(--hue-violet)' },
  { Icon: Globe2, label: 'Community', desc: 'Engage with the next generation of builders', color: 'var(--hue-amber)' },
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
              <span style={{ color: 'var(--accent)' }}>GRAND EXPO</span>
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
                <div className="expo__conn-icon" style={{ background: `color-mix(in srgb, ${c.color} 9%, transparent)`, border: `1px solid color-mix(in srgb, ${c.color} 21%, transparent)` }}>
                  <c.Icon size={20} strokeWidth={1.7} />
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
