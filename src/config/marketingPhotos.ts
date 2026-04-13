/** Shared marketing images (Unsplash). */

const q = 'auto=format&fit=crop&w=1600&q=80'

export const marketingPhotos = {
  servicesBanner: {
    src: `https://images.unsplash.com/photo-1581578731548-c64695cc6952?${q}`,
    alt: 'Professional reviewing notes during a property walkthrough',
  },
  aboutTeam: {
    src: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${q}`,
    alt: 'Welcoming Florida neighborhood with palm trees and homes',
  },
  resourcesHero: {
    src: `https://images.unsplash.com/photo-1600585154526-990dced4db0d?${q}`,
    alt: 'Residential street with homes and landscaping',
  },
} as const
