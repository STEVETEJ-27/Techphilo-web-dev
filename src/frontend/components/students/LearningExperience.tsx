import { useRef } from 'react'
import { Bot, CheckCircle2, Code2, FileText, FolderOpen, Globe, Handshake, Presentation, Video, Wrench } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import './LearningExperience.css'

const learningFeatures = [
  {
    Icon: Video,
    title: 'Live Sessions',
    desc: 'Join live classes with instructors and ask questions in real time. No recording-only learning.',
    color: 'var(--brand)',
  },
  {
    Icon: Presentation,
    title: 'Mentorship',
    desc: 'Work directly with mentors who have built real things. Guidance that comes from experience.',
    color: 'var(--accent)',
  },
  {
    Icon: FileText,
    title: 'Practical Assignments',
    desc: 'Assignments designed to challenge, not just verify. Every task builds toward something real.',
    color: 'var(--hue-teal)',
  },
  {
    Icon: Wrench,
    title: 'Hands-on Projects',
    desc: 'Apply learning to projects that solve actual problems — not synthetic textbook exercises.',
    color: 'var(--hue-amber)',
  },
  {
    Icon: Handshake,
    title: 'Team Collaboration',
    desc: 'Work in project teams. Understand how real-world development happens in groups.',
    color: 'var(--hue-violet)',
  },
  {
    Icon: FolderOpen,
    title: 'Skill Development',
    desc: 'Everything you learn is practical and applied. Graduate with real skills.',
    color: 'var(--hue-rose)',
  },
]

const workspaceItems = [
  { label: 'student.py', type: 'file', Icon: Code2, delay: 0 },
  { label: 'AI Project', type: 'project', Icon: Bot, delay: 0.3 },
  { label: 'Module 3 Complete', type: 'progress', Icon: CheckCircle2, delay: 0.6 },
  { label: 'Mentor Session — 3pm', type: 'event', Icon: Video, delay: 0.9 },
  { label: 'skills/index.html', type: 'file', Icon: Globe, delay: 1.2 },
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
                <div className="learning__feat-icon" style={{ background: `color-mix(in srgb, ${feat.color} 9%, transparent)`, border: `1px solid color-mix(in srgb, ${feat.color} 19%, transparent)` }}>
                  <feat.Icon size={20} strokeWidth={1.7} />
                </div>
                <h3 className="display-sm learning__feat-title" style={{ color: 'var(--ink)' }}>{feat.title}</h3>
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
                <span style={{ background: 'var(--hue-rose)' }} />
                <span style={{ background: 'var(--hue-amber)' }} />
                <span style={{ background: 'var(--hue-green)' }} />
              </div>
              <span className="text-xs text-muted" style={{ marginLeft: '0.75rem' }}>TechPhilo Workspace</span>
            </div>

            {/* Sidebar */}
            <div className="learning__ws-body">
              <div className="learning__ws-sidebar">
                <div className="text-xs" style={{ color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', padding: '0 0.75rem' }}>
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
                    <span><item.Icon size={20} strokeWidth={1.7} /></span>
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
                  <div style={{ color: 'var(--brand-bright)', fontSize: '0.78rem', fontFamily: 'monospace', lineHeight: 2 }}>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>1</span><span style={{ color: 'var(--brand)' }}>import</span> torch</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>2</span><span style={{ color: 'var(--brand)' }}>import</span> numpy as np</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>3</span>&nbsp;</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>4</span><span style={{ color: 'var(--accent)' }}>class</span> <span style={{ color: 'var(--hue-green)' }}>Model</span>:</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--accent)' }}>def</span> <span style={{ color: 'var(--hue-green)' }}>forward</span>(self, x):</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--brand)' }}>return</span> self.net(x)</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>7</span>&nbsp;</div>
                    <div><span style={{ color: 'var(--text-faint)', marginRight: '1rem' }}>8</span><span style={{ color: 'var(--hue-green)' }}># Training your model...</span></div>
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
                    <span className="text-xs" style={{ color: 'var(--accent)' }}>42% Complete</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--brand), var(--accent))', borderRadius: '4px' }}
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
