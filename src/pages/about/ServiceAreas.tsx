import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { serviceAreas } from '@/data/aboutNav'

export function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas"
        description="Hope Home Inspections serves Sarasota, Bradenton, Lakewood Ranch, Venice, Tampa, St. Petersburg, and communities across Southwest Florida."
      />
      <section className="border-b border-brand-900/10 bg-brand-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">About us</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Service areas</h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100/85">
            Licensed and insured coverage across the west coast of Florida — with regional phone support in
            Sarasota/Manatee, Pinellas, Hillsborough, and Charlotte counties.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              to={`/about/service-areas/${a.slug}`}
              className="group rounded-2xl border border-brand-900/10 bg-white p-8 shadow-sm transition hover:border-accent-500/40 hover:shadow-md"
            >
              <h2 className="font-display text-xl font-semibold text-brand-950 group-hover:text-brand-900">
                {a.label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-800/90">{a.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-700 group-hover:text-accent-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
