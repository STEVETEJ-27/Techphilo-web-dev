"use client";

import { Building2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import WhySchools from '../components/WhySchools'
import TechPhiloDifference from '../components/TechPhiloDifference'
import ResponsibilityMatrix from '../components/ResponsibilityMatrix'
import PartnershipSection from '../components/PartnershipSection'
import GrandExpo from '../components/GrandExpo'

export default function Schools() {
  return (
    <>
      <PageHero
        eyebrow="For Schools & Institutions"
        icon={Building2}
        title="Building Future-Ready"
        highlight="Schools."
        description="One integrated, ready-to-implement future-readiness program — NEP 2020 aligned, trusted by educators, and built to fit your school without adding to the burden."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Schools', href: '/schools' }]}
        primaryCta={{ label: 'See the Implementation Journey', href: '/schools/implementation' }}
        secondaryCta={{ label: 'View Pricing', href: '/schools/pricing' }}
      />
      <WhySchools />
      <TechPhiloDifference />
      <ResponsibilityMatrix />
      <PartnershipSection />
      <GrandExpo />
    </>
  )
}
