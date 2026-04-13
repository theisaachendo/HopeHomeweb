import { Link } from 'react-router-dom'
import { InspectorAvatar } from '@/components/InspectorAvatar'
import type { Inspector } from '@/data/inspectors'

type Props = {
  inspector: Inspector
}

export function InspectorCard({ inspector }: Props) {
  const { slug, firstName, certifications, serviceAreas, cardSubtitle } = inspector

  return (
    <Link
      to={`/about/meet-the-team/${slug}`}
      className="group relative flex flex-col rounded-2xl border border-brand-900/10 bg-white px-5 pb-8 pt-16 text-center shadow-sm shadow-brand-900/5 transition hover:border-accent-500/35 hover:shadow-md"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <InspectorAvatar inspector={inspector} size="card" />
      </div>

      <h2 className="font-display text-xl font-bold uppercase tracking-[0.12em] text-[#1e4a7a] transition group-hover:text-[#163a63] sm:text-2xl">
        {firstName}
      </h2>
      {cardSubtitle ? (
        <p className="mt-2 text-xs font-medium leading-snug text-brand-800/65">{cardSubtitle}</p>
      ) : null}

      <ul className="mt-4 space-y-1.5 text-xs leading-snug text-brand-800/85 sm:text-sm">
        {certifications.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {serviceAreas?.length ? (
        <p className="mt-5 text-xs italic leading-relaxed text-brand-800/70">
          {serviceAreas.join(' · ')}
        </p>
      ) : null}

      <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent-700 opacity-0 transition group-hover:opacity-100">
        View profile
      </span>
    </Link>
  )
}
