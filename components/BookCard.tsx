import Link from 'next/link'

export interface BookItem {
  slug: string
  title: string
  price: string
  cover: string
  tags: string[]
}

export default function BookCard({ book }: { book: BookItem }) {
  return (
    <div className="group card-translucent p-3">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={book.cover} alt={`${book.title} cover`} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/30 text-sm text-white/95 backdrop-blur-sm transition md:group-hover:flex">View details</div>
      </div>
      <div className="mt-3">
        <div className="text-sm text-white/70">{book.price}</div>
        <div className="mt-1 line-clamp-2 font-medium text-white/90">{book.title}</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {book.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">{t}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Link href={`/books/${book.slug}`} className="btn-outline">View details</Link>
          <button disabled title="Demo only" className="cursor-not-allowed rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/60">Add to cart</button>
        </div>
      </div>
    </div>
  )
}


