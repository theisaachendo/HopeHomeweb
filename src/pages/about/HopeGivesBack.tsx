import { Seo } from '@/components/Seo'
import { ScheduleButton } from '@/components/ScheduleButton'

export function HopeGivesBack() {
  return (
    <>
      <Seo
        title="Hope Gives Back"
        description="Hope Home Inspections supports charitable events and organizations across Southwest Florida communities we serve."
      />
      <section className="border-b border-brand-900/10 bg-brand-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">About us</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Hope gives back</h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="space-y-6 text-base leading-relaxed text-brand-800/95">
          <p>
            We believe strong communities make better homes — and better homes support stronger communities.
            Hope Home Inspections is proud to participate in charitable events and support organizations that
            help families across Southwest Florida thrive.
          </p>
          <p>
            When you work with our team, you are supporting a local, family-owned business that invests where
            we live — not a faceless franchise from out of town.
          </p>
          <p>
            Have an event or organization you would like us to consider? Reach out to our office — we love
            hearing about opportunities to give back.
          </p>
        </div>
        <div className="mt-10">
          <ScheduleButton className="!bg-brand-950 !text-white hover:!bg-brand-900">Schedule online</ScheduleButton>
        </div>
      </section>
    </>
  )
}
