"use client";

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { Link, useRouter, isActivePath } from '../router'
import './Navbar.css'

interface SubLink { label: string; desc: string; href: string }
interface NavItem { label: string; href: string; children?: SubLink[] }

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Courses', href: '/courses',
    children: [
      { label: 'All Courses', desc: 'Browse the full catalog', href: '/courses' },
      { label: 'Coding & Technology', desc: 'Coding, AI & core tech', href: '/courses?category=technology' },
      { label: 'Entrepreneurship & Innovation', desc: 'Ideas into ventures', href: '/courses?category=entrepreneurship' },
    ],
  },
  {
    label: 'Schools', href: '/schools',
    children: [
      { label: 'Overview', desc: 'Why schools choose TechPhilo', href: '/schools' },
      { label: 'Implementation Journey', desc: 'Our 5-step rollout process', href: '/schools/implementation' },
      { label: 'Pricing', desc: 'Plans built around your school', href: '/schools/pricing' },
    ],
  },
  {
    label: 'Teachers', href: '/teachers',
    children: [
      { label: 'Overview', desc: 'Support for every educator', href: '/teachers' },
      { label: 'Teaching Tools', desc: 'Lesson plans & dashboards', href: '/teachers/tools' },
    ],
  },
  {
    label: 'Students', href: '/students',
    children: [
      { label: 'Overview', desc: 'The student learning journey', href: '/students' },
      { label: 'Certificates', desc: 'Explorer Passport & badges', href: '/students/certificates' },
    ],
  },
  {
    label: 'About', href: '/about',
    children: [
      { label: 'Our Story', desc: 'Vision, mission & values', href: '/about' },
      { label: 'Team', desc: 'The people behind TechPhilo', href: '/about/team' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const { path, navigate } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useEffect(() => {
    setMenuOpen(false)
    setOpenDesktopItem(null)
    setOpenMobileGroup(null)
  }, [path])

  const openItem = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDesktopItem(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDesktopItem(null), 150)
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner container">
          {/* Animated gradient bottom border — palette-matched */}
          <div className="grad-divider" aria-hidden="true" />
          <Link to="/" className="navbar__logo" aria-label="TechPhilo Home">
            <Logo height={40} />
            <span className="navbar__wordmark">TechPhilo</span>
          </Link>

          <nav className="navbar__links" aria-label="Site navigation">
            {navItems.map(item => (
              <div
                key={item.label}
                className={`navbar__item ${openDesktopItem === item.label ? 'navbar__item--open' : ''}`}
                onMouseEnter={() => item.children && openItem(item.label)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                <Link
                  to={item.href}
                  className={`navbar__link navbar__link-trigger ${isActivePath(path, item.href) ? 'navbar__link--active' : ''}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} />}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {openDesktopItem === item.label && (
                      <motion.div
                        className="navbar__dropdown"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {item.children.map(child => (
                          <Link key={child.label} to={child.href} className="navbar__dropdown-link">
                            <strong>{child.label}</strong>
                            <span>{child.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="navbar__actions">
            <Link to="/book-demo" className="btn btn-primary btn-sm">
              Book Demo <ArrowRight size={14} />
            </Link>
          </div>

          <button
            className="navbar__mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div
          className="grad-divider opacity-0 transition-opacity duration-500"
          id="navbar-divider"
          style={{ opacity: 1 }}
        />
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu__content">
              <div className="mobile-menu__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Logo height={38} />
                  <span className="navbar__wordmark" style={{ fontSize: '1.4rem' }}>TechPhilo</span>
                </div>
              </div>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="mobile-menu__group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <button
                    className="mobile-menu__link"
                    onClick={() => {
                      if (item.children) {
                        setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)
                      } else {
                        navigate(item.href)
                      }
                    }}
                  >
                    <span className="mobile-menu__num">0{i + 1}</span>
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={18}
                        style={{
                          marginLeft: 'auto',
                          transform: openMobileGroup === item.label ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.children && openMobileGroup === item.label && (
                      <motion.div
                        className="mobile-menu__sublinks"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.children.map(child => (
                          <button key={child.label} className="mobile-menu__sublink" onClick={() => navigate(child.href)}>
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.div
                className="mobile-menu__secondary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/book-demo')}>
                  Book Demo <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
