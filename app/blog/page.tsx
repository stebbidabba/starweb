import Link from 'next/link'

const POSTS = [
  { slug: 'monthly-horoscopes', title: 'Monthly Horoscopes', blurb: 'A quick glance at the sky for your month ahead.' },
  { slug: 'what-is-a-birth-chart', title: 'What is a Birth Chart?', blurb: 'A beginner-friendly primer on the natal chart.' },
  { slug: 'elements-and-modalities', title: 'Elements and Modalities', blurb: 'How the building blocks of the zodiac shape expression.' },
  { slug: 'saturn-cycles', title: 'Saturn Cycles', blurb: 'Milestones of responsibility and growth.' },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">Blog</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {POSTS.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-purple2">
            <div className="font-heading text-xl text-white">{p.title}</div>
            <p className="mt-1 text-white/70">{p.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}


