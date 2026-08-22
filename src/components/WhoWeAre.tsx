"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, GraduationCap, School } from 'lucide-react'
import { Link } from '../router'
import './AudienceSelector.css'

const audiences = [
  {
    id: 'school',
    Icon: School,
    title: 'School / School Leader',
    subtitle: 'Build a Future-Ready Learning Ecosystem',
    desc: 'Partner with TechPhilo to integrate experiential, project-based learning that aligns with NEP 2020 and prepares every student for tomorrow.',
    cta: 'Explore School Programme',
    target: '/schools',
    tags: ['NEP 2020 Aligned', 'Teacher Training', 'Explorer Passport'],
    color: 'var(--brand)',
  },
  {
    id: 'student',
    Icon: GraduationCap,
    title: 'Student / Learner',
    subtitle: 'Build Skills. Develop Confidence. Master Your Future.',
    desc: 'Get hands-on with technology, AI, entrepreneurship and design thinking through practical learning that prepares you for tomorrow.',
    cta: 'Explore Student Learning',
    target: '/students',
    tags: ['AI & Technology', 'Practical Learning', 'Future Skills'],
    color: 'var(--accent)',
  },
]

export default function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="who-we-are" className="audience-selector section">
      <div className="orb orb-blue" style={{ width: '40vw', height: '40vw', top: '-10%', right: '-10%', opacity: 0.1 }} />
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag">Who We Are</div>
          <h2 className="display-lg audience-selector__headline">
            Custom-built for schools.<br />Designed for students<span className="text-gold">.</span>
          </h2>
          <p className="text-md text-muted" style={{ maxWidth: 480, margin: '1rem auto 0' }}>
            One integrated program, two journeys. Choose the one that's yours.
          </p>
        </motion.div>

        <div className="audience-selector__cards">
          {audiences.map((aud, i) => (
            <motion.div
              key={aud.id}
              className="audience-card glass"
              style={{ '--aud-color': aud.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="audience-card__top">
                <span className="audience-card__emoji" style={{ display: 'inline-flex', color: aud.color }}>
                  <aud.Icon size={30} strokeWidth={1.6} />
                </span>
                <div className="audience-card__badge" style={{ background: `color-mix(in srgb, ${aud.color} 13%, transparent)`, border: `1px solid color-mix(in srgb, ${aud.color} 25%, transparent)`, color: aud.color }}>
                  Explore
                </div>
              </div>

              <h3 className="audience-card__title display-sm">{aud.title}</h3>
              <p className="audience-card__subtitle" style={{ color: aud.color }}>{aud.subtitle}</p>
              <p className="audience-card__desc text-md text-muted">{aud.desc}</p>

              <div className="audience-card__tags">
                {aud.tags.map(tag => (
                  <span key={tag} className="audience-card__tag text-xs" style={{ color: aud.color, borderColor: `color-mix(in srgb, ${aud.color} 19%, transparent)`, background: `color-mix(in srgb, ${aud.color} 7%, transparent)` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={aud.target}
                className="audience-card__cta btn btn-primary"
                style={{ background: aud.color, color: aud.id === 'student' ? 'var(--ink)' : 'var(--surface)' }}
              >
                {aud.cta} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
