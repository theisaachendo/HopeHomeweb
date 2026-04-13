/**
 * Field inspector profiles — static; swap headshots & tune copy in CMS later.
 */

export type Inspector = {
  slug: string
  firstName: string
  fullName: string
  /** Shown under the name when two people share a first name (e.g. both “Nick”) */
  cardSubtitle?: string
  /** Omit when no headshot yet — UI shows initials placeholder */
  photoUrl?: string
  photoAlt: string
  certifications: string[]
  serviceAreas?: string[]
  /** Short intro on profile */
  bio: string[]
  /** Longer founder / leadership story (e.g. Robert) — also shown on profile */
  extendedBio?: string[]
  sortOrder: number
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=400&q=80`

/** Shared copy: Meet the Team “Founders” block + Robert’s profile extended bio */
const ROBERT_FOUNDER_STORY: string[] = [
  'Robert has been a proud resident of Sarasota for many years, bringing with him decades of experience in real estate design, development, and renovation. Originally from London, he moved to the United States in 1982 and quickly established a reputation for his deep knowledge of homes and strong work ethic.',
  'With a shared vision for raising the standard in the home inspection industry, Robert co-founded Hope Home Inspections alongside Theresa. Drawing on his construction background, attention to detail, and practical insight, he helped shape the company’s inspection process from the ground up. As Lead Inspector and a licensed mold assessor, Robert has played an essential role in establishing HHI as a trusted name throughout the region. He’s also committed to supporting the next generation of inspectors and ensuring every client receives clear, honest, and thorough information about their home.',
  'Outside of work, Robert proudly holds the titles of Captain and Grandpa. He enjoys fishing, boating, and spending time on the water. The company has grown and flourished over the years, and he does not see this slowing down anytime soon.',
]

export const meetTheTeamFoundersRobert = {
  heading: 'Founders',
  name: 'Robert',
  paragraphs: ROBERT_FOUNDER_STORY,
} as const

export const inspectors: Inspector[] = [
  {
    slug: 'robert',
    firstName: 'Robert',
    fullName: 'Robert',
    photoUrl: img('photo-1560250097-0b93528c311a'),
    photoAlt: 'Portrait of Robert, Hope Home Inspections',
    certifications: [
      'Licensed Home Inspector',
      'Licensed FL Mold Assessor',
      'Licensed FL Pest Control Operator',
    ],
    bio: [
      'Co-founder, Lead Inspector, and licensed mold assessor — serving Sarasota and the region with thorough inspections and clear communication.',
    ],
    extendedBio: [...ROBERT_FOUNDER_STORY],
    sortOrder: 1,
  },
  {
    slug: 'vito',
    firstName: 'Vito',
    fullName: 'Vito',
    photoUrl: img('photo-1472099645785-5658abf4ff4e'),
    photoAlt: 'Portrait of Vito, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'Vito serves buyers and agents across Lakewood Ranch, Sarasota, and Bradenton with thorough inspections and clear reporting.',
    ],
    sortOrder: 2,
  },
  {
    slug: 'william',
    firstName: 'William',
    fullName: 'William',
    photoUrl: img('photo-1519085360753-af0119f7cbe7'),
    photoAlt: 'Portrait of William, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed FL Mold Assessor',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'William supports the Sarasota–Bradenton corridor with mold assessment training, drone documentation, and WDO expertise.',
    ],
    sortOrder: 3,
  },
  {
    slug: 'justin',
    firstName: 'Justin',
    fullName: 'Justin',
    photoUrl: img('photo-1507003211169-0a1dd7228f2d'),
    photoAlt: 'Portrait of Justin, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
      'Radon Specialist',
    ],
    serviceAreas: ['Sarasota', 'Bradenton', 'Lakewood Ranch'],
    bio: [
      'Justin serves Sarasota, Bradenton, and Lakewood Ranch with radon, drone, and WDO capabilities.',
    ],
    sortOrder: 4,
  },
  {
    slug: 'shawn',
    firstName: 'Shawn',
    fullName: 'Shawn',
    photoUrl: img('photo-1506794778202-cad84cf45f1d'),
    photoAlt: 'Portrait of Shawn, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
    ],
    serviceAreas: ['St. Petersburg', 'Clearwater', 'Largo'],
    bio: [
      'Shawn serves Pinellas County communities including St. Petersburg, Clearwater, and Largo.',
    ],
    sortOrder: 5,
  },
  {
    slug: 'nick',
    firstName: 'Nick',
    fullName: 'Nick',
    cardSubtitle: 'Sarasota · Bradenton · Lakewood Ranch',
    photoUrl: img('photo-1519345182560-3f2917c472ef'),
    photoAlt: 'Portrait of Nick, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
      'Radon Specialist',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'Nick serves the Sarasota–Bradenton–Lakewood Ranch area with radon and WDO expertise.',
    ],
    sortOrder: 6,
  },
  {
    slug: 'eric',
    firstName: 'Eric',
    fullName: 'Eric',
    photoUrl: img('photo-1607746882042-944635dfe10e'),
    photoAlt: 'Portrait of Eric, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed FL Mold Assessor',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'Eric supports clients across Lakewood Ranch, Sarasota, and Bradenton with mold assessment and aerial documentation.',
    ],
    sortOrder: 7,
  },
  {
    slug: 'jerry',
    firstName: 'Jerry',
    fullName: 'Jerry',
    photoUrl: img('photo-1522071820081-009f0129c71c'),
    photoAlt: 'Portrait of Jerry, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
    ],
    serviceAreas: ['Venice', 'North Port', 'Englewood', 'Sarasota'],
    bio: [
      'Jerry serves South County and Sarasota with drone and WDO expertise.',
    ],
    sortOrder: 8,
  },
  {
    slug: 'chris',
    firstName: 'Chris',
    fullName: 'Chris',
    photoUrl: img('photo-1573496359142-b8d87734a5a2'),
    photoAlt: 'Portrait of Chris, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood Destroying Organism Inspector',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'Chris supports the Lakewood Ranch, Sarasota, and Bradenton markets with clear reporting and professional field standards.',
    ],
    sortOrder: 9,
  },
  {
    slug: 'shaun',
    firstName: 'Shaun',
    fullName: 'Shaun',
    photoUrl: img('photo-1551836022-d5d88e9218df'),
    photoAlt: 'Portrait of Shaun, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood-Destroying Organism Inspector',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'Shaun serves Lakewood Ranch, Sarasota, and Bradenton with drone and WDO capabilities.',
    ],
    sortOrder: 10,
  },
  {
    slug: 'nick-tampa',
    firstName: 'Nick',
    fullName: 'Nick',
    cardSubtitle: 'Tampa · Riverview · Brandon · Apollo Beach',
    photoAlt: 'Nick — Tampa Bay area (photo coming soon)',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood-Destroying Organism Inspector',
    ],
    serviceAreas: ['Tampa', 'Riverview', 'Brandon', 'Apollo Beach'],
    bio: [
      'Nick serves the Tampa Bay region including Tampa, Riverview, Brandon, and Apollo Beach.',
    ],
    sortOrder: 11,
  },
  {
    slug: 'isaac',
    firstName: 'Isaac',
    fullName: 'Isaac',
    photoUrl: img('photo-1500648767791-00dcc994a43e'),
    photoAlt: 'Portrait of Isaac, licensed home inspector',
    certifications: [
      'Licensed Home Inspector',
      'Licensed Drone Operator',
      'Licensed Wood-Destroying Organism Inspector',
    ],
    serviceAreas: ['Lakewood Ranch', 'Sarasota', 'Bradenton'],
    bio: [
      'Isaac serves Lakewood Ranch, Sarasota, and Bradenton with drone and WDO expertise.',
    ],
    sortOrder: 12,
  },
]

export function getInspectorsSorted(): Inspector[] {
  return [...inspectors].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getInspectorBySlug(slug: string | undefined): Inspector | undefined {
  if (!slug) return undefined
  return inspectors.find((i) => i.slug === slug)
}

/** Office & admin — no profile routes; contact CTA. */
export type OfficeMember = {
  slug: string
  firstName: string
  fullName: string
  title: string
  photoUrl: string
  photoAlt: string
  bio: string[]
  sortOrder: number
  /** Long bio (e.g. Tristian) — full width on card */
  variant?: 'default' | 'featured'
}

const officeImg = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=400&q=80`

export const officeTeam: OfficeMember[] = [
  {
    slug: 'harry-hope',
    firstName: 'Harry Hope',
    fullName: '',
    title: 'Our mascot',
    photoUrl: officeImg('photo-1507146426996-ef05306b995a'),
    photoAlt: 'Harry Hope, Hope Home Inspections mascot',
    bio: [
      'Harry Hope may not be a real person, but he’s very much a part of the Hope Home Inspections family. As our beloved mascot, Harry brings a little personality and a lot of spirit to everything we do. You’ll find him riding along with our inspectors to every inspection, proudly perched on the back of our work trucks—keeping watch and making sure the job gets done right (with a smile, of course).',
      'Harry isn’t just along for the ride—he’s also the face of our online presence. You’ll spot him front and center on our Facebook, Pinterest, and YouTube pages, where he shares helpful tips, fun updates, team highlights, and the occasional coupon or promotion. Whether he’s reminding you about hurricane season prep or just bringing some humor to your feed, Harry keeps things light while staying connected to what matters most: supporting our clients and real estate partners every step of the way.',
      'Be sure to follow Harry’s adventures across social media—you never know where he’ll show up next!!',
    ],
    sortOrder: 1,
    variant: 'featured',
  },
  {
    slug: 'tristian',
    firstName: 'Tristian',
    fullName: '',
    title: 'Hope Home Inspections',
    photoUrl: officeImg('photo-1494790108377-be9c29b29330'),
    photoAlt: 'Tristian, Hope Home Inspections office',
    bio: [
      'Tristian is a proud Sarasota native and a graduate of the University of Tampa, where she earned her Bachelor of Science degree in 2017 with a major in Biology and minors in Chemistry and Mathematics. A true adventure seeker at heart, Tristian enjoys skydiving, four-wheeling, boating, and just about anything outdoors. While she’s accomplished much both personally and professionally, her greatest pride and joy is being a mom to her wonderful little boy.',
    ],
    sortOrder: 2,
    variant: 'featured',
  },
  {
    slug: 'lisa',
    firstName: 'Lisa',
    fullName: '',
    title: 'Hope Home Inspections',
    photoUrl: officeImg('photo-1438761681033-6461ffad8d80'),
    photoAlt: 'Lisa, Hope Home Inspections office',
    bio: [],
    sortOrder: 3,
  },
  {
    slug: 'carole',
    firstName: 'Carole',
    fullName: '',
    title: 'Hope Home Inspections',
    photoUrl: officeImg('photo-1544005313-94ddf0286df2'),
    photoAlt: 'Carole',
    bio: [],
    sortOrder: 4,
  },
]

export function getOfficeTeamSorted(): OfficeMember[] {
  return [...officeTeam].sort((a, b) => a.sortOrder - b.sortOrder)
}
