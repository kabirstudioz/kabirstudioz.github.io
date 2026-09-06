import Link from 'next/link'
import { ArrowDown, ArrowRight, Check, LockKeyhole, Radio, ShieldCheck, Waves } from 'lucide-react'
import { VigilMotion, ScanLine } from '@/components/vigil-motion'

const signals = [
  { icon: Radio, label: 'LIVE INPUT', value: '48 kHz / verified' },
  { icon: Waves, label: 'VOICEPRINT', value: '98.7% coherence' },
  { icon: LockKeyhole, label: 'CHAIN OF CUSTODY', value: 'End-to-end sealed' },
]

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <VigilMotion />
      <section className="vigil-hero relative min-h-[calc(100svh-4.5rem)] border-b border-border">
        <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-end gap-12 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:pb-20">
          <div className="relative z-10" data-reveal>
            <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.3em] text-primary"><span className="pulse-dot" />System online / v.02.26</div>
            <h1 className="max-w-5xl text-balance text-[clamp(4.4rem,11vw,10.5rem)] font-semibold leading-[.78] tracking-[-.09em]">Trust<br /><span className="text-primary">the signal.</span></h1>
            <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground">VIGIL is the voice-integrity layer for a world that can no longer hear the difference between real and generated.</p>
            <a href="#threat" className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-foreground transition-colors hover:text-primary"><ArrowDown className="h-4 w-4 text-primary" />Explore the protocol</a>
          </div>
          <div className="relative min-h-[18rem] lg:min-h-[30rem]" data-scrub>
            <div className="signal-orb absolute inset-0 m-auto aspect-square max-w-[28rem] rounded-full border border-primary/25" />
            <div className="signal-orb signal-orb--inner absolute inset-[16%] rounded-full border border-primary/35" />
            <div className="absolute inset-0 flex items-center justify-center"><div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-primary bg-primary/10 text-primary shadow-[0_0_90px_-20px_var(--primary)]"><ShieldCheck className="h-12 w-12" strokeWidth={1} /><span className="absolute -bottom-8 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[.3em] text-primary">Integrity field</span></div></div>
            <div className="absolute right-0 top-1/4 border border-border bg-card/70 p-3 text-[9px] uppercase tracking-[.18em] backdrop-blur"><span className="text-muted-foreground">Signal state</span><br /><span className="text-primary">Authentic / 00:00:04</span></div>
          </div>
        </div>
      </section>

      <section id="threat" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div data-reveal><p className="eyebrow text-primary">01 / The threat</p><h2 className="display-title mt-6">A voice<br /><em className="font-serif font-normal italic text-muted-foreground">is evidence.</em></h2></div>
          <div data-reveal className="max-w-2xl lg:pt-16"><p className="text-2xl leading-tight tracking-tight text-foreground sm:text-4xl">Synthetic media has moved from novelty to infrastructure. The voice note from your CFO. The call from your child. The testimony in the feed.</p><p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">VIGIL gives every voice a cryptographic heartbeat, so people and systems can verify what they hear before trust becomes an attack surface.</p></div>
        </div>
        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-3">{signals.map(({ icon: Icon, label, value }) => <div key={label} className="bg-background p-6" data-reveal><Icon className="h-5 w-5 text-primary" /><p className="mt-10 text-[10px] font-semibold uppercase tracking-[.24em] text-muted-foreground">{label}</p><p className="mt-2 text-sm">{value}</p></div>)}</div>
      </section>

      <section className="protocol-section relative border-y border-border bg-card"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:py-40"><div data-reveal><p className="eyebrow text-primary">02 / How it works</p><h2 className="display-title mt-6">Three checks.<br /><em className="font-serif font-normal italic text-muted-foreground">One truth.</em></h2><p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">A lightweight protocol that travels with a voice from microphone to memory.</p></div><div className="space-y-0">{['Capture the source', 'Bind the identity', 'Verify the moment'].map((title, index) => <div key={title} className="relative flex gap-6 border-t border-border py-8" data-reveal><span className="text-xs text-primary">0{index + 1}</span><div><h3 className="text-2xl tracking-tight">{title}</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{index === 0 ? 'VIGIL reads the acoustic fingerprint at the edge, before compression can erase its origin.' : index === 1 ? 'A private identity seal binds the recording to its source without exposing the person behind it.' : 'Anyone can scan the signal and receive a clear, human-readable confidence result.'}</p></div><ArrowRight className="ml-auto mt-1 h-5 w-5 text-muted-foreground" /></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div data-reveal><p className="eyebrow text-primary">03 / The verification layer</p><h2 className="display-title mt-6">Make trust<br /><span className="text-primary">visible.</span></h2><p className="mt-8 max-w-md leading-relaxed text-muted-foreground">A quiet signal in the places where certainty matters most: newsrooms, financial operations, family group chats, and the public record.</p><Link href="/how-it-works" className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-foreground hover:text-primary">Read the protocol <ArrowRight className="h-4 w-4 text-primary" /></Link></div><div className="relative overflow-hidden border border-border bg-card p-6 sm:p-10" data-reveal><ScanLine /><div className="flex items-center justify-between border-b border-border pb-5 text-[10px] uppercase tracking-[.22em] text-muted-foreground"><span>VIGIL / VERIFY</span><span className="text-primary">Live scan</span></div><div className="py-12 text-center"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary"><Check className="h-10 w-10" /></div><p className="mt-8 text-3xl tracking-tight">Authentic signal</p><p className="mt-2 text-sm text-muted-foreground">Confidence score / 99.2%</p></div><div className="grid grid-cols-2 gap-4 border-t border-border pt-5 text-[10px] uppercase tracking-[.16em] text-muted-foreground"><span>Origin <b className="ml-2 font-normal text-foreground">Bound</b></span><span>Alteration <b className="ml-2 font-normal text-primary">None</b></span></div></div></div></section>

      <section className="mx-5 mb-5 overflow-hidden rounded-2xl bg-primary px-6 py-24 text-primary-foreground sm:px-12 lg:px-20 lg:py-36"><div className="mx-auto max-w-7xl" data-reveal><p className="eyebrow">The future of voice</p><h2 className="mt-6 max-w-4xl text-balance text-[clamp(3.8rem,9vw,9rem)] font-semibold leading-[.8] tracking-[-.08em]">Don&apos;t just<br />listen. <em className="font-serif font-normal italic">know.</em></h2><Link href="/how-it-works" className="mt-12 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em]">Enter VIGIL <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  )
}
