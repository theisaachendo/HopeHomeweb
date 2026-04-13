import { Link } from 'react-router-dom'
import type { OfficeMember } from '@/data/inspectors'

type Props = {
  member: OfficeMember
}

/** Office staff — no individual profile routes yet; CTA points to contact. */
export function OfficeTeamCard({ member }: Props) {
  const { firstName, fullName, title, photoUrl, photoAlt, bio, variant } = member
  const isFeatured = variant === 'featured'

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-brand-900/10 bg-white px-5 pb-8 pt-16 text-center shadow-sm shadow-brand-900/5 ${
        isFeatured ? 'sm:col-span-2 lg:col-span-2 mx-auto w-full max-w-3xl' : ''
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <img
          src={photoUrl}
          alt={photoAlt}
          width={128}
          height={128}
          loading="lazy"
          decoding="async"
          className="h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-32 sm:w-32"
        />
      </div>

      <h2 className="font-display text-base font-bold uppercase leading-snug tracking-[0.08em] text-[#1e4a7a] sm:text-lg">
        {fullName ? `${firstName} ${fullName}` : firstName}
      </h2>

      <p className="mt-4 text-sm leading-snug text-brand-800/90">{title}</p>

      {bio.map((p, i) => (
        <p
          key={i}
          className={`mt-4 leading-relaxed text-brand-800/80 ${isFeatured ? 'text-left text-sm sm:text-base' : 'text-xs'}`}
        >
          {p}
        </p>
      ))}

      <Link
        to="/contact"
        className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent-700 hover:text-accent-600"
      >
        Contact the office →
      </Link>
    </article>
  )
}
