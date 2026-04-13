import { InspectorCard } from '@/components/InspectorCard'
import { OfficeTeamCard } from '@/components/OfficeTeamCard'
import { Seo } from '@/components/Seo'
import { site } from '@/config/site'
import { getInspectorsSorted, getOfficeTeamSorted, meetTheTeamFoundersRobert } from '@/data/inspectors'
import { Link } from 'react-router-dom'

export function MeetTheTeam() {
  const team = getInspectorsSorted()
  const office = getOfficeTeamSorted()

  return (
    <>
      <Seo
        title="Meet the Team | Home inspectors"
        description="Meet Hope Home Inspections — licensed home inspectors across Southwest Florida. H.O.P.E.: Helping Other People Everyday."
      />

      <section className="border-b border-brand-900/10 bg-brand-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">About us</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Meet the team</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-brand-100/85">
            We serve Sarasota, Bradenton, Lakewood Ranch, Venice, Tampa, St. Petersburg, and communities
            across the west coast of Florida — with licensed inspectors who explain findings in plain language
            and reports you can trust.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/95">
            <span className="text-accent-400">H.O.P.E.</span> — Helping Other People Everyday. That is the
            standard our team brings to every walkthrough, every report, and every phone call.
          </p>
        </div>
      </section>

      <section className="border-b border-brand-900/10 bg-white py-6 sm:py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm leading-relaxed text-brand-800/90">
            Our inspectors wear the Hope Home uniform, arrive on time, and document what matters — with a
            complimentary infrared scan on standard home inspections and fast digital delivery. Need the
            right fit for your area? Call{' '}
            <a href={`tel:${site.mainPhoneTel}`} className="font-semibold text-brand-950 hover:underline">
              {site.mainPhone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-50/80 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold uppercase tracking-[0.15em] text-[#1e4a7a] sm:text-4xl">
            Home inspectors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-brand-800/70">
            Tap a profile for licenses, service areas, and a short bio.{' '}
            <span className="italic">Photos below are placeholders — swap for team headshots when ready.</span>
          </p>

          <div className="mt-20 grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((inspector) => (
              <InspectorCard key={inspector.slug} inspector={inspector} />
            ))}
          </div>

          <div className="mx-auto mt-24 max-w-2xl border-t border-brand-900/10 pt-16">
            <h2 className="text-center font-display text-3xl font-bold uppercase tracking-[0.15em] text-[#1e4a7a] sm:text-4xl">
              Office team
            </h2>
            <p className="mx-auto mt-3 text-center text-sm text-brand-800/75">
              Full-time staff for scheduling, coordination, and client support — seven days a week.
            </p>
          </div>

          <div className="mt-16 grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl lg:grid-cols-2">
            {office.map((member) => (
              <OfficeTeamCard key={member.slug} member={member} />
            ))}
          </div>

          <div className="mx-auto mt-24 max-w-3xl border-t border-brand-900/10 pt-16">
            <h2 className="text-center font-display text-3xl font-bold uppercase tracking-[0.15em] text-[#1e4a7a] sm:text-4xl">
              {meetTheTeamFoundersRobert.heading}
            </h2>
            <h3 className="mt-10 text-center font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
              {meetTheTeamFoundersRobert.name}
            </h3>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-800/95">
              {meetTheTeamFoundersRobert.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-brand-800/75">
              <Link to="/about/meet-the-team/robert" className="font-semibold text-brand-950 hover:underline">
                Robert’s inspector profile →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
