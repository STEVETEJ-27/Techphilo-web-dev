"use client";

import Logo from './Logo'
import { Link } from '../router'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Demo', href: '/book-demo' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />

      <div className="container footer__inner">
        {/* Left Col: Brand */}
        <div className="footer__col footer__brand">
          <div className="footer__brand-logo">
            <Logo height={44} />
            <span className="footer__wordmark">TechPhilo</span>
          </div>
          <p className="footer__tagline">
            Learn today. Lead tomorrow.
          </p>
        </div>

        {/* Middle Col: Quick Links */}
        <nav className="footer__col footer__nav" aria-label="Quick Links">
          <div className="footer__nav-title text-xs">QUICK LINKS</div>
          <div className="footer__nav-list">
            {quickLinks.map(link => (
              <Link key={link.label} to={link.href} className="footer__nav-link">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Col: Connect */}
        <div className="footer__col footer__connect">
          <div className="footer__nav-title text-xs">CONNECT</div>
          <div className="footer__nav-list">
            <a href="mailto:info@techphilo.in" className="footer__contact-link">
              info@techphilo.in
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {new Date().getFullYear()} TechPhilo. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="#" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="#" className="footer__bottom-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
