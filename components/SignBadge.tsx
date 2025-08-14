import { Sign } from '@/lib/zodiac'

export default function SignBadge({ sign, label }: { sign: Sign; label: string }) {
  const glyphs: Record<Sign, string> = {
    aries: '♈︎', taurus: '♉︎', gemini: '♊︎', cancer: '♋︎', leo: '♌︎', virgo: '♍︎',
    libra: '♎︎', scorpio: '♏︎', sagittarius: '♐︎', capricorn: '♑︎', aquarius: '♒︎', pisces: '♓︎',
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
      <span aria-hidden className="text-purple2">{glyphs[sign]}</span>
      <span className="text-white/90">{label}</span>
    </span>
  )
}


