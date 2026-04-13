import { Link, useParams } from 'react-router-dom'
import { RichText } from '@/components/RichText'
import { ScheduleButton } from '@/components/ScheduleButton'
import { Seo } from '@/components/Seo'
import { getHeroPhotoForSlug } from '@/config/serviceHeroPhotos'
import { getCategoryMeta, getServiceBySlug } from '@/data/servicePages'
import { site } from '@/config/site'
import { NotFound } from '@/pages/NotFound'

export function ServiceDetail() {
  const { slug } = useParams()
  const page = getServiceBySlug(slug)

  if (!page) {
    return <NotFound />
  }

  const cat = getCategoryMeta(page.category)
  const heroPhoto = getHeroPhotoForSlug(page.slug)

  return (
    <>
      <Seo title={page.title} description={page.metaDescription} />

      <section className="border-b border-brand-900/10 bg-brand-950 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="text-xs font-medium text-brand-100/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/services" className="hover:text-white">
                  Inspection services
                </Link>
              </li>
              <li aria-hidden className="text-brand-100/40">
                /
              </li>
              <li className="text-brand-100/90">{cat.groupTitle}</li>
            </ol>
          </nav>
          {page.heroEyebrow ? (
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              {page.heroEyebrow}
            </p>
          ) : null}
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.title}
          </h1>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <figure className="-mt-6 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 sm:-mt-10">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="aspect-[20/11] w-full object-cover sm:aspect-[2.35/1]"
            width={1600}
            height={680}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sr-only">{heroPhoto.alt}</figcaption>
        </figure>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-12">
          <article className="min-w-0">
            <div className="space-y-5 text-base leading-relaxed text-brand-800/95">
              {page.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {page.supportingSections?.map((section) => (
              <div key={section.title} className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-brand-950">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-800/95">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {page.takeaways?.length ? (
              <div className="mt-10 rounded-2xl border border-brand-900/10 bg-brand-50/90 p-6 sm:p-8">
                <h2 className="font-display text-lg font-semibold text-brand-950">At a glance</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-brand-800/95 marker:text-accent-600">
                  {page.takeaways.map((item, i) => (
                    <li key={i} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {page.whyHeading ? (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-semibold text-brand-950">{page.whyHeading}</h2>
                {page.whyBody ? (
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-800/95">
                    {page.whyBody.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-brand-950">{page.howHeading}</h2>
              <ol className="mt-6 space-y-8">
                {page.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-950 text-sm font-bold text-white"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-brand-950">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-800/90">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {page.closing ? (
              <div className="mt-12 space-y-4 text-base leading-relaxed text-brand-800/95">
                {page.closing.split('\n\n').map((block, k) => (
                  <p key={k}>{block}</p>
                ))}
              </div>
            ) : null}

            <div className="mt-12 flex flex-wrap gap-4">
              <ScheduleButton className="!bg-brand-950 !text-white hover:!bg-brand-900">
                Schedule online
              </ScheduleButton>
              <a
                href={`tel:${site.mainPhoneTel}`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-brand-900/20 hover:bg-white"
              >
                Call {site.mainPhone}
              </a>
            </div>
          </article>

          {page.callout ? (
            <aside
              className="rounded-3xl bg-emerald-900 p-6 text-sm leading-relaxed text-emerald-50 shadow-lg shadow-emerald-950/20 ring-1 ring-emerald-800/60 sm:p-8"
              aria-label="Important information"
            >
              {page.callout.title ? (
                <p className="font-display text-lg font-semibold text-white">{page.callout.title}</p>
              ) : null}
              <p className={page.callout.title ? 'mt-3' : ''}>
                <RichText text={page.callout.body} strongClassName="font-semibold text-white" />
              </p>
              {page.callout.secondaryButton ? (
                <Link
                  to={page.callout.secondaryButton.to}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-50"
                >
                  {page.callout.secondaryButton.label}
                </Link>
              ) : null}
            </aside>
          ) : null}
        </div>
      </section>
    </>
  )
}
