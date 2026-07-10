import { Reveal } from './reveal'

const LINES = 5

export function TypeWall({ phrase }: { phrase: string }) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-border py-16 md:py-24"
    >
      <div className="flex flex-col gap-2">
        {Array.from({ length: LINES }).map((_, i) => (
          <Reveal key={i} delay={i * 60}>
            <p
              className={`select-none whitespace-nowrap text-5xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl ${
                i === Math.floor(LINES / 2)
                  ? 'text-primary'
                  : 'text-foreground/10'
              }`}
              style={{
                marginLeft: `${(i - Math.floor(LINES / 2)) * -3}rem`,
              }}
            >
              {phrase} — {phrase}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
