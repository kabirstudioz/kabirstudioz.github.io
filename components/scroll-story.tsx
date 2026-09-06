'use client'

import { useEffect, useRef } from 'react'

export function ScrollStory({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const bounds = element.getBoundingClientRect()
      const range = Math.max(element.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(-bounds.top / range, 0), 1)
      element.style.setProperty('--story-progress', progress.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className={`scroll-story ${className}`}>{children}</div>
}

export function StoryProgress({ children }: { children: React.ReactNode }) {
  return <div className="story-progress">{children}</div>
}
