import { cn } from '@/lib/utils'

export function ViewfinderFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative p-3', className)}>
      {/* Corner brackets — camera viewfinder framing */}
      <span aria-hidden className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary" />
      <span aria-hidden className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary" />
      <span aria-hidden className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary" />
      <span aria-hidden className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary" />
      {children}
    </div>
  )
}
