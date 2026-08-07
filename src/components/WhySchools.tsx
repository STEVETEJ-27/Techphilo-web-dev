"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './WhySchools.css'

const pillars = [
  {
    num: '01',
    icon: '📋',
    title: 'NEP 2020 Aligned',
    desc: 'Experiential, activity-based, competency-focused and multidisciplinary — fully aligned with India\'s National Education Policy 2020.',
    color: '#4F6FBF',
  },
  {
    num: '02',
    icon: '📚',
    title: 'Ready-to-Implement Curriculum',
    desc: 'Structured, age-appropriate and easy to integrate into your school\'s existing schedule without disruption.',
    color: '#6b88d4',
  },
  {
    num: '03',
    icon: '🛠️',
    title: 'Practical Learning',
    desc: 'Hands-on activities and practical applications that build deep understanding, creativity and confidence beyond traditional coursework.',
    color: '#43B89C',
  },
  {
    num: '04',
    icon: '🗺️',
    title: 'Explorer Passport',
    desc: 'A visible student growth journey where missions, skills and achievements can be tracked, celebrated and showcased.',
    color: '#F5CB70',
  },
  {
    num: '05',
    icon: '🎪',
    title: 'Grand Expo',
    desc: 'A school-wide showcase where students present their work, parents engage deeply and communities celebrate learning.',
    color: '#FF9F43',
  },
  {
    num: '06',
    icon: '🧑‍🏫',
    title: 'Teacher Support',
    desc: 'Comprehensive teacher training, detailed lesson plans, teaching resources and continuous implementation support.',
    color: '#7C83FD',
  },
  {
    num: '07',
    icon: '🏅',
    title: 'Assessment Included',
    desc: 'Rubrics, badges, certificates and structured skill reports that track growth and keep students motivated.',
    color: '#FF7AA2',
  },
  {
    num: '08',
    icon: '📊',
    title: 'Data-Backed Progress',
    desc: 'Trackable outcomes and skill reports that give schools and parents clear visibility of student growth.',
    color: '#4FC3F7',
  },
]

const schoolOutcomes = [
  { icon: '⭐', text: 'Helps strengthen school reputation and brand' },
  { icon: '👨‍👩‍👧', text: 'Supports higher parent satisfaction and trust' },
  { icon: '💪', text: 'Designed to build student confidence' },
  { icon: '📋', text: 'Supports NEP 2020 implementation' },
  { icon: '🎯', text: 'Differentiates your school in the community' },
  { icon: '💼', text: 'Develops highly practical student skills' },
  { icon: '🤝', text: 'Enhances community engagement and events' },
  { icon: '📈', text: 'Supports better admissions and student retention' },
]

export default function WhySchools() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const outcomesRef = useRef<HTMLDivElement>(null)
  const outcomesInView = useInView(outcomesRef, { once: true, margin: '-80px' })

  return (
    <section id="why-schools" className="section why-schools">
      <div className="orb orb-gold" style={{ width: '40vw', height: '40vw', top: '5%', right: '-10%', opacity: 0.06 }} />
      <div className="orb orb-blue" style={{ width: '35vw', height: '35vw', bottom: '5%', left: '-10%', opacity: 0.1 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>For Schools</div>
          <h2 className="display-lg">
            Why Schools<br />
            <span className="gradient-text">Choose TechPhilo</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            One integrated future-readiness programme — designed to make implementation easy, outcomes visible and impact lasting.
          </p>
        </motion.div>

        {/* Pillars ecosystem */}
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="pillar-card glass"
              style={{ '--pillar-color': p.color } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 4) * 0.08 + 0.1, duration: 0.55 }}
            >
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap" style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                  <span className="pillar-card__icon">{p.icon}</span>
                </div>
                <span className="pillar-card__num text-xs" style={{ color: p.color }}>{p.num}</span>
              </div>
              <h3 className="pillar-card__title" style={{ color: p.color }}>{p.title}</h3>
              <p className="text-sm text-muted" style={{ lineHeight: 1.65 }}>{p.desc}</p>
              <div className="pillar-card__glow" style={{ background: p.color }} />
            </motion.div>
          ))}
        </div>

        {/* School outcomes */}
        <motion.div
          ref={outcomesRef}
          className="school-outcomes"
          initial={{ opacity: 0, y: 30 }}
          animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="school-outcomes__header">
            <div className="label-tag" style={{ marginBottom: '1rem' }}>School Impact</div>
            <h3 className="display-md">
              How TechPhilo<br />
              <span className="gradient-text-blue">Elevates Your School</span>
            </h3>
            <p className="text-md text-muted" style={{ maxWidth: 480, margin: '1rem auto 0' }}>
              Designed to support schools in becoming recognised leaders of future-ready education.
            </p>
          </div>
          <div className="school-outcomes__grid">
            {schoolOutcomes.map((o, i) => (
              <motion.div
                key={o.text}
                className="outcome-item glass"
                initial={{ opacity: 0, x: -15 }}
                animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.5 }}
              >
                <span className="outcome-item__icon">{o.icon}</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{o.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
