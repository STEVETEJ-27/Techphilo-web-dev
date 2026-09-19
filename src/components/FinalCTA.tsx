"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { useRouter } from '../router'
import './FinalCTA.css'

const STAGES = ['Discover', 'Learn', 'Practice', 'Develop', 'Advance', 'Excel']

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { navigate } = useRouter()

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
                <span className="dot-pulse" /> Build Future-Ready Schools
              </span>

              <h2 id="cta-heading" className="display-md final-cta__headline">
                Learn today, <span className="final-cta__headline-accent">lead tomorrow.</span>
              </h2>

              <p className="text-md text-muted final-cta__sub">
                One integrated programme — built for schools, designed around students.
              </p>
            </div>

            <div className="final-cta__actions">
              <button
                className="btn btn-primary final-cta__btn-primary"
                onClick={() => navigate('/contact')}
              >
                Partner With TechPhilo <ChevronRight size={18} />
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('/students')}
              >
                Explore Student Learning <ArrowRight size={16} />
              </button>
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
