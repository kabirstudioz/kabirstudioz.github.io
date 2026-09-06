import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Instrument_Serif } from 'next/font/google'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument' })

export const metadata: Metadata = { title: 'VIGIL — Trust the signal', description: 'VIGIL is the voice-integrity layer for a world that can no longer hear the difference between real and generated.', generator: 'v0.app', keywords: ['voice integrity', 'synthetic media', 'audio verification', 'cybersecurity'] }
export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#0b1018', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${archivo.variable} ${instrument.variable}`}><body className="antialiased film-grain"><SiteNav />{children}<SiteFooter />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
