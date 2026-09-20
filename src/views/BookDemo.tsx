"use client";

import { useState, FormEvent } from 'react'
import { CalendarCheck, Check, Send, ArrowRight, Clock, ShieldCheck, Loader2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Link } from '../router'
import './Contact.css'
import './BookDemo.css'

const COVERED = [
  'A walkthrough of the full programme, pillar by pillar',
  'The Explorer Passport and how student progress is tracked',
  'A rollout plan mapped to your academic calendar',
  'Indicative pricing for a school of your size',
]

const STEPS = [
  { title: 'Share your details', desc: 'The short form opposite — about a minute.' },
  { title: 'We schedule a call', desc: 'A 30-minute session with an implementation lead, at a time that suits you.' },
  { title: 'You get a tailored proposal', desc: 'Scope, timeline and pricing built around your school — no obligation.' },
]

const ROLES = [
  'Principal', 'Vice Principal', 'Academic Coordinator',
  'Head of Department', 'Teacher', 'Management / Trustee', 'Other',
]

const SIZES = [
  'Under 300 students', '300 – 800 students',
  '800 – 1,500 students', 'More than 1,500 students',
]

export default function BookDemo() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name:   (form.elements.namedItem('name')   as HTMLInputElement).value,
      role:   (form.elements.namedItem('role')   as HTMLSelectElement).value,
      school: (form.elements.namedItem('school') as HTMLInputElement).value,
      email:  (form.elements.namedItem('email')  as HTMLInputElement).value,
      phone:  (form.elements.namedItem('phone')  as HTMLInputElement).value,
      size:   (form.elements.namedItem('size')   as HTMLSelectElement).value,
      focus:  (form.elements.namedItem('focus')  as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/send-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Something went wrong. Please try again.')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        icon={CalendarCheck}
        title="See TechPhilo"
        highlight="in action."
        description="A 30-minute walkthrough of the programme, the Explorer Passport, and exactly how implementation would work at your school."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book a Demo', href: '/book-demo' }]}
      />

      <section className="section book-demo">
        <div className="container book-demo__grid">
          <aside className="book-demo__aside">
            <div className="book-demo__block">
              <h2 className="book-demo__block-title">What the demo covers</h2>
              <ul className="book-demo__list">
                {COVERED.map(item => (
                  <li key={item}>
                    <span className="book-demo__check" aria-hidden="true"><Check size={12} strokeWidth={3} /></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="book-demo__block">
              <h2 className="book-demo__block-title">How it works</h2>
              <ol className="book-demo__steps">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="book-demo__step">
                    <span className="book-demo__step-num" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h3 className="book-demo__step-title">{step.title}</h3>
                      <p className="text-sm text-muted">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* The two enquiry paths are genuinely different — say so, and
                send general questions to the right place. */}
            <div className="book-demo__switch">
              <p className="text-sm">
                <strong>Not looking for a demo?</strong> If you have a general question,
                a partnership idea, or you&apos;re a student or parent, the contact page
                is the faster route.
              </p>
              <Link to="/contact" className="book-demo__switch-link">
                General enquiries <ArrowRight size={14} />
              </Link>
            </div>
          </aside>

          <div className="book-demo__form-card">
            {sent ? (
              <div className="book-demo__success">
                <span className="book-demo__success-icon" aria-hidden="true">
                  <Check size={26} strokeWidth={2.5} />
                </span>
                <h2 className="display-sm">Request received</h2>
                <p className="text-sm text-muted">
                  Thanks — an implementation lead will email you within one business day
                  to arrange a time. Nothing else is needed from you right now.
                </p>
                <Link to="/" className="btn btn-outline">Back to home</Link>
              </div>
            ) : (
              <>
                <div className="book-demo__form-head">
                  <h2 className="display-sm">Request your demo</h2>
                  <p className="text-sm text-muted">Takes about a minute. All fields marked * are required.</p>
                </div>

                <form className="contact__form book-demo__form" onSubmit={handleSubmit}>
                  <div className="book-demo__row">
                    <div className="contact__field">
                      <label htmlFor="bd-name">Full name *</label>
                      <input id="bd-name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="bd-role">Your role *</label>
                      <select id="bd-role" name="role" required defaultValue="">
                        <option value="" disabled>Select a role</option>
                        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="bd-school">School name *</label>
                    <input id="bd-school" name="school" type="text" required placeholder="Your school" />
                  </div>

                  <div className="book-demo__row">
                    <div className="contact__field">
                      <label htmlFor="bd-email">Work email *</label>
                      <input id="bd-email" name="email" type="email" required autoComplete="email" placeholder="you@school.edu" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="bd-phone">Phone</label>
                      <input id="bd-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="bd-size">Number of students *</label>
                    <select id="bd-size" name="size" required defaultValue="">
                      <option value="" disabled>Select a range</option>
                      {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="bd-focus">Anything specific you&apos;d like covered?</label>
                    <textarea id="bd-focus" name="focus" rows={3} placeholder="Optional — e.g. NEP alignment, teacher training, assessment" />
                  </div>

                  {error && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '0.5rem' }}>
                      <p style={{ fontSize: '0.84rem', color: 'var(--hue-terracotta)', background: 'rgba(192,96,63,0.08)', border: '1px solid rgba(192,96,63,0.22)', borderRadius: '8px', padding: '0.65rem 1rem', margin: 0 }}>
                        {error}
                      </p>
                      <a
                        href="mailto:techphilo.tp@gmail.com?subject=Book%20Demo%20Request"
                        className="btn btn-outline btn-sm"
                        style={{ justifyContent: 'center', width: '100%' }}
                      >
                        Or Email Us Directly (techphilo.tp@gmail.com)
                      </a>
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary book-demo__submit" disabled={loading} style={{ opacity: loading ? 0.75 : 1 }}>
                    {loading ? (
                      <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
                    ) : (
                      <>Request Demo <Send size={16} /></>
                    )}
                  </button>

                  <ul className="book-demo__assurances">
                    <li><Clock size={13} /> Reply within one business day</li>
                    <li><ShieldCheck size={13} /> No obligation, no payment details</li>
                  </ul>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
