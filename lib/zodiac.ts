export type Sign =
  | 'aries' | 'taurus' | 'gemini' | 'cancer' | 'leo' | 'virgo'
  | 'libra' | 'scorpio' | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces'

export interface SignMeta {
  slug: Sign
  name: string
  glyph: string
  dateRange: string
  about: string[]
  strengths: string[]
  challenges: string[]
  element: 'Fire' | 'Earth' | 'Air' | 'Water'
  modality: 'Cardinal' | 'Fixed' | 'Mutable'
  planet: string
}

const ranges: { slug: Sign; start: [number, number]; end: [number, number] }[] = [
  { slug: 'aries', start: [3, 21], end: [4, 19] },
  { slug: 'taurus', start: [4, 20], end: [5, 20] },
  { slug: 'gemini', start: [5, 21], end: [6, 20] },
  { slug: 'cancer', start: [6, 21], end: [7, 22] },
  { slug: 'leo', start: [7, 23], end: [8, 22] },
  { slug: 'virgo', start: [8, 23], end: [9, 22] },
  { slug: 'libra', start: [9, 23], end: [10, 22] },
  { slug: 'scorpio', start: [10, 23], end: [11, 21] },
  { slug: 'sagittarius', start: [11, 22], end: [12, 21] },
  { slug: 'capricorn', start: [12, 22], end: [1, 19] },
  { slug: 'aquarius', start: [1, 20], end: [2, 18] },
  { slug: 'pisces', start: [2, 19], end: [3, 20] },
]

export function getZodiac(date: Date): Sign {
  const month = date.getUTCMonth() + 1
  const day = date.getUTCDate()

  for (const r of ranges) {
    const [sm, sd] = r.start
    const [em, ed] = r.end
    const crossesYear = sm > em
    if (!crossesYear) {
      if ((month === sm && day >= sd) || (month === em && day <= ed) || (month > sm && month < em)) {
        return r.slug
      }
    } else {
      // e.g., Capricorn: Dec 22 – Jan 19
      if ((month === sm && day >= sd) || (month === em && day <= ed) || month > sm || month < em) {
        return r.slug
      }
    }
  }
  return 'aries'
}

