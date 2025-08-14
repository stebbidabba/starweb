import Link from 'next/link'

export default function OffersPage() {
  const bundles = [
    { title: 'Any 2 books', blurb: 'Save 10% on any two titles', badge: '10% off' },
    { title: 'Beginner Bundle', blurb: 'Starter set for chart reading', badge: 'Best value' },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">Offers & Bundles</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {bundles.map((b) => (
          <div key={b.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div className="font-heading text-xl text-white">{b.title}</div>
              <span className="rounded-full border border-purple2/30 bg-purple2/10 px-3 py-1 text-xs text-purple3">{b.badge}</span>
            </div>
            <p className="mt-2 text-white/70">{b.blurb}</p>
            <Link href="/books" className="mt-4 inline-block rounded-md bg-purple1 px-4 py-2 text-white hover:bg-purple2">Browse books</Link>
          </div>
        ))}
      </div>
    </div>
  )
}


