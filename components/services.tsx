import { Reveal } from './reveal'
import { SectionEyebrow } from './section-eyebrow'

const services = [
  {
    title: 'Video Editing',
    context:
      'Short-form and long-form edits built around viewer retention, plus documentary-style narrative editing.',
    includes: [
      'Short-form retention cuts',
      'Long-form & documentary edits',
      'Platform-ready exports',
    ],
  },
  {
    title: 'Color Grading',
    context:
      'Professional-grade color work to give footage a cinematic, polished finish.',
    includes: [
      'Full-project grading',
      'Look development',
      'Client-ready delivery formats',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionEyebrow number="004" name="Services" paren="What we do" />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 120}>
            <article className="flex h-full flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary/50 md:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.context}
              </p>
              <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-mono text-sm text-foreground"
                  >
                    <span className="text-primary">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
