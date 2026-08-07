import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe2 } from 'lucide-react'
import './GlobalInspiration.css'

const systems = [
  { country: 'Finland', trait: 'Experiential Learning' },
  { country: 'Singapore', trait: 'STEM & Computational Thinking' },
  { country: 'Japan', trait: 'Discipline, Collaboration & Character' },
  { country: 'Estonia', trait: 'Digital Literacy & Technology Integration' },
  { country: 'Canada', trait: 'Inquiry-Based & Inclusive Learning' },
  { country: 'India (NEP 2020)', trait: 'Competency-Based, Holistic Education' },
]

export default function GlobalInspiration() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section global-inspiration">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag"><Globe2 size={13} /> Global Inspiration</div>
          <h2 className="display-lg">Global Inspiration. <span className="text-gold">Indian Classrooms.</span></h2>
          <p className="text-md text-muted" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
            We draw from the world's leading education systems, then design for one program that fits Indian classrooms.
          </p>
        </motion.div>

        <div className="global-inspiration__grid">
          {systems.map((s, i) => (
            <motion.div
              key={s.country}
              className="global-inspiration__card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.1, duration: 0.5 }}
            >
              <span className="global-inspiration__country">{s.country}</span>
              <span className="text-sm text-muted">{s.trait}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
