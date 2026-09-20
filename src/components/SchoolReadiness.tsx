"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Laptop, Wifi, Clock, ShieldCheck, Check } from 'lucide-react'
import './SchoolReadiness.css'

const requirements = [
  {
    Icon: Laptop,
    title: 'Computer Lab Access',
    desc: 'Standard desktop computers or laptops running Chrome, Edge, or Firefox. No high-end gaming GPUs required.',
  },
  {
    Icon: Wifi,
    title: 'Standard Broadband Internet',
    desc: 'Reliable Wi-Fi or Ethernet connection suitable for streaming lesson content and browser-based coding tools.',
  },
  {
    Icon: Clock,
    title: '1–2 Periods Per Week',
    desc: 'Flexible scheduling integrated into your weekly timetable — compatible with existing IT, CS, or Activity slots.',
  },
  {
    Icon: ShieldCheck,
    title: 'Zero Local Server Setup',
    desc: '100% cloud-hosted learning platform. No complex server installations or IT maintenance burden for school staff.',
  },
]

export default function SchoolReadiness() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section readiness">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Infrastructure & Readiness</div>
          <h2 className="display-lg">
            Low Friction. <span className="gradient-text">Zero IT Overhead.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 580, margin: '1.25rem auto 0' }}>
            We design our program to work with existing school infrastructure so you can launch without expensive hardware upgrades.
          </p>
        </motion.div>

        <div className="readiness__grid">
          {requirements.map((req, i) => (
            <motion.div
              key={req.title}
              className="readiness-card glass"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="readiness-card__icon">
                <req.Icon size={20} />
              </div>
              <h3 className="readiness-card__title">{req.title}</h3>
              <p className="readiness-card__desc text-sm text-muted">{req.desc}</p>
              <div className="readiness-card__check">
                <Check size={14} /> <span>Verified Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
