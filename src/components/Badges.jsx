// Small pill labels used on project cards and project pages

export function TeamBadge({ team }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-surface text-accent border border-line">
      {team}
    </span>
  )
}

export function Tag({ children }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-surface text-muted border border-line">
      {children}
    </span>
  )
}

export function StatusNote({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
      {children}
    </span>
  )
}
