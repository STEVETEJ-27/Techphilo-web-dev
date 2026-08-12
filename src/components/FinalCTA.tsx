"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import './FinalCTA.css'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="cta" className="final-cta" aria-labelledby="cta-heading">
      <div className="final-cta__bg">
        <div className="final-cta__bg-grid" />
        <div className="orb orb-blue" style={{ width: '60vw', height: '60vw', top: '-30%', left: '-15%', opacity: 0.18 }} />
        <div className="orb orb-gold" style={{ width: '40vw', height: '40vw', bottom: '-20%', right: '-10%', opacity: 0.08 }} />
        <div className="final-cta__horizon" />
      </div>

      <div className="container final-cta__content" ref={ref}>
        <motion.div
          className="final-cta__inner"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="label-tag"
            style={{ marginBottom: '2rem', display: 'inline-flex', alignSelf: 'center' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <span className="dot-pulse" /> Build Future-Ready Schools
          </motion.div>

          <motion.h2
            id="cta-heading"
            className="display-xl final-cta__headline text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            LEARN TODAY,<br />
            <span className="gradient-text">LEAD TOMORROW.</span>
          </motion.h2>

          <motion.div
            className="final-cta__taglines"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
          >
            {['Built for Schools.', 'Designed for the Future.', 'Inspired by Students.', 'Created for Tomorrow.'].map(t => (
              <span key={t} className="final-cta__tagline text-sm">{t}</span>
            ))}
          </motion.div>

          <motion.div
            className="final-cta__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <button className="btn btn-primary final-cta__btn-primary" onClick={() => window.location.href = 'mailto:info@techphilo.in'}>
              Partner With TechPhilo <ChevronRight size={20} />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('student-experience')}>
              Explore Student Learning <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Journey connector */}
          <motion.div
            className="final-cta__journey-bar"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            {['Discover', 'Learn', 'Practice', 'Develop', 'Advance', 'Excel'].map((stage, i) => (
              <div key={stage} className="final-cta__stage">
                <motion.div
                  className="final-cta__stage-dot"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.08, type: 'spring', stiffness: 200 }}
                />
                <span className="final-cta__stage-label text-xs">{stage}</span>
                {i < 5 && <div className="final-cta__stage-line" />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
