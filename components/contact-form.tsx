'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import type { Service } from '@/lib/services'
import { contactEmail } from '@/lib/services'

export function ContactForm({ selectedServices }: { selectedServices: Service[] }) {
  const [submitted, setSubmitted] = useState(false)
  const defaultSubject = selectedServices.length
    ? `Project inquiry: ${selectedServices.map((s) => s.title).join(', ')}`
    : ''

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`
    setSubmitted(true)
  }

  const inputClasses =
    'w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 ease-out focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-lg focus:shadow-primary/20'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {selectedServices.length > 0 && (
        <div className="border border-primary/40 bg-primary/5 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">{'Selected Services'}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {selectedServices.map((service) => (
              <li
                key={service.slug}
                className="inline-flex items-center gap-1.5 border border-primary/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-primary"
              >
                <Check className="h-3 w-3" aria-hidden />
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {'Name'}
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {'Email'}
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="you@example.com" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {'Subject'}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          defaultValue={defaultSubject}
          className={inputClasses}
          placeholder="What is this about?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {'Message'}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClasses}
          placeholder="Tell me about the project..."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center border border-primary bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 ease-out hover:bg-transparent hover:text-primary hover:shadow-lg hover:shadow-primary/30 menu-item"
        >
          {'Send Message'}
        </button>
        {submitted && (
          <p role="status" className="text-xs text-muted-foreground">
            {'Opening your email app\u2026 If nothing happens, email me directly.'}
          </p>
        )}
      </div>
    </form>
  )
}
