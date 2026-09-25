"use client";

import { Compass } from 'lucide-react'
import PageHero from '@/components/PageHero'
import WhyEvolve from '@/components/WhyEvolve'
import GlobalInspiration from '@/components/GlobalInspiration'
import PartnershipSection from '@/components/PartnershipSection'
import './About.css'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        icon={Compass}
        title="Shaping Today."
        highlight="Empowering Tomorrow."
        description="We help schools build a future-ready learning ecosystem that prepares students for life, not just exams — one integrated program, infinite possibilities."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]}
        secondaryCta={{ label: 'Meet the Team', href: '/about/team' }}
      />

      <section className="section about-mission">
        <div className="container about-mission__inner">
          <blockquote className="about-mission__quote display-md">
            "The best schools don't just teach subjects. They build capabilities that last a lifetime."
          </blockquote>
        </div>
      </section>

      <WhyEvolve />
      <GlobalInspiration />
      <PartnershipSection />
    </>
  )
}
