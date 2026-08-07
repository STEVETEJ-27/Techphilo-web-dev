import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import './AudienceSelector.css'

const audiences = [
  {
    id: 'school',
    emoji: '🏫',
    title: 'School / School Leader',
    subtitle: 'Build a Future-Ready Learning Ecosystem',
    desc: 'Discover how TechPhilo partners with schools to integrate experiential, project-based learning that aligns with NEP 2020 and prepares every student for the demands of tomorrow.',
    cta: 'Explore School Programme',
    target: 'why-schools',
    tags: ['NEP 2020 Aligned', 'Teacher Training', 'Explorer Passport', 'Grand Expo', 'Assessment Included'],
    color: '#4F6FBF',
  },
  {
    id: 'student',
    emoji: '🎓',
    title: 'Student / Learner',
    subtitle: 'Build Skills. Develop Confidence. Master Your Future.',
    desc: 'Discover how TechPhilo empowers you with technology, AI, entrepreneurship and design thinking through practical learning that shapes your future.',
    cta: 'Explore Student Learning',
    target: 'student-experience',
    tags: ['AI & Technology', 'Practical Learning', 'Future Skills', 'Collaboration'],
    color: '#F5CB70',
  },
]

export default function AudienceSelector() {
  const [active, setActive] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="audience-selector" className="audience-selector section">
      <div className="orb orb-blue" style={{ width: '40vw', height: '40vw', top: '-10%', right: '-10%', opacity: 0.1 }} />
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag" style={{ marginBottom: '1rem' }}>Who Are You?</div>
          <h2 className="display-lg audience-selector__headline">
            I Am A<span className="text-gold">…</span>
          </h2>
          <p className="text-md text-muted" style={{ maxWidth: 460, margin: '1rem auto 0' }}>
            Choose your journey to explore what TechPhilo offers you.
          </p>
        </motion.div>

        <div className="audience-selector__cards">
          {audiences.map((aud, i) => (
            <motion.div
              key={aud.id}
              className={`audience-card glass ${active === aud.id ? 'audience-card--active' : ''}`}
              style={{ '--aud-color': aud.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(active === aud.id ? null : aud.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(active === aud.id ? null : aud.id)}
              aria-pressed={active === aud.id}
            >
              <div className="audience-card__top">
                <span className="audience-card__emoji">{aud.emoji}</span>
                <div className="audience-card__badge" style={{ background: `${aud.color}20`, border: `1px solid ${aud.color}40`, color: aud.color }}>
                  Select
                </div>
              </div>

              <h3 className="audience-card__title display-sm">{aud.title}</h3>
              <p className="audience-card__subtitle" style={{ color: aud.color }}>{aud.subtitle}</p>
              <p className="audience-card__desc text-md text-muted">{aud.desc}</p>

              <div className="audience-card__tags">
                {aud.tags.map(tag => (
                  <span key={tag} className="audience-card__tag text-xs" style={{ color: aud.color, borderColor: `${aud.color}30`, background: `${aud.color}12` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="audience-card__cta btn btn-primary"
                style={{ background: aud.color, color: aud.id === 'student' ? '#112250' : '#fff' }}
                onClick={(e) => { e.stopPropagation(); scrollTo(aud.target); }}
              >
                {aud.cta} <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="audience-selector__note text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          Or scroll to explore the full TechPhilo ecosystem
        </motion.p>
      </div>
    </section>
  )
}
