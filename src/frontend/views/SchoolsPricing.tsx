import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Tag, Check, ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { Link } from '@/router'
import './SchoolsPricing.css'

const tiers = [
  {
    name: 'Starter',
    tagline: 'For a single grade band getting started',
    features: ['One integrated future-readiness program', 'Core teacher training & lesson plans', 'Explorer Passport for participating students', 'End-of-term mini showcase'],
  },
  {
    name: 'Growth',
    tagline: 'For schools scaling across multiple grades',
    featured: true,
    features: ['Everything in Starter', 'Multi-grade curriculum calendar', 'Ongoing teacher support & coaching', 'Full Grand Expo with community showcase', 'Skill reports & progress tracking'],
  },
  {
    name: 'Enterprise',
    tagline: 'For school groups & large institutions',
    features: ['Everything in Growth', 'Cross-campus implementation roadmap', 'Dedicated partnership manager', 'Custom reporting for leadership & boards', 'Priority onboarding & training'],
  },
]

export default function SchoolsPricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <PageHero
        eyebrow="Schools / Pricing"
        icon={Tag}
        title="Plans Built Around"
        highlight="Your School."
        description="Every partnership is scoped to your school's size, grades and goals. Explore how the program scales, then book a call for a tailored quote."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Schools', href: '/schools' }, { label: 'Pricing', href: '/schools/pricing' }]}
        primaryCta={{ label: 'Get a Custom Quote', href: '/book-demo' }}
      />

      <section className="section pricing">
        <div className="container">
          <div className="grid-3" ref={ref}>
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                className={`pricing-card ${tier.featured ? 'pricing-card--featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {tier.featured && <div className="pricing-card__badge">Most Popular</div>}
                <h3 className="display-md">{tier.name}</h3>
                <p className="text-sm text-muted pricing-card__tagline">{tier.tagline}</p>
                <ul className="pricing-card__list">
                  {tier.features.map(f => (
                    <li key={f}><Check size={16} /> <span>{f}</span></li>
                  ))}
                </ul>
                <Link to="/book-demo" className={`btn ${tier.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center' }}>
                  Talk to Us <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted pricing-note">
            Pricing is customised per partnership based on school size, number of grades and programme scope — book a call and we'll put together a proposal for you.
          </p>
        </div>
      </section>
    </>
  )
}
