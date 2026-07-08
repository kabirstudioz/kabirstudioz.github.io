import type { Metadata } from 'next'
import { Clapperboard, Film, Palette, Timer } from 'lucide-react'
import { HoverVideoCard } from '@/components/hover-video-card'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ViewfinderFrame } from '@/components/viewfinder-frame'

export const metadata: Metadata = {
  title: 'Showreel — Kabir Raj Singh',
  description:
    'The showreel of Kabir Raj Singh — short-form retention edits, long-form storytelling, documentary sequences, and color grading breakdowns.',
}

const breakdown = [
  {
    icon: Timer,
    number: '01',
    title: 'Short-Form Retention Edits',
    description:
      'Fast, hook-driven cuts engineered for the first three seconds and every second after. Pacing, pattern interrupts, and sound design tuned for watch time.',
    video: '/videos/showreel/short-form.mp4',
  },
  {
    icon: Film,
    number: '02',
    title: 'Long-Form Storytelling',
    description:
      'Structured narratives that breathe. Scene construction, emotional pacing, and B-roll layering that carry a viewer through longer runtimes.',
    video: '/videos/showreel/long-form.mp4',
  },
  {
    icon: Clapperboard,
    number: '03',
    title: 'Documentary-Style Sequences',
    description:
      'Observational, narrative-first sequences \u2014 letting real moments lead while the edit quietly shapes the story around them.',
    video: '/videos/showreel/documentary.mp4',
  },
  {
    icon: Palette,
    number: '04',
    title: 'Color Grading Breakdowns',
    description:
      'Before-and-after grade work showing mood built from raw footage \u2014 contrast curves, split-tones, and cinematic palettes in DaVinci Resolve.',
    video: '/videos/showreel/color-grading.mp4',
  },
]

export default function ShowreelPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionLabel index="02" label="The Showreel" />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            {'One reel. '}
            <em className="font-serif normal-case italic text-primary">Every skill.</em>
          </h1>
        </Reveal>

        {/* The reel — centerpiece */}
        <Reveal delay={200}>
          <ViewfinderFrame className="mt-12">
            <div className="aspect-video w-full bg-card">
              <video
                controls
                muted
                playsInline
                preload="metadata"
                poster="/placeholder.svg?height=720&width=1280"
                className="h-full w-full object-cover"
                aria-label="Kabir Raj Singh showreel video"
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
                {'Your browser does not support the video tag.'}
              </video>
            </div>
          </ViewfinderFrame>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            {
              'A note on the footage: this reel uses stock and open-source material to demonstrate range in editing, grading, and pacing while I build toward original client work. Every cut, grade, and sound decision is mine.'
            }
          </p>
        </Reveal>
      </section>

      {/* Inside the Reel */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-5xl">
              {'Inside the '}
              <em className="font-serif normal-case italic text-primary">reel</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {breakdown.map((item, i) => (
              <Reveal key={item.number} delay={i * 80} className="bg-background">
                <HoverVideoCard videoSrc={item.video} videoLabel={item.title}>
                  <div className="flex h-full flex-col gap-4 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] text-primary">{`/ ${item.number}`}</span>
                      <item.icon className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-tight">{item.title}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </HoverVideoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
