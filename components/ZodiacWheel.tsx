const SPOKES = Array.from({ length: 12 }).map((_, i) => {
  const angle = (i / 12) * Math.PI * 2
  const x = Math.round(256 + Math.cos(angle) * 250)
  const y = Math.round(256 + Math.sin(angle) * 250)
  return { x, y }
})

export default function ZodiacWheel({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden suppressHydrationWarning>
      <g opacity="0.15" stroke="currentColor" strokeWidth="1">
        <circle cx="256" cy="256" r="250" />
        <circle cx="256" cy="256" r="200" />
        <circle cx="256" cy="256" r="150" />
        {SPOKES.map((p, i) => (
          <line key={i} x1={256} y1={256} x2={p.x} y2={p.y} />
        ))}
      </g>
    </svg>
  )
}


