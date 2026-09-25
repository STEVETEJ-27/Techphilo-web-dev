import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Newspaper, CalendarDays, Download, ArrowRight, HelpCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { Link } from '@/router'
import './Resources.css'

const hubs = [
  { Icon: Newspaper, title: 'Blog', desc: 'Ideas, perspectives and updates on future-ready education.', href: '/resources/blog' },
  { Icon: CalendarDays, title: 'Events', desc: 'Workshops, webinars and Grand Expo dates near you.', href: '/resources/events' },
  { Icon: Download, title: 'Downloads', desc: 'Brochure, guides and program one-pagers.', href: '/resources/downloads' },
]

const faqs = [
  { q: 'Is the program aligned with NEP 2020?', a: 'Yes. The program is experiential, activity-based, competency-focused and multidisciplinary, in line with NEP 2020.' },
  { q: 'Does this add extra work for teachers?', a: 'No — the program is designed to be ready-to-implement, with detailed lesson plans and training so it fits into your existing schedule rather than adding to it.' },
  { q: 'What does assessment look like?', a: 'Rubrics, badges and certificates are built into the program, alongside skill reports that track real, portfolio-backed growth.' },
  { q: 'How long does implementation take?', a: 'It follows a five-step journey — Discover, Plan, Train, Implement and Showcase — scoped to your school\'s calendar. See the full implementation journey for details.' },
]

export default function Resources() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <PageHero
        eyebrow="Resources"
        icon={BookOpen}
        title="Guides, Blogs"
        highlight="& Downloads."
        description="Everything you need to learn more about TechPhilo, share with your team, or bring to your next school leadership meeting."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }]}
      />

      <section className="section">
        <div className="container">
          <div className="resources-hub-grid">
            {hubs.map(h => (
              <Link key={h.title} to={h.href} className="card resources-hub-card">
                <div className="resources-hub-card__icon"><h.Icon size={22} strokeWidth={1.7} /></div>
                <h3 className="display-sm">{h.title}</h3>
                <p className="text-sm text-muted">{h.desc}</p>
                <span className="resources-hub-card__link">Explore <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <motion.div
            ref={ref}
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label-tag"><HelpCircle size={13} /> FAQ</div>
            <h2 className="display-lg">Frequently Asked <span className="text-gold">Questions</span></h2>
          </motion.div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                className="faq__item"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
              >
                <summary>{f.q}</summary>
                <p className="text-sm text-muted">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
