"use client";

import { GraduationCap } from 'lucide-react'
import PageHero from '../components/PageHero'
import StudentJourney from '../components/StudentJourney'
import TechnologyEcosystem from '../components/TechnologyEcosystem'
import LearningExperience from '../components/LearningExperience'
import FinalCTA from '../components/FinalCTA'

export default function Students() {
  return (
    <>
      <PageHero
        eyebrow="For Students & Learners"
        icon={GraduationCap}
        title="Build Skills. Develop Confidence."
        highlight="Master Your Future."
        description="Get hands-on with technology, AI, entrepreneurship and design thinking — and turn what you learn into practical skills for your future."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Students', href: '/students' }]}
        primaryCta={{ label: 'Explore Our Courses', href: '/courses' }}
        secondaryCta={{ label: 'Certificates & Badges', href: '/students/certificates' }}
      />
      <StudentJourney />
      <TechnologyEcosystem />
      <LearningExperience />
      <FinalCTA />
    </>
  )
}
