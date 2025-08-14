"use client"
import { useEffect, useRef } from 'react'

export default function Starfield({ density = 80 }: { density?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const count = density
    const stars: HTMLDivElement[] = []
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      s.style.left = Math.random() * 100 + '%'
      s.style.top = Math.random() * 100 + '%'
      s.style.opacity = (0.2 + Math.random() * 0.8).toString()
      s.style.animationDelay = `${Math.random() * 3}s`
      container.appendChild(s)
      stars.push(s)
    }
    return () => { stars.forEach(s => s.remove()) }
  }, [density])

  return <div ref={containerRef} aria-hidden className="starfield" />
}


