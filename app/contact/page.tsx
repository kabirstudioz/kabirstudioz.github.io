import type { Metadata } from 'next'
import { Mail, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ContactForm } from '@/components/contact-form'
import { contactEmail, contactPhone, services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Contact — Kabir Raj Singh',
  description: 'Get in touch with Kabir Raj Singh — editor, colorist, and visual storyteller.',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ services?: string }>
}) {
  const params = await searchParams
  const selectedSlugs = params.services?.split(',').filter(Boolean) ?? []
  const selectedServices = services.filter((s) => selectedSlugs.includes(s.slug))

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionLabel index="05" label="Contact" />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            {'Let\u2019s make '}
            <em className="font-serif normal-case italic text-primary">something</em>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal delay={150}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {
                  'Have a project, an idea, or just a question? Reach out directly or use the form \u2014 I read everything.'
                }
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${contactEmail}`}
                  className="group flex items-center gap-4 border border-border p-4 transition-colors hover:border-primary"
                >
                  <Mail className="h-5 w-5 text-primary" aria-hidden />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">{'Email'}</span>
                    <span className="mt-1 block break-all text-sm font-semibold transition-colors group-hover:text-primary">
                      {contactEmail}
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:+91${contactPhone}`}
                  className="group flex items-center gap-4 border border-border p-4 transition-colors hover:border-primary"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">{'Phone'}</span>
                    <span className="mt-1 block text-sm font-semibold transition-colors group-hover:text-primary">
                      {`+91 ${contactPhone}`}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <ContactForm selectedServices={selectedServices} />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
