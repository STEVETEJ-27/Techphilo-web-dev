import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './ImplementationJourney.css'

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    heading: 'Understand Your School',
    desc: 'We begin by deeply understanding your school\'s vision, values, student demographics and existing strengths to design a programme that truly fits.',
    icon: '🔭',
    details: ['School goals assessment', 'Student readiness evaluation', 'Teacher capacity review', 'Schedule & resource planning'],
    color: '#4F6FBF',
  },
  {
    num: '02',
    title: 'PLAN',
    heading: 'Customise the Programme',
    desc: 'Together we design the programme structure, learning calendar and integration plan — ensuring the right content reaches the right students at the right time.',
    icon: '🗺️',
    details: ['Custom curriculum mapping', 'Age-appropriate content design', 'Integration with school schedule', 'Parent communication plan'],
    color: '#6585d4',
  },
  {
    num: '03',
    title: 'TRAIN',
    heading: 'Equip Your Teachers',
    desc: 'Before day one, every teacher involved receives comprehensive training, detailed lesson plans, teaching resources and all materials they need to teach with confidence.',
    icon: '🧑‍🏫',
    details: ['Hands-on teacher training', 'Detailed lesson plan handover', 'Teaching resource kit', 'Practice sessions & Q&A'],
    color: '#43B89C',
  },
  {
    num: '04',
    title: 'IMPLEMENT',
    heading: 'Launch with Confidence',
    desc: 'The programme rolls out smoothly with ongoing expert support, regular progress check-ins and immediate guidance whenever it is needed.',
    icon: '⚡',
    details: ['Supported programme rollout', 'Weekly progress check-ins', 'On-demand expert support', 'Student progress tracking'],
    color: '#F5CB70',
  },
  {
    num: '05',
    title: 'SHOWCASE',
    heading: 'Celebrate With Grand Expo',
    desc: 'The year culminates in a Grand Expo — a school-wide celebration where students present their projects, parents engage and the community witnesses the transformation.',
    icon: '🎪',
    details: ['Full Grand Expo planning support', 'Student project presentations', 'Parent and community engagement', 'Achievement recognition & awards'],
    color: '#FF9F43',
  },
]

export default function ImplementationJourney() {
  const [activeStep, setActiveStep] = useState(0)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  const active = steps[activeStep]

  return (
    <section id="implementation" className="section implementation">
      <div className="orb orb-gold" style={{ width: '35vw', height: '35vw', top: '10%', right: '-8%', opacity: 0.06 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Implementation Journey</div>
          <h2 className="display-lg gradient-text-blue">
            Our Five-Step<br />Implementation Journey
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            A structured, supported pathway from partnership to programme — designed so every school succeeds from day one.
          </p>
        </motion.div>

        <div className="impl__layout">
          {/* Step selector */}
          <div className="impl__steps">
            {steps.map((step, i) => (
              <motion.button
                key={step.num}
                className={`impl__step-btn ${activeStep === i ? 'impl__step-btn--active' : ''}`}
                style={{ '--step-color': step.color } as React.CSSProperties}
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
              >
                <div className="impl__step-dot" style={{ borderColor: step.color, background: activeStep === i ? step.color : 'transparent' }}>
                  <span>{step.icon}</span>
                </div>
                <div className="impl__step-info">
                  <span className="impl__step-num text-xs" style={{ color: step.color }}>{step.num}</span>
                  <span className="impl__step-title">{step.title}</span>
                </div>
                {i < steps.length - 1 && <div className="impl__step-connector" />}
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div
            key={activeStep}
            className="impl__detail glass"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="impl__detail-header">
              <span className="impl__detail-icon">{active.icon}</span>
              <div>
                <span className="label-tag" style={{ color: active.color, borderColor: `${active.color}40`, background: `${active.color}15` }}>
                  Step {active.num} — {active.title}
                </span>
                <h3 className="display-sm impl__detail-heading">{active.heading}</h3>
              </div>
            </div>
            <p className="text-md text-muted impl__detail-desc">{active.desc}</p>
            <div className="impl__detail-list">
              {active.details.map(d => (
                <div key={d} className="impl__detail-item">
                  <span style={{ color: active.color }}>✓</span>
                  <span className="text-sm">{d}</span>
                </div>
              ))}
            </div>
            {/* Progress dots */}
            <div className="impl__progress-dots">
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`impl__dot ${activeStep === i ? 'impl__dot--active' : ''}`}
                  style={{ background: activeStep === i ? active.color : undefined }}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
