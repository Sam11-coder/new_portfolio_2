// Section title with a small terminal-style path above it, like ~/projects
export default function SectionHeading({ path, title, children }) {
  return (
    <div className="mb-10 reveal">
      <p className="font-mono text-xs mb-3 text-accent">~/{path}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-heading">{title}</h2>
      {children && <p className="text-sm sm:text-base max-w-xl leading-relaxed text-body">{children}</p>}
    </div>
  )
}
