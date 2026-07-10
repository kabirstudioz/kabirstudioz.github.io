import { Reveal } from './reveal'
import { SectionEyebrow } from './section-eyebrow'

const contacts = [
  {
    label: 'Email',
    value: 'kabirrajsinghmavi13@gmail.com',
    href: 'mailto:kabirrajsinghmavi13@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 99886 13229',
    href: 'tel:+919988613229',
  },
  {
    label: 'Instagram',
    value: '@kabir.studioz',
    href: 'https://instagram.com/kabir.studioz',
  },
  {
    label: 'YouTube',
    value: '@The.Kabir.Studios',
    href: 'https://youtube.com/@The.Kabir.Studios',
  },
  {
    label: 'LinkedIn',
    value: 'kabir-raj-singh',
    href: 'https://linkedin.com/in/kabir-raj-singh-9a33b1279',
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionEyebrow number="005" name="Contact" paren="Start a project" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-12 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Let&apos;s Create <span className="text-primary">Something.</span>
        </h2>
      </Reveal>

      <div className="mt-14">
        {contacts.map((contact, i) => (
          <Reveal key={contact.label} delay={i * 60}>
            <a
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={
                contact.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="group flex flex-col gap-1 border-t border-border py-5 transition-colors hover:bg-secondary/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {contact.label}
              </span>
              <span className="text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                {contact.value}
                <span className="ml-3 inline-block font-mono text-sm text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  {'->'}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
