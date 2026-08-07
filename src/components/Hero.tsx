"use client";

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import './Hero.css'

const schoolSignals = [
  { text: 'NEP 2020 Aligned', icon: '📋' },
  { text: 'Teacher Training', icon: '🧑‍🏫' },
  { text: 'Explorer Passport', icon: '🗺️' },
  { text: 'Grand Expo', icon: '🎪' },
]

const studentSignals = [
  { text: 'AI & Technology', icon: '🤖' },
  { text: 'Real Projects', icon: '🛠️' },
  { text: 'Skills', icon: '⚡' },
  { text: 'Future-Ready', icon: '🚀' },
]

const codeLines = [
  { num: '01', text: 'const school = new TechPhilo({', color: '#F5CB70' },
  { num: '02', text: '  mission: "future-ready",', color: '#a8c4ff' },
  { num: '03', text: '  students: "empowered",', color: '#a8c4ff' },
  { num: '04', text: '  teachers: "supported",', color: '#a8c4ff' },
  { num: '05', text: '  learning: "experiential",', color: '#a8c4ff' },
  { num: '06', text: '})', color: '#F5CB70' },
  { num: '07', text: '', color: '' },
  { num: '08', text: 'school.launch() // 🚀', color: '#7dd3a8' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 60])
  const midY = useTransform(scrollY, [0, 600], [0, 30])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [typedLines, setTypedLines] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedLines(prev => (prev < codeLines.length ? prev + 1 : prev))
    }, 300)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * 14
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero" ref={containerRef}>
      {/* Background parallax */}
      <motion.div className="hero__bg-layer" style={{ y: bgY }}>
        <div className="orb orb-blue" style={{ width: '55vw', height: '55vw', top: '-20%', right: '-15%' }} />
        <div className="orb orb-gold" style={{ width: '35vw', height: '35vw', bottom: '-5%', left: '-8%' }} />
        <div className="hero__grid-bg" />
      </motion.div>

      {/* Floating signals — desktop only */}
      <motion.div className="hero__signals" style={{ y: midY }} aria-hidden="true">
        {schoolSignals.map((s, i) => (
          <motion.div
            key={s.text}
            className="hero__signal hero__signal--school"
            style={{ top: `${20 + i * 18}%`, left: '4%' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.75, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15 }}
          >
            <span>{s.icon}</span><span>{s.text}</span>
          </motion.div>
        ))}
        {studentSignals.map((s, i) => (
          <motion.div
            key={s.text}
            className="hero__signal hero__signal--student"
            style={{ top: `${20 + i * 18}%`, right: '3%' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.75, x: 0 }}
            transition={{ delay: 1.4 + i * 0.15 }}
          >
            <span>{s.icon}</span><span>{s.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div className="hero__content container" style={{ opacity }}>
        <div className="hero__left-column">
          {/* Brand statement */}
          <motion.div
            className="hero__label-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="label-tag">
              <span className="dot-pulse" />
              Think. Create. Thrive.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="display-xl hero__headline"
            initial={{ opacity: 0, y: 40 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            One integrated programme designed to help schools build future-ready
            learning ecosystems and empower students with the skills, confidence
            and capabilities to thrive beyond the classroom.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <button
              className="btn btn-primary hero__cta-primary"
              onClick={() => scrollTo('cta')}
            >
              Partner With Us <ChevronRight size={18} />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('student-experience')}
            >
              Explore Student Learning
            </button>
          </motion.div>
        </div>

        {/* Code window */}
        <motion.div
          className="hero__code-window glass"
          style={{ rotateY: -mousePos.x * 0.25, rotateX: mousePos.y * 0.25 }}
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__code-header">
            <span className="hero__code-dot" style={{ background: '#ff5f57' }} />
            <span className="hero__code-dot" style={{ background: '#febc2e' }} />
            <span className="hero__code-dot" style={{ background: '#28c840' }} />
            <span className="hero__code-filename">techphilo.ts</span>
          </div>
          <div className="hero__code-body">
            {codeLines.slice(0, typedLines).map((line, i) => (
              <div key={i} className="hero__code-line">
                <span className="hero__code-num">{line.num}</span>
                <span style={{ color: line.color || 'rgba(255,255,255,0.4)' }}>{line.text || '\u00A0'}</span>
              </div>
            ))}
            {typedLines < codeLines.length && (
              <div className="hero__code-line">
                <span className="hero__code-num">{String(typedLines + 1).padStart(2, '0')}</span>
                <span className="hero__cursor">▋</span>
              </div>
            )}
          </div>
          {/* Ecosystem visual below code */}
          <div className="hero__eco-row">
            <div className="hero__eco-node">🏫<span>School</span></div>
            <div className="hero__eco-arrow">→</div>
            <div className="hero__eco-node">📚<span>Learn</span></div>
            <div className="hero__eco-arrow">→</div>
            <div className="hero__eco-node">🛠️<span>Build</span></div>
            <div className="hero__eco-arrow">→</div>
            <div className="hero__eco-node hero__eco-node--gold">🚀<span>Future</span></div>
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          className="hero__workspace-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="hero__ws-card glass"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          >
            <div className="hero__ws-icon">🏫</div>
            <div>
              <div className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>Programme Focus</div>
              <div className="text-sm" style={{ fontWeight: 600, color: 'var(--white)' }}>Future-Ready Schools</div>
            </div>
          </motion.div>
          <motion.div
            className="hero__ws-card glass hero__ws-card--sm"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
          >
            <div className="hero__ws-progress-label">
              <span className="text-xs text-gold" style={{ fontWeight: 600 }}>NEP 2020</span>
              <span className="text-xs text-muted">Aligned ✓</span>
            </div>
            <div className="hero__ws-progress-bar">
              <motion.div
                className="hero__ws-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('audience-selector')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-label="Scroll to explore"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
        <span className="text-xs" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
          Scroll to Explore
        </span>
      </motion.button>
    </section>
  )
}
