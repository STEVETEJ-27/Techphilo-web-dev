import { Compass, ArrowRight } from 'lucide-react'
import { Link } from '../router'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <Compass size={40} style={{ color: 'var(--gold)' }} />
        <h1 className="display-lg">Page Not Found</h1>
        <p className="text-md text-muted">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
