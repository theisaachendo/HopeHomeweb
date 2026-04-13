import { Link } from 'react-router-dom'
import { getHeroPhotoForSlug } from '@/config/serviceHeroPhotos'
import { Seo } from '@/components/Seo'
import { ScheduleButton } from '@/components/ScheduleButton'
import { site } from '@/config/site'

const highlights = [
  'Thousands of inspections completed',
  'Licensed & certified inspectors',
  'FREE infrared scan with every home inspection ($195 value)',
  'Reports in 24 hours or by the next business day',
]

const services: { title: string; body: string; slug: string }[] = [
  {
    title: 'Home inspection',
    body: 'Condos, villas, townhomes, and single-family — full visual assessment of major systems.',
    slug: 'home-inspection',
  },
  {
    title: 'Mobile & manufactured',
    body: 'Specialized knowledge for factory-built and mobile home construction.',
    slug: 'mobile-and-manufactured-homes',
  },
  {
    title: 'New construction',
    body: 'Pre-drywall, final walk-through, and builder warranty programs.',
    slug: 'pre-drywall-inspection',
  },
  {
    title: 'Wind & insurance',
    body: 'Wind mitigation and 4-point reports for carriers and peace of mind.',
    slug: 'wind-mitigation-4-points',
  },
  {
    title: 'Environmental add-ons',
    body: 'Mold assessment, air sampling, radon, sewer scope, water quality, and more.',
    slug: 'mold-air-quality-swab-sampling',
  },
  {
    title: 'Commercial',
    body: 'Commercial building inspections and Phase I environmental assessments.',
    slug: 'commercial-building-inspections',
  },
]

const faqs = [
  {
    q: 'How long does a home inspection take?',
    a: 'Most inspections take 2–3 hours depending on size and complexity. Larger homes may take longer.',
  },
  {
    q: 'What does an inspection include?',
    a: 'We review the roof, structure, electrical, HVAC, plumbing, foundation, attic, and appliances — plus a complimentary infrared scan.',
  },
  {
    q: 'Can I attend the inspection?',
    a: 'Yes. We encourage you to attend and ask questions. If you cannot attend, your inspector can call to review major findings.',
  },
  {
    q: 'When will I get my report?',
    a: 'Reports are typically delivered within 24 hours or by the next business day, with photos and clear explanations.',
  },
]

export function Home() {
  return (
    <>
      <Seo title="Hope Home Inspections" description={site.description} />

      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(201,162,39,0.35), transparent), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(56,189,248,0.12), transparent)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
              Southwest Florida
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              We inspect homes{' '}
              <span className="bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
                top to bottom
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/85">
              Because everyone deserves to know exactly what they are buying. Clear reports, modern
              tools, and inspectors who explain findings in everyday language.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ScheduleButton>Schedule a home inspection</ScheduleButton>
              <a
                href={`tel:${site.mainPhoneTel}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/10"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.1.4 2.3.6 3.6.6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C9.9 21.2 2.8 14.1 2.8 5.2 2.8 4.5 3.3 4 4 4h3.5c.7 0 1.2.5 1.2 1.2 0 1.3.2 2.5.6 3.6.1.4 0 .9-.2 1.2l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Call {site.mainPhone}
              </a>
            </div>
            <dl className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wider text-brand-100/60">Google reviews</dt>
                <dd className="font-display mt-1 text-2xl font-semibold">1,100+</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wider text-brand-100/60">Service area</dt>
                <dd className="mt-1 text-sm font-medium leading-snug">West coast of Florida</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wider text-brand-100/60">Office support</dt>
                <dd className="mt-1 text-sm font-medium">7 days a week</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-800 ring-1 ring-white/10 shadow-2xl shadow-black/40 sm:aspect-[5/6]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Florida home exterior at dusk"
                className="h-full w-full object-cover"
                width={800}
                height={1000}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl bg-white p-5 text-brand-900 shadow-xl ring-1 ring-black/5 sm:-left-8">
              <p className="text-sm font-semibold text-brand-800">Family-owned & local</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-700/90">
                Full-time office staff, multiple inspectors, and the professionalism agents expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
            Nobody wants surprise repair bills
          </h2>
          <p className="mt-4 text-lg text-brand-800/90">
            A thorough inspection helps you understand the home before you commit — so you can move
            forward with confidence.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-brand-900/10 bg-white p-5 shadow-sm shadow-brand-900/5"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-700"
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium leading-relaxed text-brand-900">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-brand-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950">
                Inspection services
              </h2>
              <p className="mt-3 max-w-xl text-brand-800/90">
                From standard purchases to new construction and specialty testing — one team, one
                standard of care.
              </p>
            </div>
            <ScheduleButton variant="secondary" className="!bg-brand-950 !text-white !ring-brand-800 hover:!bg-brand-900">
              Book online
            </ScheduleButton>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const photo = getHeroPhotoForSlug(s.slug)
              return (
                <Link
                  key={s.title}
                  to={`/services/${s.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-900/10 bg-brand-50/50 transition hover:border-accent-500/40 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-200/30">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-brand-950 group-hover:text-brand-800">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-800/85">{s.body}</p>
                    <span className="mt-4 text-sm font-semibold text-accent-700 group-hover:text-accent-600">
                      Learn more →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950">
              It&apos;s as simple as…
            </h2>
            <ol className="mt-8 space-y-6">
              {['Tell us about the home', 'Attend your inspection', 'Review your clear, photo-rich report'].map(
                (step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-brand-950">{step}</p>
                      {i === 2 ? (
                        <p className="mt-1 text-sm text-brand-800/80">
                          Delivered fast — typically within 24 hours or the next business day.
                        </p>
                      ) : null}
                    </div>
                  </li>
                ),
              )}
            </ol>
          </div>
          <div className="rounded-3xl bg-brand-950 p-8 text-white ring-1 ring-white/10 sm:p-10">
            <h3 className="font-display text-2xl font-semibold">Service areas</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
              Proudly serving buyers and agents across Southwest Florida.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-50 ring-1 ring-white/10"
                >
                  {city}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm text-brand-100/75">
                Prefer to book online? Our scheduling stays on{' '}
                <strong className="text-white">Spectora</strong> — fast, transparent, and mobile-friendly.
              </p>
              <div className="mt-6">
                <ScheduleButton className="w-full justify-center sm:w-auto">Open scheduling</ScheduleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-100/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-brand-950">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-brand-900/10 bg-white p-5 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-medium text-brand-950 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-accent-600 transition group-open:rotate-180" aria-hidden>
                      ▼
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-brand-800/90">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900 px-6 py-14 text-center text-white sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(201,162,39,0.4), transparent 50%)',
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready for peace of mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100/85">
              Schedule your inspection online or call our office — we&apos;re here seven days a week.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ScheduleButton>Schedule a home inspection</ScheduleButton>
              <a
                href={`tel:${site.mainPhoneTel}`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/10"
              >
                Call {site.mainPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
