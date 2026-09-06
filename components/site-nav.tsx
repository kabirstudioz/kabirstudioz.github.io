'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const links = [{ href: '/', label: 'Home' }, { href: '/how-it-works', label: 'How it works' }, { href: '/about', label: 'About VIGIL' }]

export function SiteNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"><nav aria-label="Main navigation" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"><Link href="/" className="text-sm font-bold uppercase tracking-[.28em]" onClick={() => setMenuOpen(false)}>VIGIL<span className="text-primary">.</span></Link><ul className="hidden items-center gap-9 md:flex">{links.map((link) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={cn('text-[10px] font-semibold uppercase tracking-[.22em] transition-colors', pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}>{link.label}</Link></li>)}</ul><div className="hidden items-center gap-4 md:flex"><ThemeToggle /><Link href="/how-it-works" className="rounded-full bg-primary px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.18em] text-primary-foreground transition-transform hover:scale-[1.03]">Access protocol</Link></div><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="p-2">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></nav>{menuOpen && <div className="border-t border-border bg-background px-5 py-6 md:hidden"><ul className="flex flex-col gap-5">{links.map((link) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined} onClick={() => setMenuOpen(false)} className={cn('text-sm font-semibold uppercase tracking-[.2em]', pathname === link.href ? 'text-primary' : 'text-muted-foreground')}>{link.label}</Link></li>)}</ul></div>}</header>
}
