import { Reveal } from './reveal'
import { SectionEyebrow } from './section-eyebrow'
import { MarqueeBand } from './marquee-band'

const tools = [
  'Adobe Premiere Pro',
  'DaVinci Resolve',
  'Autodesk Maya',
  'ZBrush',
  'Adobe Creative Suite',
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionEyebrow number="003" name="Skills & Tools" paren="What we work with" />
        </Reveal>
      </div>

      <Reveal delay={100}>
        <MarqueeBand items={tools} speed="normal" className="mt-12" accent />
      </Reveal>

      {/* Asymmetric bento grid */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-6 md:grid-cols-3 md:grid-rows-2">
        <Reveal delay={150} className="md:col-span-2 md:row-span-2">
          <article className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary/50 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              ( 3D &amp; Environment Design )
            </span>
            <div className="mt-16 md:mt-24">
              <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Worlds built, not just cut.
              </h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Modeling and environment design in Autodesk Maya and ZBrush —
                the ability to build assets and spaces from scratch, not only
                assemble footage. It&apos;s a dimension most editors never
                touch.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={250}>
          <article className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              ( Applied AI Tools )
            </span>
            <div className="mt-10">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                AI-fluent workflow.
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                AI tooling folded directly into the edit — faster turnarounds,
                smarter workflows, backed by an AI &amp; CS engineering
                education.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={350}>
          <article className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              ( Cross-Disciplinary Eye )
            </span>
            <div className="mt-10">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Editing. 3D. Code.
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                A hybrid range across cutting, 3D design, and engineering —
                each discipline sharpening the others.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
