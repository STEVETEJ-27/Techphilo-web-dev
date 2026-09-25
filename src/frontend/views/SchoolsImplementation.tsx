import { Route } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ImplementationJourney from '@/components/ImplementationJourney'
import SchoolReadiness from '@/components/SchoolReadiness'
import PartnershipSection from '@/components/PartnershipSection'

export default function SchoolsImplementation() {
  return (
    <>
      <PageHero
        eyebrow="Schools / Implementation"
        icon={Route}
        title="Our Five-Step"
        highlight="Implementation Journey."
        description="A structured, low-friction rollout designed around your school's calendar — from first conversation to a school-wide Grand Expo."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Schools', href: '/schools' }, { label: 'Implementation', href: '/schools/implementation' }]}
        primaryCta={{ label: 'Book a Demo', href: '/book-demo' }}
      />
      <ImplementationJourney />
      <SchoolReadiness />
      <PartnershipSection />
    </>
  )
}
