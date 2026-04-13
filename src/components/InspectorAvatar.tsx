import type { Inspector } from '@/data/inspectors'

type Props = {
  inspector: Inspector
  size: 'card' | 'profile'
  className?: string
}

/**
 * Headshot when `photoUrl` is set; otherwise initials placeholder (e.g. photo pending).
 */
export function InspectorAvatar({ inspector, size, className = '' }: Props) {
  const { photoUrl, photoAlt, firstName } = inspector

  const card =
    'h-28 w-28 rounded-full shadow-lg ring-4 ring-white sm:h-32 sm:w-32 text-3xl sm:text-4xl'
  const profile =
    'h-56 w-56 rounded-full shadow-xl ring-4 ring-brand-100 sm:h-64 sm:w-64 text-5xl sm:text-6xl'

  if (!photoUrl) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200 font-display font-bold uppercase tracking-wider text-[#1e4a7a] ${size === 'card' ? card : profile} ${className}`}
        role="img"
        aria-label={photoAlt || `${firstName} — photo coming soon`}
      >
        {firstName.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={photoUrl}
      alt={photoAlt}
      width={size === 'card' ? 128 : 280}
      height={size === 'card' ? 128 : 280}
      loading={size === 'profile' ? 'eager' : 'lazy'}
      decoding="async"
      className={`object-cover ${size === 'card' ? card : profile} ${className}`}
    />
  )
}
