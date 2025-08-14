"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const headerClass = isHome
    ? 'absolute inset-x-0 top-0 z-40 bg-transparent border-transparent'
    : 'sticky top-0 z-40 border-b border-white/10 bg-[#0B0A10]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B0A10]/50'

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label="Sigrun Star home" className="flex items-center">
          <div className="relative h-12 w-12 overflow-visible">
            <Image src="/img/logo.png" alt="Sigrun Star logo" width={48} height={48} priority className="h-12 w-12 rounded transform origin-center scale-150 translate-y-[4px]" />
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


