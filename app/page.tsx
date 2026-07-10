import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { StartProjectButton } from '@/components/start-project-modal'
import { services } from '@/lib/services'

const indexLinks = [
  { href: '/about', index: '01', label: 'About the Editor', blurb: 'Who is behind the cuts' },
  { href: '/showreel', index: '02', label: 'The Showreel', blurb: 'The work, in motion' },
  { href: '/skills', index: '03', label: 'Skills & Tools', blurb: 'The craft and the kit' },
  { href: '/services', index: '04', label: 'Services', blurb: 'What I can do for you' },
  { href: '/contact', index: '05', label: 'Contact', blurb: 'Start the conversation' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero — oversized type as the visual itself */}
      <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-between overflow-hidden px-4 pb-10 pt-16 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {'Editor \u00b7 Colorist \u00b7 Visual Storyteller \u2014 India'}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-balance text-[13vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[10vw] lg:text-[8.5rem]">
              {'Cut for '}
              <em className="font-serif normal-case italic text-primary">attention.</em>
              <br />
              {'Graded for '}
              <em className="font-serif normal-case italic text-primary">feeling.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {
                'Kabir Raj Singh \u2014 an 18-year-old editor and colorist building cinematic, retention-first edits. Every frame earns the next one.'
              }
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <StartProjectButton />
              <Link
                href="/showreel"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 ease-out hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 menu-item"
              >
                {'Watch the Reel'}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <a
            href="#index"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
            {'Scroll'}
          </a>
        </div>
      </section>

      {/* Shot-list style site index */}
      <section id="index" aria-label="Site index" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{'The Shot List'}</p>
          </Reveal>
          <ul className="mt-10">
            {indexLinks.map((item, i) => (
              <li key={item.href}>
                <Reveal delay={i * 60}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-4 border-b border-border py-6 transition-all duration-300 ease-out hover:border-primary hover:translate-x-1 menu-item"
                  >
                    <span className="flex items-baseline gap-4 sm:gap-8">
                      <span className="text-xs tracking-[0.2em] text-primary transition-all duration-300">{`/ ${item.index}`}</span>
                      <span className="text-2xl font-bold uppercase tracking-tight transition-all duration-300 group-hover:text-primary sm:text-4xl">
                        {item.label}
                      </span>
                    </span>
                    <span className="hidden text-xs uppercase tracking-[0.15em] text-muted-foreground transition-all duration-300 group-hover:text-foreground sm:block">
                      {item.blurb}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Oversized type divider — scene transition */}
      <section aria-hidden className="overflow-hidden border-t border-border py-10">
        <p className="whitespace-nowrap text-[8vw] font-black uppercase leading-none tracking-tight text-muted/60 lg:text-8xl">
          {'Edit \u00b7 Grade \u00b7 Render \u00b7 Repeat \u00b7 Edit \u00b7 Grade \u00b7 Render \u00b7 Repeat'}
        </p>
      </section>

      {/* Services teaser */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-5xl">
              {'Five ways to '}
              <em className="font-serif normal-case italic text-primary">work together</em>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 border border-border px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ease-out hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 menu-item"
                >
                  <span className="text-primary">{service.number}</span>
                  {service.title}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
