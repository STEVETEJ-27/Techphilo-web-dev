"use client";

import Logo from './Logo'
import { Link } from '../router'
import { Mail, Instagram, Youtube } from 'lucide-react'
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
            <a href="mailto:techphilo.tp@gmail.com" className="footer__contact-link footer__social-link">
              <Mail size={14} strokeWidth={2} />
              techphilo.tp@gmail.com
            </a>
            <a href="https://www.instagram.com/techphilo.tp" target="_blank" rel="noopener noreferrer" className="footer__contact-link footer__social-link">
              <Instagram size={14} strokeWidth={2} />
              @techphilo.tp
            </a>
            <a href="https://youtube.com/@itstechphilo-tp" target="_blank" rel="noopener noreferrer" className="footer__contact-link footer__social-link">
              <Youtube size={14} strokeWidth={2} />
              @itstechphilo-tp
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
