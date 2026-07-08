import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ViewfinderFrame } from '@/components/viewfinder-frame'
import { StartProjectButton } from '@/components/start-project-modal'

export const metadata: Metadata = {
  title: 'About — Kabir Raj Singh',
  description:
    'About Kabir Raj Singh — 18-year-old self-taught editor, colorist, and visual storyteller from India.',
}

const stats = [
  { label: 'Education', value: 'CSE Engineering', note: 'In Progress' },
  { label: 'Schooling', value: 'Class 12', note: 'Complete' },
  { label: 'Based', value: 'India', note: null },
  { label: 'Focus', value: 'Retention-first edits', note: null },
  { label: 'Style', value: 'Documentary / narrative-first', note: null },
  { label: 'Toolkit', value: 'Editor \u00b7 Colorist \u00b7 3D \u00b7 AI-fluent', note: null },
]

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionLabel index="01" label="About the Editor" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait with viewfinder framing */}
          <Reveal>
            <ViewfinderFrame>
              <Image
                src="/placeholder.svg?height=900&width=720"
                alt="Moody black-and-white backlit portrait of Kabir Raj Singh holding a cinema camera"
                width={720}
                height={900}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </ViewfinderFrame>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <h1 className="text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
                {'Self-taught. '}
                <em className="font-serif normal-case italic text-primary">Self-driven.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 flex flex-col gap-5 text-pretty text-base leading-relaxed text-muted-foreground">
                <p>
                  {
                    'I\u2019m Kabir Raj Singh \u2014 18 years old, from India, currently studying CSE engineering at a local college after completing Class 12. On paper, I\u2019m an engineering student. Off paper, I\u2019ve spent years teaching myself cinematography, editing, color grading, and 3D craft \u2014 frame by frame, tutorial by tutorial, project by project.'
                  }
                </p>
                <p>
                  {
                    'What pulls me forward is direction \u2014 the point where a cut, a grade, and a piece of sound become a feeling. I\u2019m eager to work with and learn from new people, because we only live once, and I\u2019d rather spend that time making things worth watching.'
                  }
                </p>
                <p>
                  {
                    'When I\u2019m not in the timeline, I\u2019m probably deep in car culture \u2014 studying the lines of a coupe the way I study the composition of a frame. Machines and cinema aren\u2019t so different: both are engineered to move you.'
                  }
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8">
                <StartProjectButton />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Quick-fact stat grid */}
        <div className="mt-20 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <div className="border-b border-border p-6 sm:border-r">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
                <p className="mt-3 flex flex-wrap items-baseline gap-2 text-lg font-bold uppercase tracking-tight">
                  {stat.value}
                  {stat.note && (
                    <span className="border border-primary/40 px-2 py-0.5 text-[10px] font-semibold tracking-[0.15em] text-primary">
                      {stat.note}
                    </span>
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Type-as-graphic divider */}
      <section aria-hidden className="overflow-hidden border-t border-border py-10">
        <p className="whitespace-nowrap text-[8vw] font-black uppercase leading-none tracking-tight text-muted/60 lg:text-8xl">
          {'We only live once \u00b7 We only live once \u00b7 We only live once'}
        </p>
      </section>
    </main>
  )
}
