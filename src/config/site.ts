/** Spectora (or other) online booking URL — set in `.env` as VITE_SCHEDULE_URL */
export const scheduleUrl =
  import.meta.env.VITE_SCHEDULE_URL ?? 'https://www.hopehomeinspections.com/'

export const site = {
  name: 'Hope Home Inspections',
  tagline: 'Trusted home inspections across Southwest Florida.',
  description:
    'Family-owned, multi-inspector home inspection company serving Sarasota, Bradenton, Lakewood Ranch, Venice, Tampa, St. Petersburg, and surrounding areas.',
  mainPhone: '(941) 773-1144',
  mainPhoneTel: '+19417731144',
  phones: [
    { label: 'Sarasota / Manatee', value: '(941) 773-1144', tel: '+19417731144' },
    { label: 'Pinellas', value: '(727) 773-5256', tel: '+17277735256' },
    { label: 'Hillsborough', value: '(813) 921-8887', tel: '+18139218887' },
    { label: 'Charlotte', value: '(941) 302-0934', tel: '+19413020934' },
  ],
  email: 'info@hopehomeinspections.com',
  address: {
    street: '6497 Parkland Dr, Unit F',
    city: 'Sarasota',
    state: 'FL',
    zip: '34243',
  },
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    linkedin: 'https://www.linkedin.com/',
    pinterest: 'https://www.pinterest.com/',
  },
  serviceAreas: [
    'Sarasota',
    'Bradenton',
    'Lakewood Ranch',
    'Venice',
    'North Port',
    'Tampa',
    'St. Petersburg',
    'Clearwater',
    'Hillsborough',
    'Riverview',
    'Englewood',
  ],
} as const
