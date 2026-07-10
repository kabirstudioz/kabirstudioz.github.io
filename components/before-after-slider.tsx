'use client'

import { useCallback, useRef, useState } from 'react'

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPosition((p) => Math.max(0, p - 4))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPosition((p) => Math.min(100, p + 4))
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-sm"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Raw (before) — full width, underneath */}
      <img
        src="/images/grade-before.png"
        alt="Raw ungraded footage frame"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Graded (after) — clipped to slider position */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src="/images/grade-after.png"
          alt="Professionally color graded frame"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Divider + handle */}
      <div
        role="slider"
        aria-label="Drag to compare raw and graded footage"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 w-px bg-primary outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background font-mono text-[10px] text-primary">
          {'<>'}
        </span>
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm">
        Raw
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary backdrop-blur-sm">
        Graded
      </span>
    </div>
  )
}
