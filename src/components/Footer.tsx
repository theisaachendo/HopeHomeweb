import { Link } from 'react-router-dom'
import { site } from '@/config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-brand-950 text-brand-100/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-100/80">
            {site.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <span className="block text-brand-100/60">{p.label}</span>
                <a href={`tel:${p.tel}`} className="font-medium text-white hover:text-accent-300">
                  {p.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Main office</p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-white hover:text-accent-300"
            >
              Email us
            </a>
            <span className="text-brand-100/40" aria-hidden>
              ·
            </span>
            <Link to="/contact" className="text-sm font-medium text-white hover:text-accent-300">
              Contact form
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-brand-100/50">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
