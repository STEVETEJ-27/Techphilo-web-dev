import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './StudentJourney.css'

const steps = [
  {
    num: '01',
    stage: 'DISCOVER',
    title: 'Explore new technologies and areas of interest.',
    desc: 'Begin where every great builder begins — with curiosity. Explore what technology can do and find the direction that excites you.',
    icon: '🔭',
    color: '#4F6FBF',
  },
  {
    num: '02',
    stage: 'LEARN',
    title: 'Build strong fundamentals and understand core concepts.',
    desc: 'Structured, practical learning paths designed to give you deep understanding — not just surface-level familiarity.',
    icon: '📖',
    color: '#5a7ac9',
  },
  {
    num: '03',
    stage: 'PRACTICE',
    title: 'Apply knowledge through guided activities and exercises.',
    desc: 'Assignments, challenges, and guided exercises that convert what you know into what you can actually do.',
    icon: '⚡',
    color: '#6585d4',
  },
  {
    num: '04',
    stage: 'DEVELOP',
    title: 'Strengthen technical thinking and problem-solving skills.',
    desc: 'Apply everything to build a strong foundation of practical skills that solve real problems.',
    icon: '🛠️',
    color: '#F5CB70',
  },
  {
    num: '05',
    stage: 'ADVANCE',
    title: 'Progress toward more advanced concepts and capabilities.',
    desc: 'Move beyond the basics, taking on complex challenges that prepare you for higher education and real careers.',
    icon: '📈',
    color: '#e8b84e',
  },
  {
    num: '06',
    stage: 'EXCEL',
    title: 'Build confidence and achieve a higher level of proficiency.',
    desc: 'Master the skills you need to become truly future-ready and prepared for what comes next.',
    icon: '🎯',
    color: '#d4a535',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="journey__step"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <div className="journey__step-connector">
        <motion.div
          className="journey__step-dot"
          style={{ borderColor: step.color, boxShadow: `0 0 0 0 ${step.color}` }}
          animate={inView ? { boxShadow: [`0 0 0 0 ${step.color}40`, `0 0 0 10px transparent`] } : {}}
          transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.2 }}
        >
          <span>{step.icon}</span>
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div
            className="journey__step-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </div>

      <div className="journey__step-card glass">
        <div className="journey__step-header">
          <span className="journey__step-num text-xs" style={{ color: step.color }}>{step.num}</span>
          <span className="label-tag" style={{ color: step.color, borderColor: `${step.color}40`, background: `${step.color}15` }}>
            {step.stage}
          </span>
        </div>
        <h3 className="display-sm journey__step-title">{step.title}</h3>
        <p className="text-md text-muted">{step.desc}</p>
        <motion.div
          className="journey__step-bar"
          style={{ background: step.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: '48px' } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>
    </motion.div>
  )
}

export default function StudentJourney() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="student-experience" className="section journey">
      <div className="orb orb-blue" style={{ width: '50vw', height: '50vw', top: '-10%', left: '-15%', opacity: 0.12 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>For Students</div>
          <h2 className="display-lg">
            Build Skills. Develop Confidence.<br />
            <span className="gradient-text">Master Your Future.</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 560, margin: '1.25rem auto 0' }}>
            Six stages. One continuous journey — from discovering technology to achieving a high level of proficiency.
          </p>
        </motion.div>

        <div className="journey__steps">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
