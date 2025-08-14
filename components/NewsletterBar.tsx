"use client"
import { useState } from 'react'

export default function NewsletterBar() {
  const [email, setEmail] = useState('')
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo: Newsletter captured (no backend).')
    setEmail('')
  }
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2">
      <input
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-ring"
      />
      <button className="rounded-md bg-purple1 px-3 py-2 text-sm font-medium text-white hover:bg-purple2 focus-ring" type="submit">Join</button>
    </form>
  )
}


