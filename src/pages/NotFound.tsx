import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">404</p>
        <h1 className="font-display mt-4 text-4xl font-semibold text-brand-950">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-brand-800/85">
          That address may have moved. Head back home or contact us if you need help finding a service.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-full bg-brand-950 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-900"
        >
          Back to home
        </Link>
      </section>
    </>
  )
}
