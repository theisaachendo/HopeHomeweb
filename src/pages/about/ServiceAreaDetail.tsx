import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { ScheduleButton } from '@/components/ScheduleButton'
import { site } from '@/config/site'
import { serviceAreas } from '@/data/aboutNav'
import { NotFound } from '@/pages/NotFound'

export function ServiceAreaDetail() {
  const { slug } = useParams()
  const area = serviceAreas.find((a) => a.slug === slug)

  if (!area) {
    return <NotFound />
  }

  return (
    <>
      <Seo
        title={`${area.label} | Service area`}
        description={`${area.headline} — Hope Home Inspections, licensed & insured in Southwest Florida.`}
      />
      <section className="border-b border-brand-900/10 bg-brand-950 py-12 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="text-xs font-medium text-brand-100/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/about/service-areas" className="hover:text-white">
                  Service areas
                </Link>
              </li>
              <li aria-hidden className="text-brand-100/40">
                /
              </li>
              <li className="text-brand-100/90">{area.label}</li>
            </ol>
          </nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">Service area</p>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {area.headline}
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="space-y-6 text-base leading-relaxed text-brand-800/95">
          <p>{area.blurb}</p>
          <p>
            We offer the full Hope Home Inspections lineup in this region — residential inspections, new
            construction programs, mobile/manufactured homes, wind mitigation & 4-point reports, and specialty
            environmental testing when you need it.
          </p>
          <p>
            Prefer to book online? Use our Spectora scheduler, or call the office for the fastest help with
            short contingency windows.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <ScheduleButton className="!bg-brand-950 !text-white hover:!bg-brand-900">Schedule online</ScheduleButton>
          <a
            href={`tel:${site.mainPhoneTel}`}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-brand-900/20 hover:bg-brand-50"
          >
            Call {site.mainPhone}
          </a>
        </div>
        <p className="mt-12 text-sm text-brand-800/75">
          <Link to="/about/service-areas" className="font-semibold text-brand-950 hover:underline">
            ← All service areas
          </Link>
        </p>
      </section>
    </>
  )
}
