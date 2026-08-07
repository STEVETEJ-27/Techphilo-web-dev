import { Clock, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'
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
          <div>
            <h2 className="display-md course-detail__heading">Learning Outcomes</h2>
            <ul className="course-detail__outcomes">
              {course.outcomes.map(o => (
                <li key={o}><CheckCircle2 size={18} style={{ color: course.color }} /> <span>{o}</span></li>
              ))}
            </ul>
          </div>

          <aside className="card course-detail__sidebar">
            <div className="course-detail__meta-row"><Clock size={16} /> <span>Duration</span> <strong>{course.duration}</strong></div>
            <div className="course-detail__meta-row"><BarChart3 size={16} /> <span>Level</span> <strong>{course.level}</strong></div>
            <div className="course-detail__progress">
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
