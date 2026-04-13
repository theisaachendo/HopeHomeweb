import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { ScheduleButton } from '@/components/ScheduleButton'
import { marketingPhotos } from '@/config/marketingPhotos'
import { site } from '@/config/site'
import { servicesGroupedForNav } from '@/data/servicePages'

export function Services() {
  const groups = servicesGroupedForNav()

  return (
    <>
      <Seo
        title="Inspection Services"
        description="Home, new construction, mobile, commercial, and specialty environmental testing — Hope Home Inspections, Southwest Florida."
      />

      <section className="border-b border-brand-900/10 bg-brand-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">What we offer</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Inspection services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/85">
            One-stop scheduling for buyers, sellers, and agents — from standard purchases to specialty
            testing. Book online anytime through our{' '}
            <strong className="text-white">Spectora</strong> portal.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ScheduleButton>Schedule online</ScheduleButton>
            <a
              href={`tel:${site.mainPhoneTel}`}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-white/25 hover:bg-white/10"
            >
              Call {site.mainPhone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <figure className="-mt-4 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:-mt-8">
          <img
            src={marketingPhotos.servicesBanner.src}
            alt={marketingPhotos.servicesBanner.alt}
            className="aspect-[2.2/1] w-full object-cover sm:aspect-[2.5/1]"
            width={1600}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.category}
              className="rounded-3xl border border-brand-900/10 bg-white p-8 shadow-sm shadow-brand-900/5"
            >
              <h2 className="font-display text-xl font-semibold text-brand-950">{g.navLabel}</h2>
              <ul className="mt-6 space-y-2">
                {g.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/services/${item.slug}`}
                      className="group flex items-start gap-2 text-sm text-brand-800/95 hover:text-brand-950"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500 transition group-hover:bg-accent-400" aria-hidden />
                      <span className="font-medium underline decoration-transparent decoration-2 underline-offset-4 transition group-hover:decoration-brand-950/30">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-100/70 p-8 text-center sm:p-10">
          <p className="text-sm font-medium text-brand-800">
            Every standard home inspection includes a <strong>complimentary infrared scan</strong> to help
            spot hidden moisture and insulation concerns.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <ScheduleButton className="!bg-brand-950 !text-white hover:!bg-brand-900">Book now</ScheduleButton>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-brand-900/20 hover:bg-white"
            >
              Contact the office
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
