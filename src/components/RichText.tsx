import type { ReactNode } from 'react'

/** Renders `**bold**` segments as <strong>; everything else as plain text. */
export function RichText({
  text,
  className,
  strongClassName = 'font-semibold',
}: {
  text: string
  className?: string
  strongClassName?: string
}) {
  const segments = text.split(/\*\*(.*?)\*\*/)
  const nodes: ReactNode[] = []
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === undefined) continue
    if (i % 2 === 1) {
      nodes.push(
        <strong key={i} className={strongClassName}>
          {segment}
        </strong>,
      )
    } else if (segment) {
      nodes.push(segment)
    }
  }
  return <span className={className}>{nodes}</span>
}
