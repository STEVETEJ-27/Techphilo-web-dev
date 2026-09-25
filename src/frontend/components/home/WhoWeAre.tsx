"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Building2, GraduationCap } from 'lucide-react'
import { Link } from '@/router'
import './AudienceSelector.css'

const audiences = [
  {
    id: 'school',
    Icon: Building2,
    title: 'For Schools',
    headline: 'Bring practical, future-focused learning into your classrooms.',
    desc: 'TechPhilo is a complete, ready-to-implement programme — structured for teachers, measurable for leadership, meaningful for students.',
    cta: 'Explore for Schools',
    target: '/schools',
    tags: ['NEP 2020 Aligned', 'Teacher-Ready', 'Measurable Outcomes'],
    color: 'var(--accent)',
  },
  {
    id: 'student',
    Icon: GraduationCap,
    title: 'For Students & Parents',
    headline: 'Learn by building, creating, solving and exploring.',
    desc: 'Hands-on programs in Coding, Design Thinking, Entrepreneurship and more — each one built around real projects, not passive learning.',
    cta: 'Explore Learning',
    target: '/students',
    tags: ['Hands-On Projects', 'Portfolio Skills', 'Real-World Ready'],
    color: 'var(--accent)',
  },
]

export default function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="who-we-are" className="audience-selector section">
      <div className="orb orb-blue" style={{ width: '40vw', height: '40vw', top: '-10%', right: '-10%', opacity: 0.08 }} aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag">Two Journeys</div>
          <h2 className="display-lg audience-selector__headline">
            One programme.<br />Your path<span className="text-gold">.</span>
          </h2>
          <p className="text-md text-muted" style={{ maxWidth: 460, margin: '1rem auto 0' }}>
            Whether you lead a school or a student leads themselves — TechPhilo has a clear path for you.
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
                <span
                  className="audience-card__icon-wrap"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `color-mix(in srgb, ${aud.color} 11%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${aud.color} 22%, transparent)`,
                    color: aud.color,
                  }}
                >
                  <aud.Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div
                  className="audience-card__badge"
                  style={{
                    background: `color-mix(in srgb, ${aud.color} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${aud.color} 22%, transparent)`,
                    color: aud.color,
                  }}
                >
                  {aud.title}
                </div>
              </div>

              <h3 className="audience-card__headline display-sm">{aud.headline}</h3>
              <p className="audience-card__desc text-md text-muted">{aud.desc}</p>

              <div className="audience-card__tags">
                {aud.tags.map(tag => (
                  <span
                    key={tag}
                    className="audience-card__tag text-xs"
                    style={{
                      color: aud.color,
                      borderColor: `color-mix(in srgb, ${aud.color} 22%, transparent)`,
                      background: `color-mix(in srgb, ${aud.color} 7%, transparent)`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={aud.target}
                className="audience-card__cta btn btn-primary"
                style={{
                  background: aud.color,
                  color: aud.id === 'student' ? 'var(--ink)' : 'var(--surface)',
                  borderColor: 'transparent',
                }}
              >
                {aud.cta} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
