import Link from 'next/link'
import { SIGNS, type Sign } from '@/lib/zodiac'
import SectionHeading from '@/components/SectionHeading'
import NewsletterBar from '@/components/NewsletterBar'

export default function SignPage({ params, searchParams }: { params: { slug: Sign }, searchParams: Record<string, string | string[] | undefined> }) {
  const sign = SIGNS[params.slug]
  if (!sign) return notFound()
  const date = typeof searchParams.date === 'string' ? searchParams.date : undefined

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="font-heading text-4xl text-purple3">{sign.name} <span className="text-white/70">{sign.glyph}</span></h1>
        <p className="mt-1 text-white/70">{sign.dateRange}{date ? ` • Based on ${date}` : ''}</p>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <SectionHeading title="About this sign" />
          <div className="space-y-3 text-white/80">
            {sign.about.map((p, i) => (<p key={i}>{p}</p>))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <SectionHeading title="Strengths" />
              <ul className="list-inside list-disc text-white/80">
                {sign.strengths.map(s => (<li key={s}>{s}</li>))}
              </ul>
            </div>
            <div>
              <SectionHeading title="Challenges" />
              <ul className="list-inside list-disc text-white/80">
                {sign.challenges.map(s => (<li key={s}>{s}</li>))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: 'Element', value: sign.element },
              { label: 'Modality', value: sign.modality },
              { label: 'Ruling Planet', value: sign.planet },
            ].map((chip) => (
              <span key={chip.label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{chip.label}: <span className="text-purple2">{chip.value}</span></span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/books" className="rounded-md bg-purple1 px-4 py-2 text-white hover:bg-purple2 focus-ring">Shop recommended books</Link>
            <Link href="/reading" className="rounded-md border border-white/15 px-4 py-2 text-white/90 hover:border-purple2 focus-ring">Order a reading</Link>
          </div>
        </div>

        <aside>
          <SectionHeading title="Get monthly updates" sub="Horoscopes & book releases" />
          <NewsletterBar />
        </aside>
      </div>
    </div>
  )
}

function notFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-heading text-4xl text-purple3">Sign not found</h1>
      <p className="mt-2 text-white/70">Return to the opener and try again.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-purple1 px-4 py-2 text-white hover:bg-purple2 focus-ring">Back home</Link>
    </div>
  )
}


