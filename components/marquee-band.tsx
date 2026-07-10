export function MarqueeBand({
  items,
  speed = 'normal',
  className = '',
  accent = false,
}: {
  items: string[]
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
  accent?: boolean
}) {
  const speedClass =
    speed === 'slow'
      ? 'animate-marquee-slow'
      : speed === 'fast'
        ? 'animate-marquee-fast'
        : 'animate-marquee'

  // Duplicate the sequence so the -50% translate loops seamlessly
  const sequence = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden whitespace-nowrap border-y border-border py-3 ${className}`}
    >
      <div className={`inline-flex w-max items-center ${speedClass}`}>
        {sequence.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-6 px-6 font-mono text-sm uppercase tracking-[0.2em] ${
              accent ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {item}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
