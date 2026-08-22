import { useRef } from 'react'
import { Briefcase, Globe2, GraduationCap, Handshake, Presentation, School, Star, Users } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import './PartnershipSection.css'

const principles = [
  {
    Icon: School,
    title: 'Custom-Built for Schools',
    desc: 'Every programme is designed to align with your school\'s vision, values, schedule and student needs. Not a one-size-fits-all product.',
    color: 'var(--brand)',
  },
  {
    Icon: GraduationCap,
    title: 'Built for Educators',
    desc: 'Created with strong pedagogy, classroom practicality and teacher wellbeing at its core. We don\'t add to the burden — we reduce it.',
    color: 'var(--hue-teal)',
  },
  {
    Icon: Star,
    title: 'Quality. Consistency. Excellence.',
    desc: 'Every session, resource, lesson plan and student experience is thoughtfully crafted and refined to the highest standard.',
    color: 'var(--accent)',
  },
  {
    Icon: Handshake,
    title: 'Long-Term Collaboration',
    desc: 'We don\'t deliver a package and disappear. We stay alongside your school throughout implementation, iteration and growth.',
    color: 'var(--hue-violet)',
  },
]

const ecosystem = [
  { Icon: School, label: 'School' },
  { Icon: Presentation, label: 'Teachers' },
  { Icon: GraduationCap, label: 'Students' },
  { Icon: Users, label: 'Parents' },
  { Icon: Globe2, label: 'Community' },
  { Icon: Briefcase, label: 'Future Careers' },
]

export default function PartnershipSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const principlesRef = useRef<HTMLDivElement>(null)
  const principlesInView = useInView(principlesRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section partnership">
      <div className="orb orb-blue" style={{ width: '50vw', height: '50vw', top: '-10%', left: '-15%', opacity: 0.1 }} />
      <div className="orb orb-gold" style={{ width: '35vw', height: '35vw', bottom: '-5%', right: '-10%', opacity: 0.06 }} />

      <div className="container">
        {/* Header */}
        <motion.div
          ref={headRef}
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag" style={{ marginBottom: '1.25rem' }}>Our Approach</div>
          <h2 className="display-lg">
            A Partnership That<br />
            <span className="gradient-text">Creates Impact</span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: 600, margin: '1.25rem auto 0' }}>
            We collaborate with schools to bring an innovative, structured and measurable programme that transforms learning experiences and outcomes.
          </p>
        </motion.div>

        {/* Ecosystem connector */}
        <motion.div
          className="partnership__ecosystem glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="partnership__eco-label text-xs text-muted" style={{ textAlign: 'center', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            TechPhilo Connects
          </div>
          <div className="partnership__eco-nodes">
            {ecosystem.map((node, i) => (
              <motion.div
                key={node.label}
                className="eco-node"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 180 }}
              >
                <div className="eco-node__icon"><node.Icon size={20} strokeWidth={1.7} /></div>
                <div className="eco-node__label text-xs">{node.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="partnership__eco-message text-md text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            One integrated ecosystem where every stakeholder plays a role.
          </motion.div>
        </motion.div>

        {/* Principles grid */}
        <div ref={principlesRef} className="partnership__principles">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="principle-card glass"
              style={{ '--p-color': p.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.1, duration: 0.6 }}
            >
              <div className="principle-card__icon-wrap" style={{ background: `color-mix(in srgb, ${p.color} 9%, transparent)`, border: `1px solid color-mix(in srgb, ${p.color} 19%, transparent)` }}>
                <span className="principle-card__icon"><p.Icon size={20} strokeWidth={1.7} /></span>
              </div>
              <h3 className="principle-card__title" style={{ color: p.color }}>{p.title}</h3>
              <p className="text-md text-muted" style={{ lineHeight: 1.65 }}>{p.desc}</p>
              <div className="principle-card__accent" style={{ background: p.color }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom declaration */}
        <motion.div
          className="partnership__declaration glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="display-sm" style={{ textAlign: 'center', lineHeight: 1.5 }}>
            "Schools that embrace change today,
            <br />
            <span className="gradient-text">will lead the future tomorrow."</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
