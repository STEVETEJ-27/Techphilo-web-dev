"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  CheckCircle2, BookOpen, Wrench, Compass, Award,
  GraduationCap, Medal, BarChart3,
  Star, Users, Zap, ClipboardCheck, Target, Briefcase, Handshake, TrendingUp
} from 'lucide-react'
import './WhySchools.css'

/* ─── Unified brand color palette ───────────────────────────────────────────
   Instead of 8 different hues that clash, we use 3 tiers:
   - Emerald (brand primary) → pillars 01, 02
   - Gold (accent)           → pillars 03, 04
   - Sage (secondary)        → pillars 05, 06
   - Ivory soft              → pillars 07, 08
   This creates rhythm, not noise.
─────────────────────────────────────────────────────────────────────────── */
const pillars = [
  {
    num: '01',
    Icon: CheckCircle2,
    title: 'NEP 2020 Aligned',
    desc: 'Experiential, activity-based, competency-focused and multidisciplinary — fully aligned with India\'s National Education Policy 2020.',
    color: '#4ADE80',   // bright emerald
  },
  {
    num: '02',
    Icon: BookOpen,
    title: 'Ready-to-Implement Curriculum',
    desc: 'Structured, age-appropriate and easy to integrate into your school\'s existing schedule without disruption.',
    color: '#6EE7B7',   // soft teal-mint
  },
  {
    num: '03',
    Icon: Wrench,
    title: 'Practical Learning',
    desc: 'Hands-on activities and practical applications that build deep understanding, creativity and confidence beyond traditional coursework.',
    color: '#CDA96B',   // antique gold
  },
  {
    num: '04',
    Icon: Compass,
    title: 'Explorer Passport',
    desc: 'A visible student growth journey where missions, skills and achievements can be tracked, celebrated and showcased.',
    color: '#E9C97E',   // warm gold
  },
  {
    num: '05',
    Icon: Award,
    title: 'Grand Expo',
    desc: 'A school-wide showcase where students present their work, parents engage deeply and communities celebrate learning.',
    color: '#93C5FD',   // sky blue
  },
  {
    num: '06',
    Icon: GraduationCap,
    title: 'Teacher Support',
    desc: 'Comprehensive teacher training, detailed lesson plans, teaching resources and continuous implementation support.',
    color: '#C4B5FD',   // soft violet
  },
  {
    num: '07',
    Icon: Medal,
    title: 'Assessment Included',
    desc: 'Rubrics, badges, certificates and structured skill reports that track growth and keep students motivated.',
    color: '#FDA4AF',   // soft rose
  },
  {
    num: '08',
    Icon: BarChart3,
    title: 'Data-Backed Progress',
    desc: 'Trackable outcomes and skill reports that give schools and parents clear visibility of student growth.',
    color: '#67E8F9',   // cyan
  },
]

const schoolOutcomes = [
  { Icon: Star,          text: 'Helps strengthen school reputation and brand' },
  { Icon: Users,         text: 'Supports higher parent satisfaction and trust' },
  { Icon: Zap,           text: 'Designed to build student confidence' },
  { Icon: ClipboardCheck,text: 'Supports NEP 2020 implementation' },
  { Icon: Target,        text: 'Differentiates your school in the community' },
  { Icon: Briefcase,     text: 'Develops highly practical student skills' },
  { Icon: Handshake,     text: 'Enhances community engagement and events' },
  { Icon: TrendingUp,    text: 'Supports better admissions and student retention' },
]

export default function WhySchools() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const outcomesRef = useRef<HTMLDivElement>(null)
  const outcomesInView = useInView(outcomesRef, { once: true, margin: '-80px' })

  return (
    <section id="why-schools" className="section why-schools">
      <div className="container">
        {/* ── Section heading ── */}
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
          <p className="text-lg" style={{ maxWidth: 560, margin: '1.25rem auto 0', color: 'rgba(242,235,221,0.60)' }}>
            One integrated future-readiness programme — designed to make implementation
            easy, outcomes visible and impact lasting.
          </p>
        </motion.div>

        {/* ── Pillars grid ── */}
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="pillar-card"
              style={{ '--pillar-color': p.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 4) * 0.07 + 0.1, duration: 0.5 }}
            >
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap">
                  <p.Icon size={19} strokeWidth={1.7} />
                </div>
                <span className="pillar-card__num">{p.num}</span>
              </div>
              <h3 className="pillar-card__title">{p.title}</h3>
              <p className="pillar-card__desc">{p.desc}</p>
              {/* glow element kept for CSS targeting, hidden via CSS */}
              <div className="pillar-card__glow" />
            </motion.div>
          ))}
        </div>

        {/* ── School outcomes ── */}
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
            <p className="text-md" style={{ maxWidth: 480, margin: '1rem auto 0', color: 'rgba(242,235,221,0.55)' }}>
              Designed to support schools in becoming recognised leaders of future-ready education.
            </p>
          </div>

          <div className="school-outcomes__grid">
            {schoolOutcomes.map((o, i) => (
              <motion.div
                key={o.text}
                className="outcome-item"
                initial={{ opacity: 0, y: 12 }}
                animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.45 }}
              >
                <span className="outcome-item__icon">
                  <o.Icon size={15} strokeWidth={2} style={{ color: 'var(--accent-bright)' }} />
                </span>
                <span className="text-sm">{o.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
