"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import './FinalCTA.css'

const STAGES = ['Explore', 'Build', 'Solve', 'Communicate', 'Create', 'Grow']

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" className="final-cta" aria-labelledby="cta-heading">
      <div className="container">
        <motion.div
          ref={ref}
          className="final-cta__panel"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="final-cta__main">
            <div className="final-cta__copy">
              <span className="label-tag final-cta__eyebrow">
                One Ecosystem. Two Journeys.
              </span>

              <h2 id="cta-heading" className="display-md final-cta__headline">
                Learn today,{' '}
                <span className="final-cta__headline-accent">lead tomorrow.</span>
              </h2>

              <p className="text-md text-muted final-cta__sub">
                One integrated programme — built for schools, designed around students.
              </p>
            </div>

            <div className="final-cta__actions">
              <Link
                href="/contact"
                className="btn btn-primary final-cta__btn-primary"
              >
                Partner With TechPhilo <ChevronRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/courses"
                className="btn btn-ghost"
              >
                Explore Programs <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ol className="final-cta__track" aria-label="The student journey">
            {STAGES.map((stage) => (
              <li key={stage} className="final-cta__stage">
                <span className="final-cta__stage-dot" aria-hidden="true" />
                <span className="final-cta__stage-label">{stage}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
