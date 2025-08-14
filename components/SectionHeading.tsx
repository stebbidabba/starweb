export default function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-heading text-2xl text-purple3">{title}</h2>
      {sub ? <p className="mt-1 text-sm text-white/70">{sub}</p> : null}
    </div>
  )
}


