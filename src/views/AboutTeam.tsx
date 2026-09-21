import { Users, Linkedin, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import './AboutTeam.css'

const roles = [
  { role: 'Founder & CEO', focus: 'Vision, partnerships and long-term program design.' },
  { role: 'Head of Pedagogy', focus: 'Curriculum design, teacher training and classroom practicality.' },
  { role: 'Head of Partnerships', focus: 'Working directly with school leadership on implementation.' },
  { role: 'Head of Student Experience', focus: 'Project design, Explorer Passport and the Grand Expo.' },
]

export default function AboutTeam() {
  return (
    <>
      <PageHero
        eyebrow="About / Team"
        icon={Users}
        title="The People Behind"
        highlight="TechPhilo."
        description="A team of educators, technologists and programme designers working directly with schools to bring the program to life."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Team', href: '/about/team' }]}
      />
      <section className="section">
        <div className="container">
          <div className="team-grid">
            {roles.map(r => (
              <div key={r.role} className="card team-card">
                <div className="team-card__avatar" aria-hidden="true" />
                <h3 className="display-sm">{r.role}</h3>
                <p className="text-sm text-muted">{r.focus}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <div className="card glass" style={{ padding: '2.5rem 1.5rem', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', maxWidth: '580px', width: '100%', margin: '0 auto' }}>
              <Linkedin size={32} style={{ color: 'var(--brand)' }} />
              <h3 className="display-sm" style={{ margin: 0 }}>Follow Our Journey on LinkedIn</h3>
              <p className="text-sm text-muted" style={{ margin: 0, maxWidth: '460px' }}>
                Stay updated on our latest school partnerships, educational insights, and community stories.
              </p>
              <a
                href="https://www.linkedin.com/company/techphilo/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ marginTop: '0.5rem' }}
              >
                View LinkedIn Posts <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
