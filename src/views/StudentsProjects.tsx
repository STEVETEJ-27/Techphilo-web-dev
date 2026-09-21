import { FolderKanban } from 'lucide-react'
import PageHero from '../components/PageHero'
import ProjectShowcase from '../components/ProjectShowcase'
import StudentShowcase from '../components/StudentShowcase'

export default function StudentsProjects() {
  return (
    <>
      <PageHero
        eyebrow="Students / Projects"
        icon={FolderKanban}
        title="Real Projects."
        highlight="Real Portfolios."
        description="No toy examples — every project applies real technology to a real problem, and every build becomes portfolio-ready work."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Students', href: '/students' }, { label: 'Projects', href: '/students/projects' }]}
      />
      <ProjectShowcase />
      <StudentShowcase />
    </>
  )
}
