'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function VigilMotion() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    const raf = (time: number) => {
      lenis.raf(time)
      ScrollTrigger.update()
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-scrub]').forEach((element) => {
        gsap.fromTo(element, { scale: 1.08, opacity: 0.6 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-scan]').forEach((element) => {
        gsap.to(element, { xPercent: 100, ease: 'none', scrollTrigger: { trigger: element, start: 'top 72%', end: 'bottom 25%', scrub: true } })
      })
    }, root)

    return () => {
      context.revert()
      lenis.destroy()
      gsap.ticker.remove(raf)
    }
  }, [])

  return <div ref={root} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}

export function ScanLine() {
  return <span data-scan className="absolute inset-y-0 left-0 w-px bg-primary shadow-[0_0_22px_2px_var(--primary)]" />
}
