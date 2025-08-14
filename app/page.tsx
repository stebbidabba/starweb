"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Starfield from '@/components/Starfield'
import ZodiacWheel from '@/components/ZodiacWheel'
import { SIGNS, type Sign } from '@/lib/zodiac'
import SectionHeading from '@/components/SectionHeading'

export default function HomePage() {
  const router = useRouter()
  const pick = (sign: Sign) => router.push(`/sign/${sign}`)

  return (
    <section className="relative overflow-hidden">
      {/* HERO with background image */}
      <div className="relative flex min-h-screen items-center justify-center px-4 pt-16 pb-0 md:pt-20 md:pb-0">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/starrynight" alt="Starry portrait background" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
        {/* Overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <Starfield />
        <div className="pointer-events-none absolute right-10 top-10 -z-10 h-72 w-72 animate-rotate-slow text-white/30">
          <ZodiacWheel className="h-full w-full" />
        </div>

        {/* Centered content */}
        <div className="mx-auto w-full max-w-5xl text-center -translate-y-6 md:-translate-y-10">
          <h1 className="font-heading tracking-wide text-5xl sm:text-6xl text-purple3 drop-shadow-[0_0_16px_rgba(155,92,246,0.25)]">Choose your zodiac sign</h1>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {Object.values(SIGNS).map((s) => (
              <button key={s.slug} onClick={() => pick(s.slug)} className="card-translucent p-4 text-left hover:shadow-glow focus-ring">
                <div className="font-heading text-xl text-white">{s.glyph} {s.name}</div>
                <div className="text-xs text-white/70">{s.dateRange}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Intro section */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Title in a box (match style, keep current fonts/colors) */}
          <div className="mx-auto max-w-xl rounded-md border border-white/15 bg-white/5 px-6 py-5 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-purple3">About Sigrun Star</h2>
          </div>
          {/* Text under the box */}
          <div className="mt-8 space-y-4 text-center text-white/80">
            <p>
              Astrology made approachable — discover your sign, explore deeper insights, and find resources to support your journey.
            </p>
            <p>
              Sigrun Star is a calm, insightful place to learn about your zodiac and chart. We focus on clarity and practicality so you can turn cosmic patterns into everyday guidance.
            </p>
            <p>
              Whether you are just getting started or looking to go deeper, you will find curated books, personal readings, and monthly updates designed to help you navigate decisions, relationships, and growth with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* What we offer */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title="What we offer" sub="Explore books, readings, cards, articles, and bundle discounts" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <a href="/books" className="card-translucent p-4 hover:shadow-glow">
            <div className="font-heading text-lg text-white">📚 Books</div>
            <p className="mt-1 text-sm text-white/70">Curated titles for every level.</p>
          </a>
          <a href="/reading" className="card-translucent p-4 hover:shadow-glow">
            <div className="font-heading text-lg text-white">✨ Readings</div>
            <p className="mt-1 text-sm text-white/70">Personalized guidance sessions.</p>
          </a>
          <a href="/cards" className="card-translucent p-4 hover:shadow-glow">
            <div className="font-heading text-lg text-white">🃏 Cards</div>
            <p className="mt-1 text-sm text-white/70">Tarot & oracle card insights.</p>
          </a>
          <a href="/blog" className="card-translucent p-4 hover:shadow-glow">
            <div className="font-heading text-lg text-white">📝 Blog</div>
            <p className="mt-1 text-sm text-white/70">Horoscopes and articles.</p>
          </a>
          <a href="/offers" className="card-translucent p-4 hover:shadow-glow">
            <div className="font-heading text-lg text-white">🎁 2 books = 10% off</div>
            <p className="mt-1 text-sm text-white/70">Bundle any two and save.</p>
          </a>
        </div>
      </div>
    </section>
  )
}


