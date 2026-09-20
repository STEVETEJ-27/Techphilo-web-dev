import { Clock, BarChart3, CheckCircle2, ArrowRight, GraduationCap, Award, Rocket, Layers } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
import NotFound from './NotFound'
import { Link, useParams } from '../router'
import { courses } from '../data/courses'
import './CourseDetail.css'

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>('/courses/:slug')
  const course = courses.find(c => c.slug === slug)

  if (!course) return <NotFound />

  return (
    <>
      <PageHero
        eyebrow={course.categoryLabel}
        icon={course.Icon}
        title={course.title}
        description={course.summary}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: course.title, href: `/courses/${course.slug}` },
        ]}
        primaryCta={{ label: 'Enroll Interest', href: '/book-demo' }}
      />

      <section className="section course-detail">
        <div className="container course-detail__grid">
          <div className="course-detail__main">
            {/* Outcomes */}
            <div className="course-detail__section">
              <h2 className="display-md course-detail__heading">Learning Outcomes</h2>
              <ul className="course-detail__outcomes">
                {course.outcomes.map(o => (
                  <li key={o}>
                    <CheckCircle2 size={18} style={{ color: course.color, flexShrink: 0, marginTop: '2px' }} />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Modules */}
            {course.modules && course.modules.length > 0 && (
              <div className="course-detail__section" style={{ marginTop: '3rem' }}>
                <div className="label-tag" style={{ marginBottom: '1rem' }}><Layers size={13} /> Curriculum Framework</div>
                <h2 className="display-md course-detail__heading">4-Module Syllabus</h2>
                <div className="course-detail__modules">
                  {course.modules.map(m => (
                    <div key={m.num} className="course-module-card glass">
                      <div className="course-module-card__header">
                        <span className="course-module-card__num" style={{ color: course.color }}>Module {m.num}</span>
                        <h3 className="course-module-card__title">{m.title}</h3>
                      </div>
                      <p className="course-module-card__desc text-sm text-muted">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Capstone Showcase Highlight */}
            {course.capstoneProject && (
              <div className="course-detail__capstone glass" style={{ marginTop: '3rem', borderColor: `color-mix(in srgb, ${course.color} 30%, transparent)` }}>
                <div className="course-detail__capstone-header">
                  <span className="course-detail__capstone-icon" style={{ color: course.color, background: `color-mix(in srgb, ${course.color} 12%, transparent)` }}>
                    <Rocket size={20} />
                  </span>
                  <div>
                    <span className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Capstone Build Outcome</span>
                    <h3 className="display-sm" style={{ color: 'var(--text-bright)' }}>{course.capstoneProject}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted" style={{ marginTop: '0.75rem' }}>
                  Every student enrolled completes a fully functional capstone project ready for live demonstration at the Grand Expo.
                </p>
              </div>
            )}
          </div>

          <aside className="card course-detail__sidebar">
            <h3 className="text-md" style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-bright)' }}>Course Specifications</h3>
            
            <div className="course-detail__meta-row">
              <Clock size={16} /> <span>Duration</span> <strong>{course.duration}</strong>
            </div>
            
            <div className="course-detail__meta-row">
              <GraduationCap size={16} /> <span>Target Grades</span> <strong>{course.gradeBand}</strong>
            </div>
            
            <div className="course-detail__meta-row">
              <BarChart3 size={16} /> <span>Difficulty Level</span> <strong>{course.level}</strong>
            </div>

            {course.badge && (
              <div className="course-detail__meta-row">
                <Award size={16} /> <span>Passport Badge</span> <strong style={{ color: course.color }}>{course.badge}</strong>
              </div>
            )}

            <div className="course-detail__progress" style={{ marginTop: '1.5rem' }}>
              <div className="course-detail__progress-label">
                <span>Sample cohort progress</span><span style={{ color: course.color }}>68%</span>
              </div>
              <div className="course-detail__progress-bar">
                <div style={{ width: '68%', background: course.color }} />
              </div>
            </div>

            <Link to="/book-demo" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
              Enroll Interest <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
