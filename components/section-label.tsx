export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span className="text-primary">{'/'}</span>
      <span className="text-primary">{index}</span>
      <span>{label}</span>
    </p>
  )
}
