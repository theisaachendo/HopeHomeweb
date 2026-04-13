import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { marketingPhotos } from '@/config/marketingPhotos'
import { site } from '@/config/site'

const topics = [
  {
    title: 'Buyer & seller guides',
    body: 'Learn what a home inspection covers, what infrared can reveal, and how to read your report — written in plain language, not contractor jargon.',
  },
  {
    title: 'Inspection checklists',
    body: 'Printable-style checklists to help you prepare for inspection day and track questions for your inspector.',
  },
  {
    title: 'FAQs',
    body: 'Answers to common questions about timing, attendance, specialty testing, and how scheduling works with Spectora.',
  },
  {
    title: 'Sample reports & videos',
    body: 'See the level of detail we deliver — photos, summaries, and organized findings — so you know what to expect before you book.',
  },
]

export function Resources() {
  return (
    <>
      <Seo
        title="Resources"
        description="Helpful resources from Hope Home Inspections — checklists, FAQs, sample reports, and educational content for buyers and agents."
      />

      <section className="border-b border-brand-900/10 bg-brand-950 pb-0 text-white sm:pb-0">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">Learn</p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Resources</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100/85">
              Helpful guides for buyers, sellers, and agents — plus quick answers when you are trying to
              coordinate inspections, specialty testing, and closing timelines.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 lg:max-h-72">
            <img
              src={marketingPhotos.resourcesHero.src}
              alt={marketingPhotos.resourcesHero.alt}
              className="h-full max-h-56 w-full object-cover sm:max-h-none lg:aspect-[4/3] lg:max-h-72"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-brand-900/10 bg-white p-8 shadow-sm shadow-brand-900/5"
            >
              <h2 className="font-display text-xl font-semibold text-brand-950">{t.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-800/90">{t.body}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-brand-800/50">
                Full library — coming with CMS migration
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-100/70 p-8 sm:p-10">
          <h2 className="font-display text-xl font-semibold text-brand-950">Need something now?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-800/90">
            We are consolidating PDFs and blog posts from the previous website. Until those pages are
            live, our office can email checklists, answer FAQs, and point you to sample report examples.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`tel:${site.mainPhoneTel}`}
              className="inline-flex rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900"
            >
              Call {site.mainPhone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-brand-900/20 hover:bg-white"
            >
              Contact form
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-brand-900/20 hover:bg-white"
            >
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
