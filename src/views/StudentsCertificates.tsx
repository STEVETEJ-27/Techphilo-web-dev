import { Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import ExplorerPassport from '../components/ExplorerPassport'
import GrandExpo from '../components/GrandExpo'

export default function StudentsCertificates() {
  return (
    <>
      <PageHero
        eyebrow="Students / Certificates"
        icon={Award}
        title="Every Mission"
        highlight="Earns a Stamp."
        description="Track your growth with the Explorer Passport, and celebrate your learning at the Grand Expo — a school-wide event for students and parents."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Students', href: '/students' }, { label: 'Certificates', href: '/students/certificates' }]}
      />
      <ExplorerPassport />
      <GrandExpo />
    </>
  )
}
