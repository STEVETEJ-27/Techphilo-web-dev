import { Wrench, FileText, ClipboardCheck, FolderDown, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
import './TeachersTools.css'

const tools = [
  { Icon: FileText, title: 'Lesson Plan Library', desc: 'Ready-made, term-by-term lesson plans mapped to your grade levels and schedule.' },
  { Icon: ClipboardCheck, title: 'Rubrics & Gradebook', desc: 'Built-in rubrics for every project, with a gradebook that keeps assessment consistent across classes.' },
  { Icon: FolderDown, title: 'Resource Downloads', desc: 'Worksheets, activity guides and presentation decks ready to use in class.' },
  { Icon: Sparkles, title: 'Lesson Prep Assistance', desc: 'Smart suggestions that help adapt lesson pacing to how your class is actually progressing.' },
]

export default function TeachersTools() {
  return (
    <>
      <PageHero
        eyebrow="Teachers / Tools"
        icon={Wrench}
        title="Teaching Tools,"
        highlight="Built to Save Time."
        description="Everything a teacher needs to deliver the program with confidence, organised in one place."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Teachers', href: '/teachers' }, { label: 'Tools', href: '/teachers/tools' }]}
      />
      <section className="section">
        <div className="container">
          <div className="tools-grid">
            {tools.map(t => (
              <div key={t.title} className="card tools-grid__item">
                <div className="tools-grid__icon"><t.Icon size={22} strokeWidth={1.7} /></div>
                <h3 className="display-sm">{t.title}</h3>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
