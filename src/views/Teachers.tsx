import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Presentation, FileText, BadgeCheck, LineChart, Users2, GraduationCap, ArrowRight, LayoutDashboard } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
import { Link } from '../router'
import './Teachers.css'

const pillars = [
  { Icon: Presentation, title: 'Teaching Platform', desc: 'A structured, ready-to-teach platform with everything organised by grade, term and topic — nothing to build from scratch.' },
  { Icon: FileText, title: 'Lesson Plans', desc: 'Detailed, age-appropriate lesson plans and teaching resources handed over before day one of implementation.' },
  { Icon: BadgeCheck, title: 'Assessment', desc: 'Rubrics, badges and certificates built into the program, so tracking growth never feels like extra admin work.' },
  { Icon: GraduationCap, title: 'Faculty Development', desc: 'Comprehensive training for every teacher involved, with continuous support throughout the school year.' },
  { Icon: LineChart, title: 'Analytics', desc: 'Clear, trackable outcomes and skill reports that show student progress at a glance.' },
  { Icon: Users2, title: 'Continuous Support', desc: 'A dedicated point of contact for questions, guidance and troubleshooting at every stage of the rollout.' },
]

export default function Teachers() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <PageHero
        eyebrow="For Teachers & Educators"
        icon={Presentation}
        title="Everything Educators"
        highlight="Need to Teach With Confidence."
        description="TechPhilo is built with strong pedagogy and classroom practicality at its core — designed to reduce a teacher's workload, not add to it."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Teachers', href: '/teachers' }]}
        primaryCta={{ label: 'Explore Teaching Tools', href: '/teachers/tools' }}
      />

      <section className="section">
        <div className="container">
          <motion.div
            ref={ref}
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label-tag">Teacher Support</div>
            <h2 className="display-lg">Trusted by Educators<span className="text-gold">.</span></h2>
            <p className="text-md text-muted" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
              Created with strong pedagogy and classroom practicality — every session, resource and lesson plan is thoughtfully crafted.
            </p>
          </motion.div>

          <div className="teacher-pillars">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="card teacher-pillar"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="teacher-pillar__icon"><p.Icon size={22} strokeWidth={1.7} /></div>
                <h3 className="display-sm">{p.title}</h3>
                <p className="text-sm text-muted">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section teacher-dashboard">
        <div className="container teacher-dashboard__inner">
          <div>
            <div className="label-tag" style={{ marginBottom: '1rem' }}><LayoutDashboard size={13} /> Teacher Dashboard</div>
            <h2 className="display-md">See every class at a glance<span className="text-gold">.</span></h2>
            <p className="text-md text-muted" style={{ margin: '1rem 0 1.75rem', maxWidth: 480 }}>
              Track module completion, badge progress and skill development across every class you teach — all from one dashboard, without extra paperwork.
            </p>
            <Link to="/teachers/tools" className="btn btn-primary">
              Explore Teaching Tools <ArrowRight size={16} />
            </Link>
          </div>
          <div className="teacher-dashboard__preview glass">
            <div className="teacher-dashboard__row">
              <span>Class 8B — AI Fundamentals</span><span className="text-gold">82% complete</span>
            </div>
            <div className="teacher-dashboard__bar"><div style={{ width: '82%' }} /></div>
            <div className="teacher-dashboard__row">
              <span>Class 9A — Design Thinking</span><span className="text-gold">64% complete</span>
            </div>
            <div className="teacher-dashboard__bar"><div style={{ width: '64%' }} /></div>
            <div className="teacher-dashboard__row">
              <span>Class 7C — Financial Literacy</span><span className="text-gold">91% complete</span>
            </div>
            <div className="teacher-dashboard__bar"><div style={{ width: '91%' }} /></div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
