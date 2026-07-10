export function SectionEyebrow({
  number,
  name,
  paren,
}: {
  number: string
  name: string
  paren?: string
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="text-primary">{`Nº${number} / ${name}`}</span>
      {paren ? <span>{`( ${paren} )`}</span> : null}
    </div>
  )
}
