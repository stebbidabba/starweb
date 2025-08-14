import Link from 'next/link'
import { SIGNS } from '@/lib/zodiac'

export default function AstrologyIntroPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">Introduction to Astrology</h1>
      <p className="mt-2 text-white/85">A brief primer to help you get oriented. Explore each sign below.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Object.values(SIGNS).map((s) => (
          <Link key={s.slug} href={`/sign/${s.slug}`} className="card-translucent p-4 hover:shadow-glow">
            <div className="font-heading text-lg text-white">{s.glyph} {s.name}</div>
            <div className="text-sm text-white/70">{s.dateRange}</div>
            <div className="mt-2 text-xs text-purple3 hover:underline">Learn more →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}


