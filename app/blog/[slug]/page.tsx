import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3 capitalize">{params.slug.replace(/-/g, ' ')}</h1>
      <div className="prose prose-invert max-w-none prose-headings:font-heading prose-a:text-purple2">
        <p className="mt-4 text-white/80">This is a demo article. Replace with your content.</p>
      </div>
      <Link href="/blog" className="mt-6 inline-block rounded-md border border-white/15 px-4 py-2 text-white/90 hover:border-purple2">Back to blog</Link>
    </div>
  )
}


