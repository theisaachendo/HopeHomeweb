import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ScheduleButton } from '@/components/ScheduleButton'
import { aboutLinks, serviceAreas } from '@/data/aboutNav'
import { servicesGroupedForNav } from '@/data/servicePages'

const restNav = [
  { to: '/contact', label: 'Contact' },
  { to: '/resources', label: 'Resources' },
  { to: '/careers', label: 'Careers' },
] as const

function linkClass(isActive: boolean) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-white/10 text-white'
      : 'text-brand-100/90 hover:bg-white/5 hover:text-white',
  ].join(' ')
}

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const groups = servicesGroupedForNav()

  const aboutNavActive = pathname.startsWith('/about')

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setOpen(false)
        setServicesOpen(false)
        setAboutOpen(false)
        setAreasOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-center gap-2">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-lg font-bold text-brand-950 shadow-inner"
            aria-hidden
          >
            H
          </span>
          <span className="min-w-0 text-left leading-tight">
            <span className="font-display block truncate text-base font-semibold tracking-tight text-white sm:text-lg">
              Hope Home
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-brand-100/70">
              Inspections
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          <div className="group/services relative">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                [
                  'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition',
                  isActive || pathname.startsWith('/services/')
                    ? 'bg-white/10 text-white'
                    : 'text-brand-100/90 hover:bg-white/5 hover:text-white',
                ].join(' ')
              }
            >
              Inspection services
              <span className="text-[10px] opacity-70" aria-hidden>
                ▾
              </span>
            </NavLink>
            <div className="invisible absolute left-0 top-full z-50 w-[min(100vw-2rem,56rem)] pt-2 opacity-0 transition duration-150 group-hover/services:visible group-hover/services:opacity-100">
              <div className="max-h-[min(70vh,32rem)] overflow-y-auto rounded-2xl border border-white/10 bg-brand-900/98 p-5 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groups.map((g) => (
                    <div key={g.category}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                        {g.navLabel}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {g.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              to={`/services/${item.slug}`}
                              className="block rounded-lg px-2 py-1.5 text-sm text-brand-100/90 transition hover:bg-white/10 hover:text-white"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <Link
                    to="/services"
                    className="text-sm font-semibold text-accent-300 hover:text-accent-200"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="group/about relative">
            <NavLink
              to="/about"
              className={() =>
                [
                  'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition',
                  aboutNavActive
                    ? 'bg-white/10 text-white'
                    : 'text-brand-100/90 hover:bg-white/5 hover:text-white',
                ].join(' ')
              }
            >
              About us
              <span className="text-[10px] opacity-70" aria-hidden>
                ▾
              </span>
            </NavLink>
            <div className="invisible absolute left-0 top-full z-50 min-w-[17rem] pt-2 opacity-0 transition duration-150 group-hover/about:visible group-hover/about:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-brand-900/98 py-2 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-lg px-4 py-2.5 text-sm text-brand-100/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-white/10" />
                <div className="group/areas relative">
                  <Link
                    to="/about/service-areas"
                    className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-brand-100/90 transition hover:bg-white/10 hover:text-white"
                  >
                    Service areas
                    <span className="text-xs opacity-70" aria-hidden>
                      ›
                    </span>
                  </Link>
                  <div className="invisible absolute left-full top-0 z-[60] ml-1 min-w-[13rem] rounded-2xl border border-white/10 bg-brand-900/98 py-2 opacity-0 shadow-2xl shadow-black/40 ring-1 ring-white/10 transition duration-150 group-hover/areas:visible group-hover/areas:opacity-100">
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/about/service-areas/${a.slug}`}
                        className="block rounded-lg px-4 py-2 text-sm text-brand-100/90 transition hover:bg-white/10 hover:text-white"
                      >
                        {a.label}
                      </Link>
                    ))}
                    <div className="mx-2 my-2 border-t border-white/10" />
                    <Link
                      to="/about/service-areas"
                      className="block rounded-lg px-4 py-2 text-xs font-semibold text-accent-300 hover:text-accent-200"
                    >
                      View all areas →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {restNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => linkClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ScheduleButton className="!py-2.5 !text-xs sm:!text-sm">Schedule online</ScheduleButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white ring-1 ring-white/15 hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-brand-950 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-white ring-1 ring-white/10"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Inspection services
              <span className="text-xs" aria-hidden>
                {servicesOpen ? '▴' : '▾'}
              </span>
            </button>
            {servicesOpen ? (
              <div className="ml-2 space-y-5 border-l border-white/10 pl-4">
                {groups.map((g) => (
                  <div key={g.category}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                      {g.navLabel}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {g.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/services/${item.slug}`}
                            className="block rounded-lg py-2 text-sm text-brand-100/90 hover:text-white"
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  to="/services"
                  className="inline-block text-sm font-semibold text-accent-300"
                  onClick={() => setOpen(false)}
                >
                  View all services →
                </Link>
              </div>
            ) : null}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-white ring-1 ring-white/10"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen((v) => !v)}
            >
              About us
              <span className="text-xs" aria-hidden>
                {aboutOpen ? '▴' : '▾'}
              </span>
            </button>
            {aboutOpen ? (
              <div className="ml-2 space-y-1 border-l border-white/10 pl-4">
                <Link
                  to="/about"
                  className="block rounded-lg py-2 text-sm font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  About overview
                </Link>
                {aboutLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-lg py-2 text-sm text-brand-100/90 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg py-2 text-left text-sm font-semibold text-brand-100/90"
                  aria-expanded={areasOpen}
                  onClick={() => setAreasOpen((v) => !v)}
                >
                  Service areas
                  <span className="text-xs" aria-hidden>
                    {areasOpen ? '▴' : '▾'}
                  </span>
                </button>
                {areasOpen ? (
                  <ul className="ml-2 space-y-1 border-l border-white/20 pl-3">
                    {serviceAreas.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`/about/service-areas/${a.slug}`}
                          className="block py-1.5 text-sm text-brand-100/85 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          {a.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/about/service-areas"
                        className="block py-2 text-xs font-semibold text-accent-300"
                        onClick={() => setOpen(false)}
                      >
                        View all service areas →
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            ) : null}

            {restNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkClass(isActive)} !px-4 !py-3 text-base`}
              >
                {item.label}
              </NavLink>
            ))}
            <ScheduleButton className="mt-2 w-full justify-center">Schedule online</ScheduleButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}
