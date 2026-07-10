'use client'

import { useState } from 'react'
import { Reveal } from './reveal'
import { SectionEyebrow } from './section-eyebrow'
import { BeforeAfterSlider } from './before-after-slider'

const disciplines = [
  {
    number: '01',
    title: 'Short-Form Retention Edits',
    description: 'Hooks, pacing, and cuts engineered to keep viewers watching.',
    preview: '/images/preview-shortform.png',
  },
  {
    number: '02',
    title: 'Long-Form Storytelling',
    description: 'Narrative structure and rhythm across extended runtimes.',
    preview: '/images/preview-longform.png',
  },
  {
    number: '03',
    title: 'Documentary-Style Sequences',
    description: 'Observational pacing, interviews, and archival texture.',
    preview: '/images/preview-documentary.png',
  },
]

export function Showreel() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [gradingOpen, setGradingOpen] = useState(false)

  return (
    <section id="showreel" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionEyebrow number="002" name="Showreel" paren="Selected work" />
      </Reveal>

      {/* Main reel — cinematic letterboxed frame */}
      <Reveal delay={100}>
        <div className="mt-12 overflow-hidden rounded-sm bg-black">
          <div className="h-8 bg-black md:h-12" aria-hidden="true" />
          <div className="relative aspect-video w-full">
            <img
              src="/images/hero-reel.png"
              alt="Kabir Studios showreel"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/30">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/60 bg-background/60 backdrop-blur-sm transition-transform hover:scale-105">
                <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-primary" />
                <span className="sr-only">Play showreel</span>
              </span>
            </div>
            <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Showreel — 2026
            </span>
          </div>
          <div className="h-8 bg-black md:h-12" aria-hidden="true" />
        </div>
      </Reveal>

      {/* Disciplines list */}
      <div className="mt-16">
        {disciplines.map((d, i) => (
          <Reveal key={d.number} delay={i * 80}>
            <div
              onMouseEnter={() => setHovered(d.number)}
              onMouseLeave={() => setHovered(null)}
              className="group relative grid items-center gap-4 border-t border-border py-8 md:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-mono text-sm text-primary">{d.number}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">
                  {d.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
              {/* Hover preview */}
              <div
                aria-hidden="true"
                className={`pointer-events-none hidden overflow-hidden rounded-sm transition-all duration-500 md:block ${
                  hovered === d.number
                    ? 'w-48 opacity-100'
                    : 'w-0 opacity-0'
                }`}
              >
                <img
                  src={d.preview}
                  alt=""
                  className="aspect-video w-48 scale-105 object-cover transition-transform duration-700 group-hover:scale-100"
                />
              </div>
            </div>
          </Reveal>
        ))}

        {/* 04 — Color Grading: live before/after demo */}
        <Reveal delay={240}>
          <div className="border-t border-border py-8">
            <button
              type="button"
              onClick={() => setGradingOpen(!gradingOpen)}
              aria-expanded={gradingOpen}
              aria-controls="grading-demo"
              className="group grid w-full items-center gap-4 text-left md:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-mono text-sm text-primary">04</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">
                  Color Grading Breakdowns
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Don&apos;t take our word for it — drag the frame yourself.
                </p>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-primary md:block">
                {gradingOpen ? '( Close demo )' : '( Try the grade )'}
              </span>
            </button>
            <div
              id="grading-demo"
              className={`grid transition-[grid-template-rows] duration-500 ${
                gradingOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-8">
                  <BeforeAfterSlider />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Drag left / right to reveal the graded frame
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
