import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ScrollStory, StoryProgress } from '@/components/scroll-story'
import { StartProjectButton } from '@/components/start-project-modal'
import { services } from '@/lib/services'

const projects = [
  { title: 'Longform', type: 'Documentary / Narrative', image: '/images/preview-documentary.png' },
  { title: 'Shortform', type: 'Social / Retention', image: '/images/preview-shortform.png' },
  { title: 'The Grade', type: 'Color / Atmosphere', image: '/images/grade-after.png' },
]

export default function HomePage() {
  return (
    <main>
      <ScrollStory className="hero-story">
        <section className="hero-frame relative min-h-[calc(100svh-4rem)] overflow-hidden">
          <Image src="/images/hero-reel.png" alt="Cinematic frame from Kabir Studios" fill priority className="hero-image object-cover" sizes="100vw" />
          <div className="hero-scrim" />
          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-12 pt-24 sm:px-8 lg:pb-20">
            <p className="eyebrow text-primary">Editor · Colorist · Visual storyteller — India</p>
            <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.75rem,10vw,10rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
              Cut for <em className="font-serif font-normal italic text-primary">attention.</em><br />
              Graded for <em className="font-serif font-normal italic text-primary">feeling.</em>
            </h1>
            <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/20 pt-5 sm:flex-row sm:items-end">
              <p className="max-w-md text-base leading-relaxed text-white/70">Kabir Raj Singh builds cinematic, retention-first edits where every frame earns the next one.</p>
              <a href="#work" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/80 hover:text-primary"><ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /> Scroll to explore</a>
            </div>
          </div>
        </section>
      </ScrollStory>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40" id="work">
        <Reveal><p className="eyebrow text-primary">Selected work / 01—03</p></Reveal>
        <Reveal delay={100}><h2 className="display-title mt-6 max-w-4xl">The edit is invisible.<br /><em className="font-serif font-normal italic text-muted-foreground">The feeling isn&apos;t.</em></h2></Reveal>
        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className={index === 1 ? 'lg:mt-20' : ''}>
              <Link href="/showreel" className="group block">
                <div className="media-card aspect-[4/5] overflow-hidden bg-card"><Image src={project.image} alt={project.title} width={900} height={1100} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" /></div>
                <div className="mt-4 flex items-start justify-between border-t border-border pt-4"><div><h3 className="text-xl font-medium">{project.title}</h3><p className="mt-1 text-sm text-muted-foreground">{project.type}</p></div><ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ScrollStory className="process-story">
        <section className="process-frame relative min-h-[220vh] bg-card">
          <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"><div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><p className="eyebrow text-primary">The process / in motion</p><h2 className="display-title mt-6">Craft, with<br /><em className="font-serif font-normal italic text-muted-foreground">intention.</em></h2><p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">From the first selects to the final grade, each decision has a job: hold attention, shape emotion, and leave a mark.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">How I work <ArrowUpRight className="h-4 w-4" /></Link></div>
            <div className="process-media relative aspect-[4/3] overflow-hidden"><Image src="/images/grade-before.png" alt="Color grading before frame" fill className="process-before object-cover" sizes="(min-width: 1024px) 55vw, 100vw" /><Image src="/images/grade-after.png" alt="Color grading after frame" fill className="process-after object-cover" sizes="(min-width: 1024px) 55vw, 100vw" /><span className="process-label">Before / After</span></div>
          </div></div>
        </section>
      </ScrollStory>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40"><div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]"><Reveal><div><p className="eyebrow text-primary">What I do</p><h2 className="display-title mt-6">A full post<br />suite.</h2></div></Reveal><div className="divide-y divide-border border-y border-border">{services.map((service, index) => <Reveal key={service.slug} delay={index * 60}><Link href="/services" className="group flex items-center justify-between py-6"><span className="flex items-center gap-5"><span className="text-xs text-primary">{service.number}</span><span className="text-2xl font-medium tracking-tight group-hover:text-primary sm:text-3xl">{service.title}</span></span><ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></Link></Reveal>)}</div></div></section>

      <section className="contact-closer mx-5 mb-5 overflow-hidden rounded-2xl bg-primary px-6 py-24 text-primary-foreground sm:px-12 lg:px-20 lg:py-36"><div className="mx-auto max-w-7xl"><Reveal><p className="eyebrow">Have a story to tell?</p><h2 className="mt-6 max-w-4xl text-balance text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">Let&apos;s make it <em className="font-serif font-normal italic">move.</em></h2><div className="mt-12 flex flex-wrap items-center gap-5"><StartProjectButton className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"><Play className="mr-2 h-4 w-4 fill-current" /> Start a project</StartProjectButton><Link href="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">Contact <ArrowUpRight className="h-4 w-4" /></Link></div></Reveal></div></section>
    </main>
  )
}
