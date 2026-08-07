import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './WhyEvolve.css'

const challenges = [
  {
    icon: '🤖',
    title: 'AI Is Transforming Every Industry',
    desc: 'Automation is reshaping the economy. Students who understand AI and technology will have a decisive advantage. Those who don\'t, may be left behind.',
    accent: '#4F6FBF',
  },
  {
    icon: '🏆',
    title: 'Employers Value Skills Over Memorisation',
    desc: 'Hiring managers increasingly seek problem-solvers, communicators and creative thinkers — not just candidates who scored well in exams.',
    accent: '#F5CB70',
  },
  {
    icon: '🔀',
    title: 'Future Careers Cross Multiple Disciplines',
    desc: 'The most exciting careers of tomorrow don\'t fit inside one subject. They combine technology, creativity, communication and entrepreneurial thinking.',
    accent: '#43B89C',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parents Expect Schools to Prepare Children for Life',
    desc: 'Today\'s parents understand that classroom knowledge alone is not enough. They want schools that develop the whole child — curious, capable and confident.',
    accent: '#FF9F43',
  },
  {
    icon: '🌍',
    title: 'The World is More Connected Than Ever',
    desc: 'Collaboration, cultural awareness and global communication are no longer optional skills. They are essential for students entering a borderless economy.',
    accent: '#7C83FD',
  },
  {
    icon: '🌱',
    title: 'Students Need Adaptability and Resilience',
    desc: 'Change is the only constant. The most successful students will be those equipped to learn, unlearn and relearn throughout their entire lives.',
    accent: '#FF7AA2',
  },
]

export default function WhyEvolve() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="why-evolve" className="section why-evolve">
      <div className="orb orb-blue" style={{ width: '50vw', height: '50vw', top: '-15%', left: '-15%', opacity: 0.1 }} />

      <div className="container">
        <motion.div
          ref={headRef}
          className="why-evolve__header"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>The World Has Changed</div>
          <h2 className="display-lg">
            The World Has Changed.<br />
            <span className="gradient-text">Education Must Evolve.</span>
          </h2>
          <p className="text-lg text-muted why-evolve__intro">
            Schools that embrace change today will lead the future tomorrow.
            The question isn't whether education needs to evolve — it's who will lead that transformation.
          </p>
        </motion.div>

        {/* Editorial challenge layout */}
        <div className="why-evolve__challenges">
          {challenges.map((ch, i) => (
            <motion.div
              key={ch.title}
              className="challenge-card glass"
              style={{ '--ch-color': ch.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.1 + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="challenge-card__icon-wrap" style={{ background: `${ch.accent}18`, border: `1px solid ${ch.accent}30` }}>
                <span className="challenge-card__icon">{ch.icon}</span>
              </div>
              <div className="challenge-card__body">
                <h3 className="challenge-card__title" style={{ color: ch.accent }}>{ch.title}</h3>
                <p className="text-md text-muted">{ch.desc}</p>
              </div>
              <div className="challenge-card__line" style={{ background: ch.accent }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom pull quote */}
        <motion.div
          className="why-evolve__quote glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="why-evolve__quote-mark">"</span>
          <p className="why-evolve__quote-text display-sm">
            Schools have the power to make that future brighter.
          </p>
          <span className="label-tag" style={{ marginTop: '1rem' }}>TechPhilo Mission</span>
        </motion.div>
      </div>
    </section>
  )
}
