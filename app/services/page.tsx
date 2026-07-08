import type { Metadata } from 'next'
import { HoverVideoCard } from '@/components/hover-video-card'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { StartProjectButton } from '@/components/start-project-modal'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services — Kabir Raj Singh',
  description:
    'Services by Kabir Raj Singh — video editing, colour grading, 3D modeling and rendering, motion designing, and applied AI tools.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionLabel index="04" label="Services" />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            {'What I do, '}
            <em className="font-serif normal-case italic text-primary">for you</em>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70} className="bg-background">
              <HoverVideoCard videoSrc={service.video} videoLabel={service.title}>
                <div className="flex h-full flex-col gap-4 p-6 sm:p-8">
                  <span className="text-3xl font-black tracking-tight text-primary">{service.number}</span>
                  <h2 className="text-lg font-bold uppercase tracking-tight">{service.title}</h2>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </HoverVideoCard>
            </Reveal>
          ))}
          {/* CTA card completes the grid */}
          <Reveal delay={services.length * 70} className="bg-background">
            <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
              <p className="text-lg font-bold uppercase leading-snug tracking-tight">
                {'Have something '}
                <em className="font-serif normal-case italic text-primary">in mind?</em>
              </p>
              <div>
                <StartProjectButton />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-pretty text-xs leading-relaxed text-muted-foreground">
            {
              'Note: Applied AI Tools is a client-facing service I already offer. AI Engineering \u2014 listed under Skills \u2014 is something I\u2019m still learning, and the two are kept deliberately separate.'
            }
          </p>
        </Reveal>
      </section>

      {/* Type-as-graphic divider */}
      <section aria-hidden className="overflow-hidden border-t border-border py-10">
        <p className="whitespace-nowrap text-[8vw] font-black uppercase leading-none tracking-tight text-muted/60 lg:text-8xl">
          {'Story first \u00b7 Retention always \u00b7 Story first \u00b7 Retention always'}
        </p>
      </section>
    </main>
  )
}
