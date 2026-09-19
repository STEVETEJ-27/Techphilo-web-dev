import { useState, useRef } from 'react'
import { Code2, Landmark, Lightbulb, MessageSquare, PenTool, Crown, Search } from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './TechnologyEcosystem.css'

const courseSkills = [
  {
    id: 'coding-technology',
    label: 'Coding & Technology',
    Icon: Code2,
    color: 'var(--brand)',
    category: 'Technology',
    desc: 'A foundation in coding, AI and modern technology — built around real, hands-on projects rather than theory alone.',
    related: ['AI Fundamentals', 'Web Development', 'Problem Solving'],
    projects: ['Smart Community Care App', 'Interactive Web Portals', 'Automated School Tools'],
  },
  {
    id: 'financial-literacy',
    label: 'Financial Literacy',
    Icon: Landmark,
    color: 'var(--accent)',
    category: 'Life Skills',
    desc: 'Practical, real-scenario money skills — budgeting, saving and decision-making that students actually use.',
    related: ['Budgeting', 'Savings Strategy', 'Financial Decision-Making'],
    projects: ['Student Savings Planner', 'Personal Budget Tracker', 'Resource Allocation Models'],
  },
  {
    id: 'entrepreneurship-innovation',
    label: 'Entrepreneurship & Innovation',
    Icon: Lightbulb,
    color: 'var(--hue-amber)',
    category: 'Innovation',
    desc: 'Turn an idea into a pitch-ready venture concept, learning validation, positioning and storytelling along the way.',
    related: ['Problem Validation', 'Business Model Canvas', 'Pitch Storytelling'],
    projects: ['Eco-Venture School Business', 'Social Enterprise Pitch', 'Product Concept Canvas'],
  },
  {
    id: 'communication',
    label: 'Communication',
    Icon: MessageSquare,
    color: 'var(--hue-teal)',
    category: 'Life Skills',
    desc: 'Clear, confident expression — written, verbal and presentation skills built through real practice.',
    related: ['Public Speaking', 'Persuasive Writing', 'Digital Media'],
    projects: ['Youth Environmental Campaign', 'Persuasive Presentation Deck', 'Community Storyboard'],
  },
  {
    id: 'design-thinking',
    label: 'Design Thinking',
    Icon: PenTool,
    color: 'var(--hue-rose)',
    category: 'Innovation',
    desc: 'Human-centred problem solving — empathise, define, ideate, prototype and test, applied to real challenges.',
    related: ['User Research', 'Empathy Mapping', 'Interactive Prototyping'],
    projects: ['Campus Accessibility Redesign', 'Student Experience Prototype', 'Usability Improvement Plan'],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    Icon: Crown,
    color: 'var(--hue-violet)',
    category: 'Life Skills',
    desc: 'Collaboration and ownership built through team projects, not lectures — learning to lead by doing.',
    related: ['Team Management', 'Conflict Resolution', 'Peer Coaching'],
    projects: ['Peer Mentorship Network', 'Student Council Project', 'Community Drive Initiative'],
  },
]

export default function TechnologyEcosystem() {
  const [active, setActive] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const activeCourse = courseSkills.find(c => c.id === (active || hovered))

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
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Course Skill Ecosystem</div>
          <h2 className="display-lg gradient-text-blue">
            6 Core Course Pathways.<br />Every Essential Future Skill.
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            Explore TechPhilo's core learning pathways. Hover or tap to discover key outcomes and real student projects.
          </p>
        </motion.div>

        <div className="tech-ecosystem__layout" ref={containerRef}>
          {/* Course Grid */}
          <div className="tech-ecosystem__grid">
            {courseSkills.map((course, i) => (
              <motion.button
                key={course.id}
                className={`tech-node glass ${active === course.id || hovered === course.id ? 'tech-node--active' : ''}`}
                style={{ '--node-color': course.color } as React.CSSProperties}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(active === course.id ? null : course.id)}
                onMouseEnter={() => setHovered(course.id)}
                onMouseLeave={() => setHovered(null)}
                aria-pressed={active === course.id}
                aria-label={`${course.label} — ${course.category}`}
              >
                <span className="tech-node__icon"><course.Icon size={20} strokeWidth={1.7} /></span>
                <span className="tech-node__label">{course.label}</span>
                <span className="tech-node__category text-xs">{course.category}</span>
              </motion.button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="tech-ecosystem__panel">
            <AnimatePresence mode="wait">
              {activeCourse ? (
                <motion.div
                  key={activeCourse.id}
                  className="tech-detail glass"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="tech-detail__header">
                    <span className="tech-detail__icon"><activeCourse.Icon size={20} strokeWidth={1.7} /></span>
                    <div>
                      <h3 className="display-sm" style={{ color: activeCourse.color }}>{activeCourse.label}</h3>
                      <span className="label-tag" style={{ marginTop: '0.3rem', display: 'inline-flex', color: activeCourse.color, borderColor: `color-mix(in srgb, ${activeCourse.color} 25%, transparent)`, background: `color-mix(in srgb, ${activeCourse.color} 8%, transparent)` }}>{activeCourse.category}</span>
                    </div>
                  </div>
                  <p className="text-md text-muted" style={{ margin: '1rem 0' }}>{activeCourse.desc}</p>

                  <div className="tech-detail__section">
                    <span className="text-xs" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', display: 'block', marginBottom: '0.6rem' }}>Core Skills Learned</span>
                    <div className="tech-detail__tags">
                      {activeCourse.related.map(r => (
                        <span key={r} className="tech-tag">{r}</span>
                      ))}
                    </div>
                  </div>

                  <div className="tech-detail__section" style={{ marginTop: '1rem' }}>
                    <span className="text-xs" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', display: 'block', marginBottom: '0.6rem' }}>Example Course Projects</span>
                    <div className="tech-detail__projects">
                      {activeCourse.projects.map(p => (
                        <div key={p} className="tech-detail__project">
                          <span style={{ color: activeCourse.color, marginRight: '0.5rem' }}>→</span>
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
                      Hover or click a course pathway<br />to explore skills and projects.
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
