import { useState } from 'react'
import { CalendarCheck, Send, ArrowLeft } from 'lucide-react'
import { Link } from '../router'
import './Contact.css'
import './BookDemo.css'

export default function BookDemo() {
  const [sent, setSent] = useState(false)

  return (
    <div className="book-demo__wrapper">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '6rem', paddingBottom: '2rem' }}>
        <div className="card book-demo__compact-card">
          <Link to="/" className="book-demo__back">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <div className="book-demo__header">
            <div className="label-tag" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center' }}>
              <CalendarCheck size={14} style={{ marginRight: 6 }}/> Book a Demo
            </div>
            <h1 className="display-sm">See TechPhilo <span className="gradient-text">In Action.</span></h1>
            <p className="text-sm text-muted" style={{ marginTop: '0.75rem' }}>
              Tell us a little about your school and we'll set up a walkthrough of the program, the Explorer Passport, and how implementation would work for you.
            </p>
          </div>

          {sent ? (
            <div className="contact__success">
              <Send size={28} style={{ color: 'var(--blue)' }} />
              <h3 className="display-sm">Request received</h3>
              <p className="text-sm text-muted">We'll be in touch within one business day to schedule your demo.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <div className="contact__field">
                <label htmlFor="bd-name">Full name</label>
                <input id="bd-name" type="text" required placeholder="Your name" />
              </div>
              <div className="contact__field">
                <label htmlFor="bd-role">Role</label>
                <input id="bd-role" type="text" required placeholder="Principal, Coordinator..." />
              </div>
              <div className="contact__field">
                <label htmlFor="bd-school">School Name</label>
                <input id="bd-school" type="text" required placeholder="Your school" />
              </div>
              <div className="contact__field">
                <label htmlFor="bd-email">Email</label>
                <input id="bd-email" type="email" required placeholder="you@school.edu" />
              </div>
              <div className="contact__field">
                <label htmlFor="bd-size">Number of Students</label>
                <input id="bd-size" type="text" placeholder="Approximate" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                Request Demo <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
