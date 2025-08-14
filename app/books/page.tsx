import BookCard from '@/components/BookCard'
import SectionHeading from '@/components/SectionHeading'
import { BOOKS } from '@/data/books'

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading title="Books" sub="Curated reads for every level" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {BOOKS.map((b) => (
          <BookCard key={b.slug} book={b} />
        ))}
      </div>
    </div>
  )
}


