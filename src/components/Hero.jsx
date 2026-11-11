import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { prefersReducedMotion } from '../lib/motion'
import { ChevronDownIcon, DownloadIcon } from './Icons'
import ButtonLink from './ButtonLink'

// What the terminal on the right types out, one command at a time.
// It shows things the text on the left doesn't, so the hero doesn't repeat itself.
const script = [
  { cmd: 'cat now.txt', out: ['Building an AI job aggregator.', 'Finishing term 4 at BCIT.'] },
  { cmd: 'cat this-site.txt', out: ['Runs in Docker on my home server,', 'online through a Cloudflare Tunnel.'] },
]

// Steps through the script: type the command letter by letter, pause, show its output, move on.
function useTypedScript() {
  const [pos, setPos] = useState(() => ({
    block: prefersReducedMotion() ? script.length : 0,
    chars: 0,
    showOut: false,
  }))

  useEffect(() => {
    if (pos.block >= script.length) return
    const { cmd } = script[pos.block]
    let timer
    if (pos.chars < cmd.length) {
      timer = setTimeout(() => setPos((p) => ({ ...p, chars: p.chars + 1 })), 55 + Math.random() * 45)
    } else if (!pos.showOut) {
      timer = setTimeout(() => setPos((p) => ({ ...p, showOut: true })), 260)
    } else {
      timer = setTimeout(() => setPos((p) => ({ block: p.block + 1, chars: 0, showOut: false })), 650)
    }
    return () => clearTimeout(timer)
  }, [pos])

  return pos
}

function Cursor() {
  return <span className="inline-block w-2 h-4 align-middle bg-heading animate-blink" />
}

function Prompt({ children }) {
  return (
    <p>
      <span className="text-accent">$</span> <span className="text-heading">{children}</span>
    </p>
  )
}

function Terminal() {
  const pos = useTypedScript()
  const done = pos.block >= script.length

  return (
    <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl bg-surface border border-line animate-fade-in-up" aria-hidden="true">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-muted">sameer@homelab: ~</span>
      </div>
      {/* min-h keeps the box from growing while it types */}
      <div className="px-5 py-5 font-mono text-[13px] leading-relaxed min-h-[218px]">
        {script.slice(0, pos.block + 1).map((block, i) => {
          const current = i === pos.block
          return (
            <div key={block.cmd} className={i > 0 ? 'pt-3' : ''}>
              <Prompt>
                {current ? block.cmd.slice(0, pos.chars) : block.cmd}
                {current && !pos.showOut && <Cursor />}
              </Prompt>
              {(!current || pos.showOut) &&
                block.out.map((line) => (
                  <p key={line} className="text-body">{line}</p>
                ))}
            </div>
          )
        })}
        {done && (
          <div className="pt-3">
            <Prompt><Cursor /></Prompt>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-dots absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-glow absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-medium bg-surface text-accent border border-line">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              Open to co-op and internships
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5 text-heading">
              Hi, I'm Sameer<span className="text-accent">.</span>
              <br />
              I build and{' '}
              <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">secure</span>{' '}
              infrastructure.
            </h1>

            <p className="text-base sm:text-lg max-w-xl leading-relaxed text-body">
              I'm a Computer Information Technology student at BCIT. I like building things that actually run:
              servers, cloud setups and tools that save people time.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <ButtonLink href="#projects" variant="primary" className="hover:-translate-y-0.5">
                View projects
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </ButtonLink>
              <ButtonLink href={site.resume} download className="bg-page hover:-translate-y-0.5">
                <DownloadIcon className="w-4 h-4" />
                Resume
              </ButtonLink>
            </div>

            {/* Phones don't get the terminal, so they get its "now" line here instead */}
            <p className="lg:hidden mt-8 text-sm font-mono text-muted">
              <span className="text-accent">right now:</span> building my AI job aggregator
            </p>
          </div>

          <Terminal />
        </div>
      </div>
    </section>
  )
}