export const SIGNS: Record<Sign, SignMeta> = {
  aries: {
    slug: 'aries', name: 'Aries', glyph: '♈︎', dateRange: 'Mar 21 – Apr 19',
    about: [
      'Aries opens the zodiac — bold, pioneering, and full of fire.',
      'This sign acts first and thinks later, lighting the spark for new adventures.',
    ],
    strengths: ['Courage', 'Initiative', 'Directness'],
    challenges: ['Impulsiveness', 'Impatience', 'Short fuse'],
    element: 'Fire', modality: 'Cardinal', planet: 'Mars'
  },
  taurus: {
    slug: 'taurus', name: 'Taurus', glyph: '♉︎', dateRange: 'Apr 20 – May 20',
    about: [
      'Taurus values comfort, stability, and the pleasures of the senses.',
      'Patient and grounded, Taurus builds what lasts.',
    ],
    strengths: ['Reliability', 'Persistence', 'Sensuality'],
    challenges: ['Stubbornness', 'Resistance to change', 'Possessiveness'],
    element: 'Earth', modality: 'Fixed', planet: 'Venus'
  },
  gemini: {
    slug: 'gemini', name: 'Gemini', glyph: '♊︎', dateRange: 'May 21 – Jun 20',
    about: [
      'Gemini is curiosity in motion, connecting ideas and people.',
      'Quick-witted and flexible, Gemini thrives on variety.',
    ],
    strengths: ['Communication', 'Adaptability', 'Curiosity'],
    challenges: ['Restlessness', 'Inconsistency', 'Overthinking'],
    element: 'Air', modality: 'Mutable', planet: 'Mercury'
  },
  cancer: {
    slug: 'cancer', name: 'Cancer', glyph: '♋︎', dateRange: 'Jun 21 – Jul 22',
    about: [
      'Cancer nurtures, protects, and remembers. Home is sacred.',
      'Sensitive and strong, Cancer moves with the tides.',
    ],
    strengths: ['Empathy', 'Loyalty', 'Intuition'],
    challenges: ['Moodiness', 'Clinginess', 'Retreating'],
    element: 'Water', modality: 'Cardinal', planet: 'Moon'
  },
  leo: {
    slug: 'leo', name: 'Leo', glyph: '♌︎', dateRange: 'Jul 23 – Aug 22',
    about: [
      'Leo shines with creative pride and a generous, playful heart.',
      'Leadership comes naturally, along with a flair for drama.',
    ],
    strengths: ['Confidence', 'Creativity', 'Warmth'],
    challenges: ['Pride', 'Stubborn will', 'Attention seeking'],
    element: 'Fire', modality: 'Fixed', planet: 'Sun'
  },
  virgo: {
    slug: 'virgo', name: 'Virgo', glyph: '♍︎', dateRange: 'Aug 23 – Sep 22',
    about: [
      'Virgo refines and improves — practical, mindful, and service-oriented.',
      'It sees the details that make systems sing.',
    ],
    strengths: ['Discernment', 'Service', 'Craft'],
    challenges: ['Perfectionism', 'Overcritical', 'Worry'],
    element: 'Earth', modality: 'Mutable', planet: 'Mercury'
  },
  libra: {
    slug: 'libra', name: 'Libra', glyph: '♎︎', dateRange: 'Sep 23 – Oct 22',
    about: [
      'Libra seeks harmony, beauty, and balance in all things.',
      'Diplomatic and fair, Libra listens for the middle path.',
    ],
    strengths: ['Charm', 'Mediation', 'Aesthetics'],
    challenges: ['Indecision', 'People-pleasing', 'Avoidance'],
    element: 'Air', modality: 'Cardinal', planet: 'Venus'
  },
  scorpio: {
    slug: 'scorpio', name: 'Scorpio', glyph: '♏︎', dateRange: 'Oct 23 – Nov 21',
    about: [
      'Scorpio transforms — deep feeling, privacy, and resolve.',
      'It confronts truth and emerges reborn.',
    ],
    strengths: ['Intensity', 'Loyalty', 'Resilience'],
    challenges: ['Jealousy', 'Control', 'All-or-nothing'],
    element: 'Water', modality: 'Fixed', planet: 'Mars / Pluto'
  },
  sagittarius: {
    slug: 'sagittarius', name: 'Sagittarius', glyph: '♐︎', dateRange: 'Nov 22 – Dec 21',
    about: [
      'Sagittarius pursues meaning — exploration, faith, and humor.',
      'Aim high, roam far, and tell a good story.',
    ],
    strengths: ['Optimism', 'Honesty', 'Vision'],
    challenges: ['Bluntness', 'Restlessness', 'Excess'],
    element: 'Fire', modality: 'Mutable', planet: 'Jupiter'
  },
  capricorn: {
    slug: 'capricorn', name: 'Capricorn', glyph: '♑︎', dateRange: 'Dec 22 – Jan 19',
    about: [
      'Capricorn builds the mountain — patience, structure, and mastery.',
      'Responsibility today, reward tomorrow.',
    ],
    strengths: ['Discipline', 'Ambition', 'Endurance'],
    challenges: ['Workaholism', 'Rigidity', 'Detachment'],
    element: 'Earth', modality: 'Cardinal', planet: 'Saturn'
  },
  aquarius: {
    slug: 'aquarius', name: 'Aquarius', glyph: '♒︎', dateRange: 'Jan 20 – Feb 18',
    about: [
      'Aquarius innovates — future-forward, communal, and principled.',
      'It favors systems that uplift everyone.',
    ],
    strengths: ['Originality', 'Humanitarian', 'Independence'],
    challenges: ['Detachment', 'Rebellious streak', 'Stubborn ideals'],
    element: 'Air', modality: 'Fixed', planet: 'Saturn / Uranus'
  },
  pisces: {
    slug: 'pisces', name: 'Pisces', glyph: '♓︎', dateRange: 'Feb 19 – Mar 20',
    about: [
      'Pisces dreams — imagination, compassion, and surrender.',
      'It senses what words cannot say.',
    ],
    strengths: ['Empathy', 'Creativity', 'Spirituality'],
    challenges: ['Escapism', 'Boundaries', 'Overidealizing'],
    element: 'Water', modality: 'Mutable', planet: 'Jupiter / Neptune'
  },
}


