"use client";

import Logo from './Logo'
import { Link } from '@/router'
import { Mail, Instagram, Youtube, Linkedin } from 'lucide-react'
import './Footer.css'

const programLinks = [
  { label: 'Coding & Technology',    href: '/courses?category=technology' },
  { label: 'Financial Literacy',     href: '/courses?category=finance' },
  { label: 'Entrepreneurship',       href: '/courses?category=entrepreneurship' },
  { label: 'Communication',          href: '/courses?category=communication' },
  { label: 'Design Thinking',        href: '/courses?category=design' },
  { label: 'Leadership',             href: '/courses?category=leadership' },
]

const institutionLinks = [
  { label: 'For Schools',            href: '/schools' },
  { label: 'Implementation Journey', href: '/schools/implementation' },
  { label: 'Teacher Support',        href: '/teachers' },
  { label: 'Pricing & Partnership',  href: '/schools/pricing' },
  { label: 'For Students',           href: '/students' },
  { label: 'Resources',              href: '/resources' },
  { label: 'About TechPhilo',        href: '/about' },
  { label: 'Book a Demo',            href: '/book-demo' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />

      <div className="container footer__inner">
        {/* Brand Col */}
        <div className="footer__col footer__brand">
          <div className="footer__brand-logo">
            <Logo height={42.5} showTitle={true} />
          </div>
          <p className="footer__tagline">
            One ecosystem. Two journeys.<br />
            Schools that lead. Students that thrive.
          </p>
          <p className="footer__tagline footer__tagline--sub">
            Learn today. Lead tomorrow.
          </p>
        </div>

        {/* Programs Col */}
        <nav className="footer__col footer__nav" aria-label="Programs">
          <div className="footer__nav-title text-xs">PROGRAMS</div>
          <div className="footer__nav-list">
            {programLinks.map(link => (
              <Link key={link.label} to={link.href} className="footer__nav-link">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Institutions Col */}
        <nav className="footer__col footer__nav" aria-label="For Institutions">
          <div className="footer__nav-title text-xs">FOR INSTITUTIONS</div>
          <div className="footer__nav-list">
            {institutionLinks.map(link => (
              <Link key={link.label} to={link.href} className="footer__nav-link">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Connect Col */}
        <div className="footer__col footer__connect">
          <div className="footer__nav-title text-xs">CONNECT</div>
          <div className="footer__nav-list">
            <a href="mailto:techphilo.tp@gmail.com" className="footer__contact-link footer__social-link">
              <Mail size={14} strokeWidth={2} aria-hidden="true" />
              techphilo.tp@gmail.com
            </a>
            <a href="https://www.linkedin.com/company/techphilo/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer__contact-link footer__social-link">
              <Linkedin size={14} strokeWidth={2} aria-hidden="true" />
              TechPhilo on LinkedIn
            </a>
            <a href="https://www.instagram.com/techphilo.tp" target="_blank" rel="noopener noreferrer" className="footer__contact-link footer__social-link">
              <Instagram size={14} strokeWidth={2} aria-hidden="true" />
              @techphilo.tp
            </a>
            <a href="https://youtube.com/@itstechphilo-tp" target="_blank" rel="noopener noreferrer" className="footer__contact-link footer__social-link">
              <Youtube size={14} strokeWidth={2} aria-hidden="true" />
              @itstechphilo-tp
            </a>
          </div>

          <div className="footer__cta-group">
            <Link to="/contact" className="btn btn-primary btn-sm footer__cta-btn">
              Partner With Us
            </Link>
            <Link to="/book-demo" className="btn btn-outline btn-sm footer__cta-btn">
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {new Date().getFullYear()} TechPhilo. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="#" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="#" className="footer__bottom-link">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
