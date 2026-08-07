import { useState } from 'react'
import { Mail, Instagram, Youtube, Send, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

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
          <div className="contact__form-wrap card">
            {sent ? (
              <div className="contact__success">
                <Send size={28} style={{ color: 'var(--gold)' }} />
                <h3 className="display-sm">Message sent</h3>
                <p className="text-sm text-muted">Thanks for reaching out — our team will get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
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
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          <div className="contact__info">
            <div className="card contact__info-card">
              <Mail size={20} style={{ color: 'var(--gold)' }} />
              <div>
                <h4>Email</h4>
                <a href="mailto:itstechphilo@gmail.com">itstechphilo@gmail.com</a>
              </div>
            </div>
            <div className="card contact__info-card">
              <Instagram size={20} style={{ color: 'var(--gold)' }} />
              <div>
                <h4>Instagram</h4>
                <a href="https://instagram.com/itstechphilo" target="_blank" rel="noopener noreferrer">@itstechphilo</a>
              </div>
            </div>
            <div className="card contact__info-card">
              <Youtube size={20} style={{ color: 'var(--gold)' }} />
              <div>
                <h4>YouTube</h4>
                <a href="https://youtube.com/@itstechphilo" target="_blank" rel="noopener noreferrer">@itstechphilo</a>
              </div>
            </div>
            <div className="card contact__info-card">
              <MapPin size={20} style={{ color: 'var(--gold)' }} />
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
