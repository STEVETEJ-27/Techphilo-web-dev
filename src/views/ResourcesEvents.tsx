import { CalendarDays, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
import './ResourcesList.css'

const events = [
  { title: 'School Leaders Webinar: Implementing NEP 2020', date: 'Every month', format: 'Online' },
  { title: 'Teacher Onboarding Workshop', date: 'Scheduled per partnership', format: 'On-campus' },
  { title: 'Grand Expo Season', date: 'End of academic term', format: 'On-campus' },
]

export default function ResourcesEvents() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Events"
        icon={CalendarDays}
        title="Workshops"
        highlight="& Webinars."
        description="Live sessions for school leaders and teachers, plus the Grand Expo — our biggest celebration of student work."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Events', href: '/resources/events' }]}
      />
      <section className="section">
        <div className="container">
          <div className="resource-list">
            {events.map(e => (
              <article key={e.title} className="card resource-list__item">
                <h3 className="display-sm">{e.title}</h3>
                <div className="resource-list__meta">
                  <span><Clock size={13} /> {e.date}</span>
                  <span>{e.format}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
