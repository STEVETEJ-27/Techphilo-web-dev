import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Link } from '@/router'
import './PageHero.css'

interface Crumb { label: string; href: string }

interface PageHeroProps {
  eyebrow: string
  icon?: LucideIcon
  title: string
  highlight?: string
  description: string
  breadcrumbs?: Crumb[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function PageHero({
  eyebrow, icon: Icon, title, highlight, description, breadcrumbs, primaryCta, secondaryCta,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="orb orb-blue" style={{ width: '36vw', height: '36vw', top: '-15%', left: '-8%' }} />
      <div className="orb orb-gold" style={{ width: '24vw', height: '24vw', bottom: '-10%', right: '0%' }} />
      <div className="container">
        <div className="page-hero__inner">
        {breadcrumbs && (
          <nav className="page-hero__crumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((c, i) => (
              <span key={c.href}>
                {i > 0 && <span className="page-hero__crumb-sep">/</span>}
                <Link to={c.href} className="page-hero__crumb-link">{c.label}</Link>
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label-tag">
            {Icon && <Icon size={13} />} {eyebrow}
          </div>
          <h1 className="display-lg page-hero__title">
            {title} {highlight && <span className="text-gold">{highlight}</span>}
          </h1>
          <p className="text-lg text-muted page-hero__desc">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="page-hero__ctas">
              {primaryCta && (
                <Link to={primaryCta.href} className="btn btn-primary">{primaryCta.label}</Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.href} className="btn btn-outline">{secondaryCta.label}</Link>
              )}
            </div>
          )}
        </motion.div>
        </div>
      </div>
    </header>
  )
}
