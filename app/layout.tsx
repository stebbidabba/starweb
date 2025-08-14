import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import Image from 'next/image'

const heading = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-heading', display: 'swap' })
const body = Lato({ subsets: ['latin'], weight: ['400','700'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: 'Sigrun Star – Astrology Books & Readings',
  description: 'Discover your zodiac with Sigrun Star. A dark, elegant demo with books, readings, horoscopes, and more.',
  metadataBase: new URL('https://demo.local'),
  openGraph: {
    title: 'Sigrun Star',
    description: 'Discover your zodiac with Sigrun Star',
    url: 'https://demo.local',
    siteName: 'Sigrun Star',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Sigrun Star' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sigrun Star',
    description: 'Discover your zodiac with Sigrun Star',
    images: ['/og.jpg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen text-white">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0A10]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B0A10]/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label="Sigrun Star home" className="flex items-center">
          <div className="relative h-12 w-12 overflow-visible">
            <Image src="/img/logo.png" alt="Sigrun Star logo" width={48} height={48} priority className="h-12 w-12 rounded transform origin-center scale-150" />
          </div>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <NavLink href="/astrology">Horoscopes</NavLink>
          <NavLink href="/books">Books</NavLink>
          <NavLink href="/reading">Readings</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/offers">Offers</NavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/80 transition-colors hover:text-purple2 focus-ring">
      {children}
    </Link>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0B0A10]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <div className="flex items-center gap-3">
          <Image src="/img/logo.png" alt="Sigrun Star logo" width={28} height={28} className="h-7 w-7 rounded" />
          <p className="text-sm text-white/70">website made by <a href="https://vefstaedi.is" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-purple2">vefstaedi.is</a></p>
        </div>
        <div className="flex items-center gap-5 text-white/80">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-purple2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-purple2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3V6h-3c-2.4 0-4 1.2-4 4v2H8v3h2v6h3v-6h2.6l.4-3H13v-2c0-1 .5-1.5 1.6-1.5Z" />
            </svg>
          </a>
          <a href="mailto:hello@sigrunstar.example" aria-label="Email" className="hover:text-purple2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}


