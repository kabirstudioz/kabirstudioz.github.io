'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, X } from 'lucide-react'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

export function StartProjectButton({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          'inline-flex items-center gap-2 border border-primary bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary'
        }
      >
        {children ?? 'Start a Project'}
      </button>
      {open && <StartProjectModal onClose={() => setOpen(false)} />}
    </>
  )
}

function StartProjectModal({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const [selected, setSelected] = useState<string[]>([])
  const dialogRef = useRef<HTMLDivElement>(null)

  const toggle = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  const handleContinue = useCallback(() => {
    const query = selected.length ? `?services=${selected.join(',')}` : ''
    onClose()
    router.push(`/contact${query}`)
  }, [selected, onClose, router])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-background/80 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="start-project-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-border bg-card p-6 outline-none sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{'Start a Project'}</p>
            <h2 id="start-project-title" className="mt-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              {'What do you '}
              <em className="font-serif normal-case italic text-primary">need?</em>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {'Select one or more services and we\u2019ll take it from there.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {services.map((service) => {
            const isSelected = selected.includes(service.slug)
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => toggle(service.slug)}
                aria-pressed={isSelected}
                className={cn(
                  'group flex items-start justify-between gap-3 border p-4 text-left transition-colors',
                  isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50',
                )}
              >
                <span>
                  <span className="block text-xs tracking-[0.2em] text-primary">{`/ ${service.number}`}</span>
                  <span className="mt-1 block text-sm font-semibold uppercase tracking-wide">
                    {service.title}
                  </span>
                </span>
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors',
                    isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-border',
                  )}
                  aria-hidden
                >
                  {isSelected && <Check className="h-3.5 w-3.5" />}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {selected.length
              ? `${selected.length} service${selected.length > 1 ? 's' : ''} selected`
              : 'Not sure yet? You can skip this step.'}
          </p>
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            {selected.length ? 'Continue to Contact' : 'Skip & Contact'}
          </button>
        </div>
      </div>
    </div>
  )
}
