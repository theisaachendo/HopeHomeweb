import { Link, useParams } from 'react-router-dom'
import { InspectorAvatar } from '@/components/InspectorAvatar'
import { ScheduleButton } from '@/components/ScheduleButton'
import { Seo } from '@/components/Seo'
import { site } from '@/config/site'
import { getInspectorBySlug } from '@/data/inspectors'
import { NotFound } from '@/pages/NotFound'

export function InspectorProfile() {
  const { slug } = useParams()
  const inspector = getInspectorBySlug(slug)

  if (!inspector) {
    return <NotFound />
  }

  const title = `${inspector.fullName} | Home inspector`

  return (
    <>
      <Seo
        title={title}
        description={`${inspector.fullName} — ${inspector.certifications.slice(0, 2).join(', ')}. Hope Home Inspections, Southwest Florida.`}
      />

      <section className="border-b border-brand-900/10 bg-brand-950 py-10 text-white sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="text-xs font-medium text-brand-100/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/about/meet-the-team" className="hover:text-white">
                  Meet the team
                </Link>
              </li>
              <li aria-hidden className="text-brand-100/40">
                /
              </li>
              <li className="text-brand-100/90">{inspector.firstName}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col items-center text-center lg:sticky lg:top-28">
            <InspectorAvatar inspector={inspector} size="profile" />
            <h1 className="font-display mt-8 text-3xl font-bold uppercase tracking-[0.1em] text-[#1e4a7a] sm:text-4xl">
              {inspector.firstName}
            </h1>
            <p className="mt-2 text-sm font-medium text-brand-800/70">Hope Home Inspections</p>
            {inspector.cardSubtitle ? (
              <p className="mt-2 text-sm italic text-brand-800/65">{inspector.cardSubtitle}</p>
            ) : null}
            {inspector.serviceAreas?.length ? (
              <p className="mt-4 max-w-xs text-sm italic leading-relaxed text-brand-800/75">
                {inspector.serviceAreas.join(' · ')}
              </p>
            ) : null}
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-950">Licenses & certifications</h2>
            <ul className="mt-4 space-y-2 border-l-2 border-accent-500/60 pl-5 text-sm leading-relaxed text-brand-800/95">
              {inspector.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-brand-800/95">
              {inspector.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {inspector.extendedBio?.length ? (
              <div className="mt-10 space-y-5 border-t border-brand-900/10 pt-10 text-base leading-relaxed text-brand-800/95">
                {inspector.extendedBio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : null}

            <div className="mt-12 flex flex-wrap gap-4">
              <ScheduleButton className="!bg-brand-950 !text-white hover:!bg-brand-900">
                Schedule an inspection
              </ScheduleButton>
              <a
                href={`tel:${site.mainPhoneTel}`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-brand-900/20 hover:bg-brand-50"
              >
                Call {site.mainPhone}
              </a>
            </div>

            <p className="mt-10 text-sm text-brand-800/75">
              <Link to="/about/meet-the-team" className="font-semibold text-brand-950 hover:underline">
                ← Back to home inspectors
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
