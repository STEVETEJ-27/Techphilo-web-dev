"use client";

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Clock, BarChart3, ArrowRight, BookOpen } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Link } from '../router'
import { courses, categories, Course } from '../data/courses'
import './Courses.css'

export default function Courses() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Course['category'] | 'all'>('all')

  const filtered = useMemo(() => {
    return courses.filter((c: Course) => {
      const matchesCategory = activeCategory === 'all' || c.category === activeCategory
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase()) || c.summary.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <>
      <PageHero
        eyebrow="Course Catalog"
        icon={BookOpen}
        title="Explore the Full"
        highlight="Course Catalog."
        description="Six interconnected pillars, one integrated program — search, filter and dive into any course to see what students actually build."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Courses', href: '/courses' }]}
      />

      <section className="section courses-catalog">
        <div className="container">
          <div className="courses-catalog__controls">
            <div className="courses-catalog__search">
              <Search size={17} />
              <input
                type="text"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search courses"
              />
            </div>
            <div className="courses-catalog__pills">
              {categories.map((cat: any) => (
                <button
                  key={cat.id}
                  className={`courses-catalog__pill ${activeCategory === cat.id ? 'courses-catalog__pill--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-md text-muted" style={{ textAlign: 'center', padding: '3rem 0' }}>
              No courses match your search. Try a different term or category.
            </p>
          ) : (
            <div className="courses-catalog__grid">
              {filtered.map((c: Course, i: number) => (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link to={`/courses/${c.slug}`} className={`course-card ${c.image ? 'course-card--has-image' : ''}`}>
                    {c.image ? (
                      <>
                        <div className="course-card__image-wrap">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="course-card__image"
                          />
                          <div className="course-card__badge">
                            <span className="course-card__badge-icon" style={{ color: c.color }}>
                              <c.Icon size={13} strokeWidth={2.2} />
                            </span>
                            <span>{c.categoryLabel}</span>
                          </div>
                        </div>
                        <div className="course-card__body">
                          <h3 className="course-card__title">{c.title}</h3>
                          <div className="course-card__footer">
                            <span className="course-card__cta">View Course <ArrowRight size={14} /></span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="course-card__body">
                        <div>
                          <div className="course-card__header">
                            <div className="course-card__icon" style={{ color: c.color, background: `color-mix(in srgb, ${c.color} 9%, transparent)`, border: `1px solid color-mix(in srgb, ${c.color} 19%, transparent)` }}>
                              <c.Icon size={20} strokeWidth={1.7} />
                            </div>
                            <span className="tech-tag">{c.categoryLabel}</span>
                          </div>
                          <h3 className="course-card__title">{c.title}</h3>
                        </div>
                        <div className="course-card__footer">
                          <span className="course-card__cta">View Course <ArrowRight size={14} /></span>
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
