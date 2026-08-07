"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, ClipboardList, GraduationCap, Rocket, Trophy, ArrowRight } from 'lucide-react'
import { Link } from '../router'
import './HowItWorksHome.css'

const steps = [
  { Icon: Search, title: 'Discover', desc: "Understand your school's goals & needs" },
  { Icon: ClipboardList, title: 'Plan', desc: 'Customise the programme structure & schedule' },
  { Icon: GraduationCap, title: 'Train', desc: 'Teacher training & resource handover' },
  { Icon: Rocket, title: 'Implement', desc: 'Smooth rollout with ongoing support' },
  { Icon: Trophy, title: 'Showcase', desc: 'Celebrate learning at the Grand Expo' },
]

export default function HowItWorksHome() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="section how-it-works-home">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag">The Process</div>
          <h2 className="display-lg">How TechPhilo <span className="text-gold">Works</span></h2>
          <p className="text-md text-muted" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
            A five-step partnership that takes a school from first conversation to a school-wide showcase of student work.
          </p>
        </motion.div>

        <div className="how-it-works-home__row">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="how-it-works-home__step"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="how-it-works-home__num">0{i + 1}</div>
              <div className="how-it-works-home__icon"><step.Icon size={22} strokeWidth={1.7} /></div>
              <h3 className="display-sm">{step.title}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
              {i < steps.length - 1 && <div className="how-it-works-home__connector" aria-hidden="true" />}
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/schools/implementation" className="btn btn-ghost">
            See the full implementation journey <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
