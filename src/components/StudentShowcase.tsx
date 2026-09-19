import { useRef } from 'react'
import { Code2, Landmark, Lightbulb, MessageSquare, PenTool, Crown } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import './StudentShowcase.css'

const showcaseProjects = [
  {
    title: 'Smart Community Care App',
    domain: 'Coding & Technology',
    tech: ['Coding', 'AI Basics', 'Web Design'],
    outcome: 'Interactive application connecting volunteers with local community care initiatives',
    gradient: 'linear-gradient(135deg, var(--brand-strong), var(--brand))',
    accent: 'var(--brand)',
    Icon: Code2,
  },
  {
    title: 'Student Budget Planner',
    domain: 'Financial Literacy',
    tech: ['Budgeting', 'Savings', 'Financial Planning'],
    outcome: 'Practical budgeting tool helping students manage allowances and plan long-term savings',
    gradient: 'linear-gradient(135deg, var(--accent), var(--hue-teal))',
    accent: 'var(--accent)',
    Icon: Landmark,
  },
  {
    title: 'Eco-Venture Business Model',
    domain: 'Entrepreneurship & Innovation',
    tech: ['Market Research', 'Business Canvas', 'Pitching'],
    outcome: 'A pitch-ready sustainable business concept presented to local school and community leaders',
    gradient: 'linear-gradient(135deg, var(--hue-amber), var(--hue-amber))',
    accent: 'var(--hue-amber)',
    Icon: Lightbulb,
  },
  {
    title: 'Youth Environmental Campaign',
    domain: 'Communication',
    tech: ['Public Speaking', 'Persuasive Writing', 'Presentation'],
    outcome: 'Multi-media presentation and public speaking campaign inspiring over 500 peer actions',
    gradient: 'linear-gradient(135deg, var(--hue-teal), var(--hue-teal))',
    accent: 'var(--hue-teal)',
    Icon: MessageSquare,
  },
  {
    title: 'Campus Accessibility Redesign',
    domain: 'Design Thinking',
    tech: ['Empathy Mapping', 'User Research', 'Prototyping'],
    outcome: 'Redesigned school layout and interactive navigation prototype tested with diverse users',
    gradient: 'linear-gradient(135deg, var(--hue-rose), var(--hue-rose))',
    accent: 'var(--hue-rose)',
    Icon: PenTool,
  },
  {
    title: 'Peer Mentorship Network',
    domain: 'Leadership',
    tech: ['Team Leadership', 'Peer Coaching', 'Conflict Resolution'],
    outcome: 'Student-led peer mentoring initiative pairing senior mentors with incoming freshmen',
    gradient: 'linear-gradient(135deg, var(--hue-violet), var(--hue-violet))',
    accent: 'var(--hue-violet)',
    Icon: Crown,
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
            Course Projects.<br />
            <span className="gradient-text">Real Outcomes.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            A glimpse at the hands-on projects created by students across TechPhilo’s 6 core course pathways.
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
                <span className="showcase-card__icon"><proj.Icon size={20} strokeWidth={1.7} /></span>
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
                    <span key={t} className="tech-tag" style={{ color: proj.accent, borderColor: `color-mix(in srgb, ${proj.accent} 19%, transparent)`, background: `color-mix(in srgb, ${proj.accent} 7%, transparent)` }}>
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
