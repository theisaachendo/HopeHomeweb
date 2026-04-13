import { Seo } from '@/components/Seo'
import { site } from '@/config/site'

const roles = [
  'Florida-licensed home inspectors with strong written and verbal communication skills',
  'Professionals who are punctual, coachable, and comfortable with digital reporting tools',
  'Team players who understand real estate timelines and treat clients with respect',
]

export function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Careers at Hope Home Inspections — join our Southwest Florida team."
      />

      <section className="border-b border-brand-900/10 bg-brand-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">Join us</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Careers</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100/85">
            We are a growing, family-owned company with multiple inspectors and full-time office staff.
            If you value professionalism and clear communication, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-2xl font-semibold text-brand-950">What we look for</h2>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-brand-800/95">
          {roles.map((r) => (
            <li key={r} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
              {r}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-14 text-2xl font-semibold text-brand-950">How to apply</h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/90">
          Send your resume and license credentials to the main office, or call to ask about current
          openings and onboarding. We will keep your information confidential and respond when we have a
          match.
        </p>
        <p className="mt-8 text-base">
          <a href={`tel:${site.mainPhoneTel}`} className="font-semibold text-brand-950 hover:underline">
            Call {site.mainPhone}
          </a>
          <span className="text-brand-800/70"> — Sarasota / Manatee main office</span>
        </p>
      </section>
    </>
  )
}
