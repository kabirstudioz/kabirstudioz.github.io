'use client'

import { useEffect, useRef, useState } from 'react'

const WORDMARK = 'KABIR STUDIOS'
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#/\\*'

function useScramble(target: string, autoStart = true) {
  const [text, setText] = useState(autoStart ? '' : target)
  const frameRef = useRef<number>(0)

  const run = () => {
    cancelAnimationFrame(frameRef.current)
    let frame = 0
    const totalFrames = 40

    const tick = () => {
      frame++
      const settled = Math.floor((frame / totalFrames) * target.length)
      let out = ''
      for (let i = 0; i < target.length; i++) {
        if (target[i] === ' ') {
          out += ' '
        } else if (i < settled) {
          out += target[i]
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setText(out)
      if (frame < totalFrames) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setText(target)
      }
    }
    frameRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (autoStart) {
      const t = setTimeout(run, 200)
      return () => {
        clearTimeout(t)
        cancelAnimationFrame(frameRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { text, run }
}

export function Hero() {
  const { text, run } = useScramble(WORDMARK)

  return (
    <section id="home" className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      {/* Background reel frame with slow Ken Burns drift */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-reel.png"
          alt=""
          className="h-full w-full scale-110 object-cover opacity-50 [animation:kenburns_24s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1.1) translate(0, 0); }
          to { transform: scale(1.18) translate(-1.5%, 1%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [animation] { animation: none; }
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
          Video Editor — Colorist — Content Creator
        </p>

        <h1
          onMouseEnter={run}
          className="wordmark-glitch relative cursor-default select-none text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          <span className="glitch-layer inline-block whitespace-pre font-mono">
            {text || '\u00A0'}
          </span>
        </h1>

        <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Editing that holds attention. Grading that holds mood.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#showreel"
            className="rounded-sm bg-primary px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Watch Showreel
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-border px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Scroll to explore
        </span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
