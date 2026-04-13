import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { ScheduleButton } from '@/components/ScheduleButton'
import { marketingPhotos } from '@/config/marketingPhotos'
import { site } from '@/config/site'
import { aboutLinks } from '@/data/aboutNav'

const values = [
  {
    title: 'Clear communication',
    body: 'We train inspectors to explain findings in everyday language — not alarmist jargon — so you can make decisions with confidence.',
  },
  {
    title: 'Modern tools & reporting',
    body: 'High-resolution photos, organized reports, and a complimentary infrared scan on standard home inspections help you see what matters.',
  },
  {
    title: 'Full-time office support',
    body: 'Our friendly office staff is available seven days a week to schedule inspections, answer questions, and help when timelines get tight.',
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Family-owned Hope Home Inspections — licensed inspectors, full-time office support, and a commitment to Southwest Florida homeowners and agents."
      />

      <section className="border-b border-brand-900/10 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-5xl">
              Local experts, full-time support
            </h1>
            <div className="mt-8 max-w-xl space-y-6 text-lg leading-relaxed text-brand-800/90">
              <p>
                Hope Home Inspections is a <strong>family-owned, multi-inspector</strong> company serving
                Sarasota, Bradenton, Lakewood Ranch, Venice, North Port, Tampa, St. Petersburg, Clearwater,
                and surrounding communities across Southwest Florida.
              </p>
              <p>
                We are known for detail-oriented inspections, fast reporting, and a team that treats agents
                and clients like neighbors — because we live and work here too.
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <img
              src={marketingPhotos.aboutTeam.src}
              alt={marketingPhotos.aboutTeam.alt}
              className="aspect-[4/3] w-full object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-brand-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-800/50">Explore</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {aboutLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full bg-brand-950 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-brand-800 transition hover:bg-brand-900"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/about/service-areas"
              className="rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-950 ring-1 ring-brand-900/10 transition hover:bg-white"
            >
              Service areas
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-brand-950">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-800/90">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold text-brand-950">Why agents & buyers choose us</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-brand-800/95">
              <li>
                <strong className="text-brand-950">Professional standards:</strong> licensed & certified
                inspectors, uniformed team, and InterNACHI membership.
              </li>
              <li>
                <strong className="text-brand-950">Fast reporting:</strong> detailed digital reports with
                photos — typically within 24 hours or by the next business day.
              </li>
              <li>
                <strong className="text-brand-950">Full-time office:</strong> friendly staff available{' '}
                <strong>seven days a week</strong> to help schedule and answer questions.
              </li>
              <li>
                <strong className="text-brand-950">Real estate friendly:</strong> registered partners with
                RASM (with Supra access), Venice Area Board of REALTORS®, and PRO (Pinellas Realtor
                Organization), among others.
              </li>
              <li>
                <strong className="text-brand-950">Wide service area:</strong> we cover a large portion of
                the west coast of Florida —{' '}
                {site.serviceAreas.slice(0, 6).join(', ')}, and more. See{' '}
                <Link to="/services" className="font-semibold text-brand-950 underline underline-offset-2">
                  inspection services
                </Link>{' '}
                for details.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-950 p-8 text-white ring-1 ring-white/10 sm:p-10">
            <h2 className="font-display text-xl font-semibold">Hope gives back</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/85">
              We&apos;re proud to support charitable events and organizations across the communities we
              serve. When you work with Hope Home Inspections, you&apos;re supporting a team that invests
              locally — not just another franchise from out of town.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/85">
              Payment is easy: major credit cards, debit cards, cash, checks, and ACH/eChecks — pay online
              or on site at the time of inspection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ScheduleButton>Schedule an inspection</ScheduleButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/10"
              >
                Contact the office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
