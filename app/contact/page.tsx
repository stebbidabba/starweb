"use client"
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); alert('Demo: message captured (no backend).'); setName(''); setEmail(''); setMessage('') }
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">Contact</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <label className="text-sm text-white/80">Name<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={name} onChange={(e)=>setName(e.target.value)} required/></label>
        <label className="text-sm text-white/80">Email<input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
        <label className="text-sm text-white/80">Message<textarea rows={6} className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={message} onChange={(e)=>setMessage(e.target.value)} required/></label>
        <button className="mt-2 rounded-md bg-purple1 px-4 py-2 text-white hover:bg-purple2">Send (Demo)</button>
      </form>
    </div>
  )
}


