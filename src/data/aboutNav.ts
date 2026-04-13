/** About menu — mirrors hopehomeinspections.com structure */

export const aboutLinks = [
  { to: '/about/hope-gives-back', label: 'Hope gives back' },
  { to: '/about/meet-the-team', label: 'Meet the team' },
  { to: '/about/reviews', label: 'Reviews & testimonials' },
] as const

export type ServiceAreaSlug =
  | 'lakewood-ranch'
  | 'riverview'
  | 'sarasota'
  | 'st-petersburg'
  | 'tampa'
  | 'venice'

export const serviceAreas: {
  slug: ServiceAreaSlug
  label: string
  headline: string
  blurb: string
}[] = [
  {
    slug: 'lakewood-ranch',
    label: 'Lakewood Ranch',
    headline: 'Home inspections in Lakewood Ranch',
    blurb:
      'Lakewood Ranch continues to grow — and so does demand for thorough, schedule-friendly inspections. We help buyers and agents coordinate quickly during tight contingency windows.',
  },
  {
    slug: 'riverview',
    label: 'Riverview',
    headline: 'Home inspections in Riverview',
    blurb:
      'From established neighborhoods to newer construction, we deliver clear reporting and practical explanations buyers can use with confidence.',
  },
  {
    slug: 'sarasota',
    label: 'Sarasota',
    headline: 'Home inspections in Sarasota',
    blurb:
      'Our main office serves Sarasota and Manatee counties daily. Expect professional standards, fast turnaround, and inspectors who communicate clearly.',
  },
  {
    slug: 'st-petersburg',
    label: 'St. Petersburg',
    headline: 'Home inspections in St. Petersburg',
    blurb:
      'Pinellas County buyers and agents rely on us for responsive scheduling and reports that make negotiations easier — not harder.',
  },
  {
    slug: 'tampa',
    label: 'Tampa',
    headline: 'Home inspections in Tampa',
    blurb:
      'Hillsborough County coverage with the same detail-oriented approach: infrared included on standard home inspections and full-time office support.',
  },
  {
    slug: 'venice',
    label: 'Venice',
    headline: 'Home inspections in Venice',
    blurb:
      'Serving Venice and nearby communities with local expertise and the professionalism agents expect from a trusted partner.',
  },
]
