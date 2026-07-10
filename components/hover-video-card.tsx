'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Play } from 'lucide-react'

type HoverVideoCardProps = {
  videoSrc?: string
  videoLabel: string
  children: ReactNode
  className?: string
}

/**
 * A grid card that, on hover (desktop) or tap (touch), reveals a
 * centered floating video preview linked to the item.
 */
export function HoverVideoCard({ videoSrc, videoLabel, children, className }: HoverVideoCardProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const show = () => setOpen(true)

  const hide = () => {
    setOpen(false)
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  useEffect(() => {
    if (open) {
      const v = videoRef.current
      if (v && !videoFailed) {
        v.play().catch(() => {
          /* autoplay can be blocked; frame still shows */
        })
      }
    }
  }, [open, videoFailed])

  return (
    <div
      className={`group relative flex h-full flex-col ${className ?? ''}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) hide()
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => (open ? hide() : show())}
        className="flex h-full w-full flex-col text-left"
      >
        {children}
        <span className="sr-only">{open ? `Hide ${videoLabel} preview` : `Show ${videoLabel} preview`}</span>
      </button>

      {/* Hover accent line */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-primary transition-transform duration-500 ${
          open ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      {/* Centered floating video preview with Apple-style animation */}
      {mounted &&
        createPortal(
          <div
            aria-hidden={!open}
            onClick={hide}
            className={`pointer-events-none fixed inset-0 z-90 flex items-center justify-center p-4 transition-all duration-400 ease-out sm:p-8 ${
              open ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'
            }`}
            style={{
              pointerEvents: open ? 'auto' : 'none',
              backgroundColor: open ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)',
            }}
          >
            <div
              className={`video-card w-full max-w-2xl overflow-hidden border border-primary/40 bg-background transition-all duration-400 ease-out ${
                open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: open
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05)'
                  : 'none',
              }}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary">{videoLabel}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{'Preview'}</span>
              </div>
              {videoSrc && !videoFailed && open ? (
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="none"
                  onError={() => setVideoFailed(true)}
                  className="aspect-video w-full object-cover"
                  aria-label={`${videoLabel} preview video`}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40">
                    <Play className="h-4 w-4 text-primary" aria-hidden />
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {'Preview coming soon'}
                  </p>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
