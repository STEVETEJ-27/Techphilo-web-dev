import { Download, FileText } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
import './ResourcesList.css'

const downloads = [
  { title: 'TechPhilo School Brochure', desc: 'Full overview of the program, curriculum pillars and implementation model.' },
  { title: 'NEP 2020 Alignment Guide', desc: 'How the program maps to NEP 2020 competencies and outcomes.' },
  { title: 'Implementation Journey One-Pager', desc: 'A single-page summary of the five-step rollout process.' },
]

export default function ResourcesDownloads() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Downloads"
        icon={Download}
        title="Brochure"
        highlight="& Guides."
        description="Take the details with you — download the brochure and share it with your leadership team or board."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Downloads', href: '/resources/downloads' }]}
      />
      <section className="section">
        <div className="container">
          <div className="resource-list">
            {downloads.map(d => (
              <div key={d.title} className="card resource-list__item" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <FileText size={28} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <h3 className="display-sm" style={{ marginBottom: '0.3rem' }}>{d.title}</h3>
                  <p className="text-sm text-muted">{d.desc}</p>
                </div>
                <a href="mailto:techphilo.tp@gmail.com?subject=Brochure%20Request" className="btn btn-outline btn-sm">
                  <Download size={14} /> Request
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
