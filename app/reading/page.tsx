"use client"
import { useState } from 'react'

export default function ReadingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [notes, setNotes] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo: form captured (no backend).')
    setName(''); setEmail(''); setBirthDate(''); setBirthTime(''); setCity(''); setCountry(''); setNotes('')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">Order a Personalized Reading</h1>
      <p className="mt-2 text-white/70">Birth time and place improve accuracy, but you can still receive insights without them.</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <label className="text-sm text-white/80">Name<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={name} onChange={(e)=>setName(e.target.value)} required/></label>
        <label className="text-sm text-white/80">Email<input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
        <label className="text-sm text-white/80">Birth date<input type="date" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} required/></label>
        <div className="grid grid-cols-2 gap-4">
          <label className="text-sm text-white/80">Birth time<input type="time" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={birthTime} onChange={(e)=>setBirthTime(e.target.value)} /></label>
          <label className="text-sm text-white/80">City<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={city} onChange={(e)=>setCity(e.target.value)} /></label>
        </div>
        <label className="text-sm text-white/80">Country<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={country} onChange={(e)=>setCountry(e.target.value)} /></label>
        <label className="text-sm text-white/80">Notes<textarea rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={notes} onChange={(e)=>setNotes(e.target.value)} /></label>
        <button className="mt-2 rounded-md bg-purple1 px-4 py-2 text-white hover:bg-purple2" type="submit">Submit (Demo)</button>
      </form>
    </div>
  )
}


