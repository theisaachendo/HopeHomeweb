import { useState, type FormEvent } from 'react'
import { Seo } from '@/components/Seo'
import { ScheduleButton } from '@/components/ScheduleButton'
import { site } from '@/config/site'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Website inquiry from ${name || 'Hope Home visitor'}`)
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, '', message].join('\n'),
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Call Hope Home Inspections or send a message — main office in Sarasota, FL with regional phone lines for Pinellas, Hillsborough, and Charlotte."
      />

      <section className="border-b border-brand-900/10 bg-brand-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Contact us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100/85">
            Reach our full-time office staff — or book instantly online through Spectora.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-brand-950">Phone lines</h2>
          <ul className="mt-6 space-y-6">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-800/60">
                  {p.label}
                </p>
                <a
                  href={`tel:${p.tel}`}
                  className="mt-1 inline-block text-lg font-semibold text-brand-950 hover:text-accent-700"
                >
                  {p.value}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-800/70">Main office</h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-brand-800">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
          </div>

          <div className="mt-8">
            <ScheduleButton className="w-full justify-center sm:w-auto">Schedule online</ScheduleButton>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-brand-950">Send a message</h2>
          <p className="mt-2 text-sm text-brand-800/80">
            This opens your email app with your message pre-filled. For urgent scheduling, call or use
            online booking.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-brand-900/15 bg-white px-4 py-3 text-sm outline-none ring-brand-950/10 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-brand-900/15 bg-white px-4 py-3 text-sm outline-none ring-brand-950/10 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-900">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-1 w-full rounded-xl border border-brand-900/15 bg-white px-4 py-3 text-sm outline-none ring-brand-950/10 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-xl border border-brand-900/15 bg-white px-4 py-3 text-sm outline-none ring-brand-950/10 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-900 sm:w-auto"
            >
              Open email draft
            </button>
            {status === 'sent' ? (
              <p className="text-sm text-brand-800/80" role="status">
                If your mail app did not open, email us directly at{' '}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-950 underline">
                  {site.email}
                </a>
                .
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  )
}
