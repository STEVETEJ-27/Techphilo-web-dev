import { useState } from 'react'
import { CalendarCheck, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import './Contact.css'
import './BookDemo.css'

export default function BookDemo() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        icon={CalendarCheck}
        title="See TechPhilo"
        highlight="In Action."
        description="Tell us a little about your school and we'll set up a walkthrough of the program, the Explorer Passport, and how implementation would work for you."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book Demo', href: '/book-demo' }]}
      />
      <section className="section">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card book-demo__card">
            {sent ? (
              <div className="contact__success">
                <Send size={28} style={{ color: 'var(--gold)' }} />
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
                  <input id="bd-role" type="text" required placeholder="Principal, Coordinator, Teacher..." />
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
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Request Demo <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
