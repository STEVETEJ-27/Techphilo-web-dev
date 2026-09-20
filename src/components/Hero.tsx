"use client";

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Subtle background accent */}
      <div className="hero__bg-layer" aria-hidden="true">
        <div className="hero__bg-gradient" />
      </div>

      {/* Main content */}
      <div className="hero__content container">

        {/* Eyebrow */}
        <motion.div
          className="hero__label-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="label-tag">Six Programs · One Ecosystem</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="display-xl hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Real skills.<br />
          <span className="gradient-text">Built in your</span><br />
          <span className="hero__headline-accent">classroom.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          TechPhilo brings Coding, Design Thinking, Entrepreneurship, Financial
          Literacy, Communication and Leadership into school — structured,
          teacher-ready, and built around students.
        </motion.p>

        {/* CTAs — direct links, no scrollTo fighting Lenis */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <Link href="/schools" className="btn btn-primary hero__cta-primary">
            Explore for Schools <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link href="/students" className="btn btn-outline">
            Explore Learning
          </Link>
        </motion.div>

        {/* Program names strip */}
        <motion.div
          className="hero__program-strip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-label="Our programs"
        >
          {['Coding & Technology', 'Financial Literacy', 'Entrepreneurship', 'Communication', 'Design Thinking', 'Leadership'].map((p, i) => (
            <span key={p} className="hero__program-item">
              {p}{i < 5 && <span className="hero__program-dot" aria-hidden="true" />}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
