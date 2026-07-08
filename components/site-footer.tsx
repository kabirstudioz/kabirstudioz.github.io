import Link from 'next/link'
import { contactEmail, contactPhone } from '@/lib/services'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/showreel', label: 'Showreel' },
  { href: '/skills', label: 'Skills' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em]">
            {'Kabir Raj Singh'}
            <span className="text-primary">{'.'}</span>
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {'Editor \u00b7 Colorist \u00b7 Visual Storyteller'}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-xs leading-relaxed text-muted-foreground">
          <a href={`mailto:${contactEmail}`} className="block transition-colors hover:text-primary">
            {contactEmail}
          </a>
          <a href={`tel:+91${contactPhone}`} className="mt-1 block transition-colors hover:text-primary">
            {`+91 ${contactPhone}`}
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs tracking-wide text-muted-foreground sm:px-6">
          {'\u00a9 '}
          {new Date().getFullYear()}
          {' Kabir Raj Singh. All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
