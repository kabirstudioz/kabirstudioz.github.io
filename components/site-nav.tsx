'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { StartProjectButton } from '@/components/start-project-modal'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/showreel', label: 'Showreel' },
  { href: '/skills', label: 'Skills' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.25em] transition-colors hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          {'KRS'}
          <span className="text-primary">{'.'}</span>
        </Link>

        {/* Desktop links — slim, evenly spaced, generous letter-spacing */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-xs uppercase tracking-[0.2em] transition-colors hover:text-foreground',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <StartProjectButton className="border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            {'Start a Project'}
          </StartProjectButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="p-2 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-3 text-sm uppercase tracking-[0.2em] transition-colors',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <StartProjectButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
