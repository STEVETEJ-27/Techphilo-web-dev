"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from '../router'
import './FeaturedCoursesHome.css'

export default function FeaturedCoursesHome() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="featured-courses" className="section featured-courses-home">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="label-tag">Our Programs</div>
          <h2 className="display-lg">Discover what you can learn with <span className="text-gold">TechPhilo.</span></h2>
          <p className="text-md text-muted" style={{ maxWidth: 640, margin: '1rem auto 0' }}>
            Explore our structured learning programs designed to build strong foundations, develop practical skills, and prepare you for the future.
          </p>
        </motion.div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '2.75rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Link to="/courses" className="btn btn-primary">
            Explore Our Courses <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
