import type { ReactNode } from 'react'
import { scheduleUrl } from '@/config/site'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variants: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-accent-500 text-brand-950 shadow-lg shadow-accent-500/25 hover:bg-accent-400 focus-visible:ring-accent-300',
  secondary:
    'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 focus-visible:ring-white/40',
  ghost:
    'bg-transparent text-brand-100 ring-1 ring-brand-500 hover:bg-brand-800/80 focus-visible:ring-brand-400',
}

export function ScheduleButton({
  children,
  className = '',
  variant = 'primary',
}: Props) {
  return (
    <a
      href={scheduleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
