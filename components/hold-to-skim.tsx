'use client'

import { useEffect, useRef, useState } from 'react'

export function HoldToSkim() {
  const [holding, setHolding] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!holding) {
      cancelAnimationFrame(rafRef.current)
      return
    }
    const step = () => {
      window.scrollBy({ top: 22 })
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [holding])

  return (
    <button
      type="button"
      onPointerDown={() => setHolding(true)}
      onPointerUp={() => setHolding(false)}
      onPointerLeave={() => setHolding(false)}
      onPointerCancel={() => setHolding(false)}
      className={`fixed bottom-6 right-6 z-40 hidden select-none rounded-sm border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm transition-colors md:block ${
        holding
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-background/70 text-muted-foreground hover:border-primary hover:text-primary'
      }`}
    >
      {holding ? 'Skimming…' : 'Hold to skim'}
    </button>
  )
}
