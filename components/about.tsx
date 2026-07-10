import { Reveal } from './reveal'
import { SectionEyebrow } from './section-eyebrow'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionEyebrow number="001" name="About" paren="Who is behind the cut" />
      </Reveal>

      <div className="mt-12 grid items-start gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <Reveal delay={100}>
          <figure className="relative mx-auto max-w-xs md:mx-0">
            <img
              src="/images/kabir-portrait.png"
              alt="Portrait of Kabir Raj Singh"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] of text-muted-foreground">
              Kabir Raj Singh — Est. 2007
            </figcaption>
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-sm border border-primary/30" />
          </figure>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col gap-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A digital-native editor,
              <span className="text-primary"> built for the retention era.</span>
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Kabir Raj Singh is an 18-year-old, self-driven content creator and
              video editor operating as Kabir Studios. He cuts short-form and
              long-form video engineered for viewer retention, builds
              documentary-style narratives, and finishes footage with
              professional color grading that gives every frame a cinematic
              weight.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Currently pursuing AI &amp; Computer Science Engineering, he
              brings a hybrid skill set most editors don&apos;t — 3D and
              environment design in Maya and ZBrush, applied AI tools inside the
              creative workflow, and the technical fluency of someone who grew
              up inside the platforms he edits for. Not a traditional editor. A
              next-generation one.
            </p>
            <dl className="mt-2 grid gap-4 border-t border-border pt-6 font-mono text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Education
                </dt>
                <dd className="mt-1 text-foreground">
                  AI &amp; CS Engineering — in progress
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Schooling
                </dt>
                <dd className="mt-1 text-foreground">12th grade — CBSE board</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
