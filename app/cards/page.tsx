export default function CardsPage() {
  const items = [
    { title: 'Daily Tarot Pull', blurb: 'A single-card insight for your day.' },
    { title: 'Three-Card Spread', blurb: 'Past, present, and near future.' },
    { title: 'Zodiac Oracle', blurb: 'A themed oracle draw for your sign.' },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">Cards (Demo)</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="card-translucent p-4">
            <div className="font-heading text-lg text-white">{i.title}</div>
            <p className="mt-1 text-white/70">{i.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


