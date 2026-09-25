"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Building2, Sparkles } from 'lucide-react'
import './ResponsibilityMatrix.css'

const techPhiloProvides = [
  'NEP 2020 aligned experiential curriculum & lesson plans',
  'Comprehensive teacher training & ongoing facilitation support',
  'Student Explorer Passports, badges & physical/digital certificates',
  'Continuous student skill tracking & parent progress reports',
  'Grand Expo planning playbook, marketing assets & execution support',
  'Software platforms, digital assets & project templates',
]

const schoolProvides = [
  'Scheduled weekly classroom time (1–2 periods per week)',
  'Existing computer lab / activity classroom access',
  'Nominated teacher or coordinator for facilitation & training',
  'Parent communication support for progress updates & Grand Expo',
]

export default function ResponsibilityMatrix() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section resp-matrix">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Clear Responsibilities</div>
          <h2 className="display-lg">
            Division of <span className="gradient-text">Responsibilities</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 580, margin: '1.25rem auto 0' }}>
            We design TechPhilo to be low-friction for school leadership. Here is a clear breakdown of what we handle versus what your school provides.
          </p>
        </motion.div>

        <div className="resp-matrix__grid">
          {/* TechPhilo Column */}
          <motion.div
            className="resp-card principle-card glass"
            style={{ '--p-color': 'var(--brand)' } as React.CSSProperties}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="resp-card__header">
              <div
                className="principle-card__icon-wrap"
                style={{
                  background: 'color-mix(in srgb, var(--brand) 10%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--brand) 22%, transparent)',
                  color: 'var(--brand)',
                }}
              >
                <Sparkles size={22} strokeWidth={1.7} />
              </div>
              <div>
                <span
                  className="resp-card__badge"
                  style={{
                    color: 'var(--brand)',
                    background: 'color-mix(in srgb, var(--brand) 10%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--brand) 20%, transparent)',
                  }}
                >
                  Full Service Delivery
                </span>
                <h3 className="principle-card__title" style={{ fontSize: '1.2rem', marginBottom: 0, color: 'var(--ink)' }}>
                  What TechPhilo Provides
                </h3>
              </div>
            </div>
            <ul className="resp-card__list">
              {techPhiloProvides.map((item) => (
                <li key={item} className="resp-card__item">
                  <span className="resp-card__check" style={{ color: 'var(--brand)' }}>
                    <CheckCircle2 size={17} strokeWidth={1.8} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="principle-card__accent" style={{ background: 'var(--brand)' }} />
          </motion.div>

          {/* School Column */}
          <motion.div
            className="resp-card principle-card glass"
            style={{ '--p-color': 'var(--accent)' } as React.CSSProperties}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="resp-card__header">
              <div
                className="principle-card__icon-wrap"
                style={{
                  background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--accent) 24%, transparent)',
                  color: 'var(--accent-strong)',
                }}
              >
                <Building2 size={22} strokeWidth={1.7} />
              </div>
              <div>
                <span
                  className="resp-card__badge"
                  style={{
                    color: 'var(--accent-strong)',
                    background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent) 24%, transparent)',
                  }}
                >
                  Minimal Infrastructure
                </span>
                <h3 className="principle-card__title" style={{ fontSize: '1.2rem', marginBottom: 0, color: 'var(--ink)' }}>
                  What Your School Provides
                </h3>
              </div>
            </div>
            <ul className="resp-card__list">
              {schoolProvides.map((item) => (
                <li key={item} className="resp-card__item">
                  <span className="resp-card__check" style={{ color: 'var(--accent-strong)' }}>
                    <CheckCircle2 size={17} strokeWidth={1.8} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="principle-card__accent" style={{ background: 'var(--accent)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
