import { Newspaper } from 'lucide-react'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'
import './ResourcesList.css'

const posts = [
  { title: 'Why Project-Based Learning Builds Real Confidence', tag: 'Pedagogy', excerpt: 'A look at how real-world projects build understanding, creativity and confidence beyond traditional coursework.' },
  { title: 'What NEP 2020 Actually Asks of Schools', tag: 'Policy', excerpt: 'Breaking down what experiential, competency-based education means in practice for school leaders.' },
  { title: 'Inside a Grand Expo: What Parents and Students See', tag: 'Community', excerpt: 'How a school-wide showcase turns a year of learning into a celebration the whole community shows up for.' },
]

export default function ResourcesBlog() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Blog"
        icon={Newspaper}
        title="Ideas on"
        highlight="Future-Ready Learning."
        description="Perspectives from our team on pedagogy, policy and what future-readiness looks like in the classroom."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Blog', href: '/resources/blog' }]}
      />
      <section className="section">
        <div className="container">
          <div className="resource-list">
            {posts.map(p => (
              <article key={p.title} className="card resource-list__item">
                <span className="tech-tag">{p.tag}</span>
                <h3 className="display-sm">{p.title}</h3>
                <p className="text-sm text-muted">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
