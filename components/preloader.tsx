'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  useEffect(() => {
    // First visit only — don't replay on repeat visits or internal navigation
    if (sessionStorage.getItem('ks-preloaded')) {
      setState('done')
      return
    }
    setState('loading')
    const start = performance.now()
    const duration = 1600
    let raf: number

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        sessionStorage.setItem('ks-preloaded', '1')
        setTimeout(() => setState('done'), 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (state === 'done' || state === 'idle') return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-3 font-mono uppercase tracking-[0.35em]">
        <span className="text-xs text-muted-foreground">Loading</span>
        <span className="text-5xl font-medium text-foreground tabular-nums md:text-7xl">
          {progress}%
        </span>
      </div>
    </div>
  )
}
