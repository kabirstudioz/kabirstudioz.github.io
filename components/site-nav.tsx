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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300">
      <nav aria-label="Main navigation" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:text-primary menu-item"
          onClick={() => setMenuOpen(false)}
        >
          {'KRS'}
          <span className="text-primary">{'.'}</span>
        </Link>

        {/* Desktop links — slim, evenly spaced, generous letter-spacing with Apple animations */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'nav-link text-xs uppercase tracking-[0.2em] transition-all duration-300 menu-item relative',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <StartProjectButton className="border border-primary/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg menu-item">
            {'Start a Project'}
          </StartProjectButton>
        </div>

        {/* Mobile menu toggle with smooth animation */}
        <button
          type="button"
          className="p-2 transition-all duration-300 md:hidden menu-item"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl animate-fadeInDown md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {links.map((link, i) => (
              <li key={link.href} style={{ animation: `fadeInUp 0.3s ease 0.${i * 50}ms forwards` }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-3 text-sm uppercase tracking-[0.2em] transition-all duration-300 menu-item',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground hover:translate-x-1',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <StartProjectButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
