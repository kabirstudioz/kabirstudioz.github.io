import type { Metadata } from 'next'
import { Sparkles } from 'lucide-react'
import { HoverVideoCard } from '@/components/hover-video-card'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'Skills & Tools — Kabir Raj Singh',
  description:
    'Skills and tools of Kabir Raj Singh — video editing, color grading, motion design, 3D modeling, and the software behind them.',
}

const tools = [
  'Premiere Pro',
  'DaVinci Resolve',
  'After Effects',
  'Photoshop',
  'Lightroom',
  'Autodesk Maya',
  'ZBrush',
]

const skills = [
  {
    title: 'Video Editing',
    description: 'Narrative structure, pacing, and rhythm across short-form and long-form.',
    video: '/videos/skills/video-editing.mp4',
  },
  {
    title: 'Motion Design',
    description: 'Kinetic type, animated titles, and graphic movement built in After Effects.',
    video: '/videos/skills/motion-design.mp4',
  },
  {
    title: 'Motion Compositing',
    description: 'Layered VFX shots \u2014 tracking, keying, and blending elements into real footage.',
    video: '/videos/skills/motion-compositing.mp4',
  },
  {
    title: 'Color Grading',
    description: 'Cinematic grades and looks developed node by node in DaVinci Resolve.',
    video: '/videos/skills/color-grading.mp4',
  },
  {
    title: '3D Modeling & Texturing',
    description: 'Hard-surface and organic modeling in Maya and ZBrush, textured for render.',
    video: '/videos/skills/3d-modeling.mp4',
  },
  {
    title: 'Lighting',
    description: 'Cinematic lighting for 3D scenes and an eye for practical light on set.',
    video: '/videos/skills/lighting.mp4',
  },
  {
    title: 'Matte Painting',
    description: 'Painted and composited environments that extend worlds beyond the frame.',
    video: '/videos/skills/matte-painting.mp4',
  },
  {
    title: 'Storyboard & Concept Art',
    description: 'Storyboard conceptualization and concept art to plan shots before rolling.',
    video: '/videos/skills/storyboard.mp4',
  },
  {
    title: 'Photo Editing',
    description: 'Retouching, compositing, and color work in Photoshop and Lightroom.',
    video: '/videos/skills/photo-editing.mp4',
  },
]

export default function SkillsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionLabel index="03" label="Skills & Tools" />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            {'The craft and '}
            <em className="font-serif normal-case italic text-primary">the kit</em>
          </h1>
        </Reveal>

        {/* Tool strip */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-6">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{'Toolkit'}</span>
            {tools.map((tool) => (
              <span key={tool} className="text-sm font-semibold uppercase tracking-[0.15em]">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Skill cards */}
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 50} className="bg-background">
              <HoverVideoCard videoSrc={skill.video} videoLabel={skill.title}>
                <div className="flex h-full flex-col gap-3 p-6">
                  <span className="text-xs tracking-[0.2em] text-primary">{`/ ${String(i + 1).padStart(2, '0')}`}</span>
                  <h2 className="text-base font-bold uppercase tracking-tight">{skill.title}</h2>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                </div>
              </HoverVideoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Learning module — visually distinct */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="border border-dashed border-primary/40 p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{'Currently Learning'}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-4xl">{'AI Engineering'}</h2>
                <span className="border border-primary/40 px-2 py-0.5 text-[10px] font-semibold tracking-[0.15em] text-primary">
                  {'\u00b7 Still Learning'}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {
                  'Going deeper than using AI tools \u2014 studying how they\u2019re built. This sits apart from my established skills on purpose: it\u2019s in progress, and I\u2019d rather be honest about that than pad the list.'
                }
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
