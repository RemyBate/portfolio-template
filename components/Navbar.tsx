'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const Item = ({ href, label }: { href: string; label: string }) => (
    <a href={href} className="block px-4 py-2 hover:text-indigo-600">{label}</a>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-xl">Remy<span className="text-indigo-600">Dev</span></Link>
        <button className="sm:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">☰</button>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <a href="#contact" className="rounded-lg bg-indigo-600 text-white px-4 py-2">Hire me</a>
        </div>
      </nav>
      {open && (
        <div className="sm:hidden border-t">
          <Item href="#about" label="About" />
          <Item href="#projects" label="Projects" />
          <Item href="#contact" label="Contact" />
        </div>
      )}
    </header>
  )
}
