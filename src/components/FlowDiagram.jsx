import { Fragment } from 'react'
import { ArrowRightIcon } from './Icons'

// Draws a project's "How it works" steps as boxes joined by arrows.
// Left to right on wider screens (a grid, so every box gets the same width),
// top to bottom on phones.
export default function FlowDiagram({ steps }) {
  // e.g. "minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)" for 3 steps
  const columns = steps.map(() => 'minmax(0,1fr)').join(' auto ')

  return (
    <div
      role="list"
      aria-label="How it works, step by step"
      className="flex flex-col items-center gap-2 sm:grid sm:items-stretch sm:[grid-template-columns:var(--flow-cols)]"
      style={{ '--flow-cols': columns }}
    >
      {steps.map((step, i) => (
        <Fragment key={step}>
          <div role="listitem" className="w-full flex flex-col justify-center rounded-xl px-3 py-3 text-center bg-card border border-line">
            <span className="block text-[11px] font-mono mb-1 text-accent">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-xs sm:text-[13px] leading-snug text-heading">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRightIcon className="w-4 h-4 shrink-0 self-center rotate-90 sm:rotate-0 text-muted" />
          )}
        </Fragment>
      ))}
    </div>
  )
}
