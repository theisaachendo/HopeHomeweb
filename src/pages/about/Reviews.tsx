import { Seo } from '@/components/Seo'
import { site } from '@/config/site'

const highlights = [
  'Thousands of inspections completed across Southwest Florida',
  'Five-star Google reputation built on real client and agent feedback',
  'Fast, photo-rich reports — typically within 24 hours or by the next business day',
]

export function Reviews() {
  return (
    <>
      <Seo
        title="Reviews & Testimonials"
        description="Read why buyers, sellers, and agents trust Hope Home Inspections — reviews and testimonials from Southwest Florida."
      />
      <section className="border-b border-brand-900/10 bg-brand-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">About us</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Reviews & testimonials
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-lg leading-relaxed text-brand-800/95">
          Our reputation is built one inspection at a time — clear communication, thorough documentation, and
          respect for your timeline. Agents and homeowners consistently highlight our professionalism, fast
          reporting, and willingness to explain what matters most.
        </p>
        <ul className="mt-10 space-y-4">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-800/95">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-2xl border border-brand-900/10 bg-brand-50/80 p-8 text-center">
          <p className="text-sm font-medium text-brand-800">
            We are embedding live Google reviews on this page soon. For now, find recent feedback on Google
            and ask our office for references — we are happy to share them.
          </p>
          <a
            href="https://www.google.com/search?q=Hope+Home+Inspections+Sarasota+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900"
          >
            Search Google reviews
          </a>
        </div>
        <p className="mt-10 text-center text-sm text-brand-800/75">
          Questions? Call{' '}
          <a href={`tel:${site.mainPhoneTel}`} className="font-semibold text-brand-950 hover:underline">
            {site.mainPhone}
          </a>
        </p>
      </section>
    </>
  )
}
