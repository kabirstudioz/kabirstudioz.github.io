import Link from 'next/link'

export default function TermsPage() {
  return <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8 lg:py-40"><Link href="/" className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">VIGIL / Home</Link><p className="eyebrow mt-20 text-primary">Legal / 01</p><h1 className="display-title mt-6">Terms of<br /><span className="text-primary">Service.</span></h1><div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground"><p>VIGIL provides voice-integrity signals as a decision-support layer. A verification result is not a guarantee of identity, intent, or truth beyond the specific signal checked.</p><p>Use VIGIL responsibly. Do not use verification results to expose private individuals, bypass consent, or make decisions that require human review without that review.</p><p>We are building for a safer acoustic commons. Product access, retention, and privacy practices may evolve as the protocol develops.</p></div></main>
}
