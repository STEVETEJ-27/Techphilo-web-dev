import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './LearningExperience.css'

const learningFeatures = [
  {
    icon: '🎥',
    title: 'Live Sessions',
    desc: 'Join live classes with instructors and ask questions in real time. No recording-only learning.',
    color: '#4F6FBF',
  },
  {
    icon: '🧑‍🏫',
    title: 'Mentorship',
    desc: 'Work directly with mentors who have built real things. Guidance that comes from experience.',
    color: '#F5CB70',
  },
  {
    icon: '📝',
    title: 'Practical Assignments',
    desc: 'Assignments designed to challenge, not just verify. Every task builds toward something real.',
    color: '#43B89C',
  },
  {
    icon: '🛠️',
    title: 'Hands-on Projects',
    desc: 'Apply learning to projects that solve actual problems — not synthetic textbook exercises.',
    color: '#FF9F43',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    desc: 'Work in project teams. Understand how real-world development happens in groups.',
    color: '#7C83FD',
  },
  {
    icon: '🗂️',
    title: 'Skill Development',
    desc: 'Everything you learn is practical and applied. Graduate with real skills.',
    color: '#FF7AA2',
  },
]

const workspaceItems = [
  { label: 'student.py', type: 'file', icon: '🐍', delay: 0 },
  { label: 'AI Project', type: 'project', icon: '🤖', delay: 0.3 },
  { label: 'Module 3 Complete ✓', type: 'progress', icon: '✅', delay: 0.6 },
  { label: 'Mentor Session — 3pm', type: 'event', icon: '🎥', delay: 0.9 },
  { label: 'skills/index.html', type: 'file', icon: '🌐', delay: 1.2 },
]

export default function LearningExperience() {
  const headRef = useRef<HTMLDivElement>(null)
  const workspaceRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const workspaceInView = useInView(workspaceRef, { once: true, margin: '-100px' })

  return (
    <section id="learning" className="section learning">
      <div className="orb orb-blue" style={{ width: '45vw', height: '45vw', top: '-5%', right: '-10%', opacity: 0.1 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Learning Experience</div>
          <h2 className="display-lg gradient-text">
            Learning Should Feel<br />Like Building.
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            Every learning element at TechPhilo is designed to produce something — a skill, a new capability, or a deeper understanding.
          </p>
        </motion.div>

        <div className="learning__layout">
          {/* Features Grid */}
          <div className="learning__features">
            {learningFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="learning__feat-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
              >
                <div className="learning__feat-icon" style={{ background: `${feat.color}18`, border: `1px solid ${feat.color}30` }}>
                  {feat.icon}
                </div>
                <h3 className="display-sm learning__feat-title" style={{ color: 'var(--white)' }}>{feat.title}</h3>
                <p className="text-sm text-muted">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Workspace Visual */}
          <motion.div
            ref={workspaceRef}
            className="learning__workspace glass"
            initial={{ opacity: 0, x: 40 }}
            animate={workspaceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Workspace header */}
            <div className="learning__ws-header">
              <div className="learning__ws-dots">
                <span style={{ background: '#ff5f57' }} />
                <span style={{ background: '#febc2e' }} />
                <span style={{ background: '#28c840' }} />
              </div>
              <span className="text-xs text-muted" style={{ marginLeft: '0.75rem' }}>TechPhilo Workspace</span>
            </div>

            {/* Sidebar */}
            <div className="learning__ws-body">
              <div className="learning__ws-sidebar">
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', padding: '0 0.75rem' }}>
                  Explorer
                </div>
                {workspaceItems.map((item, _i) => (
                  <motion.div
                    key={item.label}
                    className={`learning__ws-file learning__ws-file--${item.type}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={workspaceInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: item.delay + 0.5, duration: 0.5 }}
                  >
                    <span>{item.icon}</span>
                    <span className="text-xs">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Code area */}
              <div className="learning__ws-editor">
                <motion.div
                  className="learning__ws-code"
                  initial={{ opacity: 0 }}
                  animate={workspaceInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div style={{ color: '#6b88d4', fontSize: '0.78rem', fontFamily: 'monospace', lineHeight: 2 }}>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>1</span><span style={{ color: '#4F6FBF' }}>import</span> torch</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>2</span><span style={{ color: '#4F6FBF' }}>import</span> numpy as np</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>3</span>&nbsp;</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>4</span><span style={{ color: '#F5CB70' }}>class</span> <span style={{ color: '#7dd3a8' }}>Model</span>:</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#F5CB70' }}>def</span> <span style={{ color: '#7dd3a8' }}>forward</span>(self, x):</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4F6FBF' }}>return</span> self.net(x)</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>7</span>&nbsp;</div>
                    <div><span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}>8</span><span style={{ color: '#6b9f7a' }}># Training your model...</span></div>
                  </div>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                  className="learning__ws-progress"
                  initial={{ opacity: 0, y: 10 }}
                  animate={workspaceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="learning__ws-progress-info">
                    <span className="text-xs text-muted">Learning Path: AI & ML</span>
                    <span className="text-xs" style={{ color: 'var(--gold)' }}>42% Complete</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--blue), var(--gold))', borderRadius: '4px' }}
                      initial={{ width: 0 }}
                      animate={workspaceInView ? { width: '42%' } : {}}
                      transition={{ delay: 1.5, duration: 1.2 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
