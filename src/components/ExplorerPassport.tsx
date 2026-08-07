import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ExplorerPassport.css'

const missions = [
  { icon: '🔭', title: 'Discovery Mission', badge: 'Explorer', color: '#4F6FBF' },
  { icon: '🧠', title: 'AI & Technology', badge: 'Innovator', color: '#7C83FD' },
  { icon: '💰', title: 'Financial Literacy', badge: 'Money-Smart', color: '#F5CB70' },
  { icon: '🚀', title: 'Entrepreneurship', badge: 'Founder', color: '#FF9F43' },
  { icon: '🎨', title: 'Design Thinking', badge: 'Creator', color: '#FF7AA2' },
  { icon: '🗣️', title: 'Communication', badge: 'Communicator', color: '#43B89C' },
  { icon: '👑', title: 'Leadership', badge: 'Leader', color: '#F5CB70' },
  { icon: '🤝', title: 'Collaboration', badge: 'Team Player', color: '#61DAFB' },
]

export default function ExplorerPassport() {
  const passportRef = useRef<HTMLDivElement>(null)
  const passportInView = useInView(passportRef, { once: true, margin: '-100px' })

  return (
    <section className="section explorer-passport">
      <div className="orb orb-blue" style={{ width: '40vw', height: '40vw', top: '-10%', right: '-10%', opacity: 0.1 }} />
      <div className="container">
        <div className="explorer__layout">
          {/* Left: Content */}
          <motion.div
            className="explorer__content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Explorer Passport</div>
            <h2 className="display-lg">
              A Visible Journey<br />
              <span className="gradient-text">of Growth</span>
            </h2>
            <p className="text-lg text-muted" style={{ margin: '1.25rem 0' }}>
              Every student receives an Explorer Passport — a personal record of their learning journey. Missions, skills, achievements and skill evidence, all in one place.
            </p>
            <p className="text-md text-muted" style={{ marginBottom: '2rem' }}>
              Students don't just complete a course. They collect evidence of who they are becoming — badges, certificates, mission records and skill records that grow with them.
            </p>
            <div className="explorer__features">
              {['Missions & Challenges', 'Skill Badges', 'Achievement Certificates', 'Skill Demonstrations', 'Progress Tracking', 'Grand Expo Highlights'].map(f => (
                <div key={f} className="explorer__feature">
                  <span style={{ color: 'var(--gold)' }}>✦</span>
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Passport visual */}
          <motion.div
            ref={passportRef}
            className="explorer__passport glass"
            initial={{ opacity: 0, y: 40 }}
            animate={passportInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Passport header */}
            <div className="passport__header">
              <div className="passport__logo-area">
                <span style={{ fontSize: '1.5rem' }}>🗺️</span>
                <div>
                  <div className="text-xs" style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Explorer Passport</div>
                  <div className="text-xs text-muted">TechPhilo Learning Journey</div>
                </div>
              </div>
              <div className="passport__level">
                <span className="text-xs" style={{ color: 'var(--gold)' }}>Level 3</span>
                <div className="passport__level-bar">
                  <motion.div
                    style={{ width: 0 }}
                    animate={passportInView ? { width: '68%' } : {}}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="passport__level-fill"
                  />
                </div>
              </div>
            </div>

            {/* Missions grid */}
            <div className="passport__missions">
              <div className="text-xs text-muted" style={{ marginBottom: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Missions Completed</div>
              <div className="passport__missions-grid">
                {missions.map((m, i) => (
                  <motion.div
                    key={m.title}
                    className="passport__mission"
                    style={{ '--m-color': m.color } as React.CSSProperties}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={passportInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 200 }}
                    title={m.title}
                  >
                    <span className="passport__mission-icon">{m.icon}</span>
                    <span className="passport__mission-badge text-xs">{m.badge}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills line */}
            <div className="passport__portfolio">
              <div className="text-xs text-muted" style={{ letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Key Skills</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['AI Project', 'Business Plan', 'Design Prototype', 'Data Report'].map(p => (
                  <span key={p} className="tech-tag" style={{ fontSize: '0.68rem' }}>{p}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
