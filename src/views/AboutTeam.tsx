import { Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
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
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
