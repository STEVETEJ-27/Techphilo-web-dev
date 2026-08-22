"use client";

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero" ref={containerRef}>
      {/* Subtle background accent */}
      <div className="hero__bg-layer">
        <div className="hero__bg-gradient" />
      </div>

      {/* Main content — centered, minimal */}
      <div className="hero__content container">
        {/* Brand pill */}
        <motion.div
          className="hero__label-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="label-tag">Future-Ready Education</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="display-xl hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Learn.
          <br />
          <span className="gradient-text">Create.</span>
          <br />
          <span className="hero__headline-accent">Lead.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          One integrated programme designed to help schools build future-ready
          learning ecosystems and empower students with the skills, confidence
          and capabilities to thrive beyond the classroom.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <button
            className="btn btn-primary hero__cta-primary"
            onClick={() => scrollTo('cta')}
          >
            Partner With Us <ChevronRight size={18} />
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo('who-we-are')}
          >
            Explore Programme
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('who-we-are')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to explore"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
        <span className="text-xs" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          Scroll to Explore
        </span>
      </motion.button>
    </section>
  )
}
