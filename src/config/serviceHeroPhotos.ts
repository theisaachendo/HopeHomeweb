/** Curated Unsplash hero images per service (free to use per Unsplash License). */

const q = 'auto=format&fit=crop&w=1600&q=80'

function src(photoPath: string) {
  return `https://images.unsplash.com/${photoPath}?${q}`
}

export type HeroPhoto = { src: string; alt: string }

const fallback: HeroPhoto = {
  src: src('photo-1560518883-ce09059eeffa'),
  alt: 'Florida home exterior at dusk with warm lighting',
}

const bySlug: Record<string, HeroPhoto> = {
  'home-inspection': {
    src: src('photo-1600585154340-be6161a56a0c'),
    alt: 'Modern single-family home with driveway and tropical landscaping',
  },
  'mobile-and-manufactured-homes': {
    src: src('photo-1600585154526-990dced4db0d'),
    alt: 'Residential neighborhood with homes and clear sky',
  },
  'pre-drywall-inspection': {
    src: src('photo-1503387762-592deb58ef4e'),
    alt: 'Construction site with wooden framing of a new home',
  },
  'final-walk-through-inspection': {
    src: src('photo-1600607687939-ce8a6c25118c'),
    alt: 'Bright open living space in a new home with large windows',
  },
  'builder-warranty-inspection': {
    src: src('photo-1600585154084-4e5fe7c57494'),
    alt: 'New home interior with staircase and natural light',
  },
  'mold-air-quality-swab-sampling': {
    src: src('photo-1621905252507-b35492cc74b4'),
    alt: 'Technician examining wall and floor for moisture during an indoor assessment',
  },
  'mold-assessment': {
    src: src('photo-1589939705384-5185137a7f0f'),
    alt: 'Close-up of wall and baseboard area during a building inspection',
  },
  'radon-testing': {
    src: src('photo-1600585152914-d0dcf9e62426'),
    alt: 'House keys resting on a table in front of a home',
  },
  'sewer-scope': {
    src: src('photo-1621905251189-08b45d6a269e'),
    alt: 'Plumbing pipes and fittings in a utility space',
  },
  'water-testing': {
    src: src('photo-1558642452-9d2a7deb7f62'),
    alt: 'Water droplets — drinking water quality and laboratory testing context',
  },
  'well-inspection': {
    src: src('photo-1548839140-29a749e1cf4d'),
    alt: 'Clean drinking water — representing private well water quality review',
  },
  'wind-mitigation-4-points': {
    src: src('photo-1564013799919-ab600027ffc6'),
    alt: 'Residential roofline and siding on a Florida-style home',
  },
  'wdo-termite': {
    src: src('photo-1600585154340-be6161a56a0c'),
    alt: 'Wooden structural detail on a home exterior',
  },
  'voc-testing': {
    src: src('photo-1560518883-ce09059eeffa'),
    alt: 'Home exterior at dusk — indoor air quality and ventilation context',
  },
  'maintenance-inspection': {
    src: src('photo-1581578731548-c64695cc6952'),
    alt: 'Inspector reviewing notes on a clipboard at a property',
  },
  'complete-home-warranty': {
    src: src('photo-1600585154526-990dced4db0d'),
    alt: 'Well-maintained suburban home with landscaping',
  },
  'commercial-building-inspections': {
    src: src('photo-1486406146926-c627a92ad1ab'),
    alt: 'Modern city skyline with glass office towers',
  },
  'phase-1-environmental-assessment': {
    src: src('photo-1504307651254-35680f356dfd'),
    alt: 'Industrial site and equipment — environmental due diligence context',
  },
}

export function getHeroPhotoForSlug(slug: string): HeroPhoto {
  return bySlug[slug] ?? fallback
}
