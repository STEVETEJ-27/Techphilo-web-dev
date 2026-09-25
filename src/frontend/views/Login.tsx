import { LogIn } from 'lucide-react'
import { Link } from '@/router'
import './Auth.css'

export default function Login() {
  return (
    <section className="section auth">
      <div className="container auth__container">
        <div className="card auth__card">
          <div className="auth__icon"><LogIn size={22} strokeWidth={1.7} /></div>
          <h1 className="display-md">Welcome back</h1>
          <p className="text-sm text-muted" style={{ marginBottom: '1.75rem' }}>Log in to your TechPhilo dashboard.</p>
          <form onSubmit={(e) => e.preventDefault()} className="auth__form">
            <div className="contact__field">
              <label htmlFor="login-email">Email</label>
              <input id="login-email" type="email" required placeholder="you@school.edu" />
            </div>
            <div className="contact__field">
              <label htmlFor="login-password">Password</label>
              <input id="login-password" type="password" required placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Log In
            </button>
          </form>
          <p className="text-sm text-muted auth__footer">
            New to TechPhilo? <Link to="/book-demo">Book a demo</Link> to get started.
          </p>
        </div>
      </div>
    </section>
  )
}
