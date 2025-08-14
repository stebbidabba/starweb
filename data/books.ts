import type { BookItem } from '@/components/BookCard'

export const BOOKS: BookItem[] = [
  { slug: 'beginner-guide', title: 'Beginner Guide to Astrology', price: '$22', cover: '/img/book-1.svg', tags: ['Beginner', 'Natal'] },
  { slug: 'birth-chart-mapping', title: 'Birth Chart Mapping', price: '$28', cover: '/img/book-2.svg', tags: ['Natal'] },
  { slug: 'synastry-secrets', title: 'Synastry Secrets', price: '$26', cover: '/img/book-3.svg', tags: ['Synastry'] },
  { slug: 'lunar-living', title: 'Lunar Living', price: '$24', cover: '/img/book-4.svg', tags: ['Moon', 'Beginner'] },
  { slug: 'timing-techniques', title: 'Timing Techniques', price: '$30', cover: '/img/book-5.svg', tags: ['Prediction'] },
  { slug: 'astro-symbols', title: 'Astrological Symbols', price: '$20', cover: '/img/book-6.svg', tags: ['Symbols', 'Beginner'] },
  { slug: 'retrogrades', title: 'Rethinking Retrogrades', price: '$18', cover: '/img/book-7.svg', tags: ['Mercury', 'Beginner'] },
  { slug: 'houses-decoded', title: 'Houses Decoded', price: '$25', cover: '/img/book-8.svg', tags: ['Natal'] },
]

export function getBook(slug: string) {
  return BOOKS.find((b) => b.slug === slug)
}


