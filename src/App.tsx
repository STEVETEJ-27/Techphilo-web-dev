import { useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { RouterProvider, useRouter, useScrollToTopOnNavigate, matchPath } from './router'

import Home from './views/Home'
import Courses from './views/Courses'
import CourseDetail from './views/CourseDetail'
import Schools from './views/Schools'
import SchoolsImplementation from './views/SchoolsImplementation'
import SchoolsPricing from './views/SchoolsPricing'
import Teachers from './views/Teachers'
import TeachersTools from './views/TeachersTools'
import Students from './views/Students'

import StudentsCertificates from './views/StudentsCertificates'
import About from './views/About'
import AboutTeam from './views/AboutTeam'
import Contact from './views/Contact'
import Login from './views/Login'
import BookDemo from './views/BookDemo'
import NotFound from './views/NotFound'

const routes: { path: string; element: React.ReactNode }[] = [
  { path: '/', element: <Home /> },
  { path: '/courses', element: <Courses /> },
  { path: '/courses/:slug', element: <CourseDetail /> },
  { path: '/schools', element: <Schools /> },
  { path: '/schools/implementation', element: <SchoolsImplementation /> },
  { path: '/schools/pricing', element: <SchoolsPricing /> },
  { path: '/teachers', element: <Teachers /> },
  { path: '/teachers/tools', element: <TeachersTools /> },
  { path: '/students', element: <Students /> },

  { path: '/students/certificates', element: <StudentsCertificates /> },
  { path: '/about', element: <About /> },
  { path: '/about/team', element: <AboutTeam /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/book-demo', element: <BookDemo /> },
]

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX, transformOrigin: '0%' }}
    />
  )
}

function RouteOutlet() {
  const { path } = useRouter()
  useScrollToTopOnNavigate()

  const match = routes.find(r => matchPath(r.path, path) !== null)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {match ? match.element : <NotFound />}
      </motion.div>
    </AnimatePresence>
  )
}

function Shell() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main>
        <RouteOutlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  )
}
