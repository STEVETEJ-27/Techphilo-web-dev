"use client";

import { useState, FormEvent } from 'react'
import { Mail, Instagram, Youtube, Send, MapPin, CalendarCheck, ArrowRight, Loader2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Link } from '../router'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      school: (form.elements.namedItem('school') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/send-contact', {
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
        eyebrow="Contact"
        icon={Mail}
        title="Let's Build"
        highlight="Future-Ready, Together."
        description="Questions about the program, a partnership, or just want to say hello? Reach out — we typically respond within one business day."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]}
      />

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__form-col">
            <Link to="/book-demo" className="contact__divert">
              <span className="contact__divert-icon" aria-hidden="true"><CalendarCheck size={18} /></span>
              <span className="contact__divert-copy">
                <strong>Want to see the programme first?</strong>
                <span className="text-sm text-muted">Book a 30-minute walkthrough for your school instead.</span>
              </span>
              <ArrowRight size={16} className="contact__divert-arrow" />
            </Link>

            <div className="contact__form-wrap card">
              {sent ? (
                <div className="contact__success">
                  <Send size={28} style={{ color: 'var(--accent)' }} />
                  <h3 className="display-sm">Message sent</h3>
                  <p className="text-sm text-muted">Thanks for reaching out — our team will get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact__form"
                >
                  <div className="contact__field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="you@school.edu" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="school">School / Organisation</label>
                    <input id="school" name="school" type="text" placeholder="Optional" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Tell us a bit about what you're looking for" />
                  </div>
                  {error && (
                    <p style={{ fontSize: '0.84rem', color: '#A9786B', background: 'rgba(169,120,107,0.08)', border: '1px solid rgba(169,120,107,0.22)', borderRadius: '8px', padding: '0.65rem 1rem', margin: 0 }}>
                      {error}
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.75 : 1 }} disabled={loading}>
                    {loading ? (
                      <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="contact__info">
            <div className="card contact__info-card">
              <Mail size={20} style={{ color: 'var(--accent)' }} />
              <div>
                <h4>Email</h4>
                <a href="mailto:techphilo.tp@gmail.com">techphilo.tp@gmail.com</a>
              </div>
            </div>
            <div className="card contact__info-card">
              <Instagram size={20} style={{ color: 'var(--accent)' }} />
              <div>
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/techphilo.tp" target="_blank" rel="noopener noreferrer">@techphilo.tp</a>
              </div>
            </div>
            <div className="card contact__info-card">
              <Youtube size={20} style={{ color: 'var(--accent)' }} />
              <div>
                <h4>YouTube</h4>
                <a href="https://youtube.com/@itstechphilo-tp" target="_blank" rel="noopener noreferrer">@itstechphilo-tp</a>
              </div>
            </div>
            <div className="card contact__info-card">
              <MapPin size={20} style={{ color: 'var(--accent)' }} />
              <div>
                <h4>Working With Schools</h4>
                <span className="text-sm text-muted">Partnering with schools across India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
