import Link from 'next/link'
import { getBook } from '@/data/books'

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug)
  if (!book) return notFound()
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={book.cover} alt={`${book.title} cover large`} className="w-full rounded-md" />
        </div>
        <div>
          <h1 className="font-heading text-3xl text-purple3">{book.title}</h1>
          <div className="mt-2 text-white/80">{book.price}</div>
          <p className="mt-4 text-white/70">A modern introduction with examples, diagrams, and exercises to help you read charts with confidence.</p>
          <div className="mt-4 flex gap-2">
            <button disabled title="Demo only" className="cursor-not-allowed rounded-md bg-purple1 px-4 py-2 text-white opacity-70">Buy now</button>
            <Link href="/books" className="rounded-md border border-white/15 px-4 py-2 text-white/90 hover:border-purple2">Back to books</Link>
          </div>
          <div className="mt-8">
            <h2 className="font-heading text-xl text-purple3">Sample pages</h2>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {['/img/book-sample-1.jpg','/img/book-sample-2.jpg','/img/book-sample-3.jpg'].map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="Sample page" className="aspect-[3/4] w-full rounded-md border border-white/10 bg-white/5 object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function notFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-heading text-4xl text-purple3">Book not found</h1>
      <Link href="/books" className="mt-6 inline-block rounded-md bg-purple1 px-4 py-2 text-white hover:bg-purple2">Back to books</Link>
    </div>
  )
}


