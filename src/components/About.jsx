import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { toolCount } from '../data/skills'
import { site } from '../data/site'
import { prefersReducedMotion } from '../lib/motion'
import { MapPinIcon } from './Icons'
import SectionHeading from './SectionHeading'

// ------------------------------------------------------------
// Numbers that count up when they scroll into view
// ------------------------------------------------------------
const stats = [
  { value: projects.length, label: 'projects on this site' },
  { value: 4, label: 'terms at BCIT so far' },
  { value: 20, label: "months at Arc'teryx" },
  { value: toolCount, label: "tools I've actually used" },
]

function useInView(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
  return inView
}

function CountUp({ to, run }) {
  const [n, setN] = useState(() => (prefersReducedMotion() ? to : 0))
  useEffect(() => {
    if (!run || prefersReducedMotion()) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to)) // ease out
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [run, to])
  return n
}

function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <div ref={ref} className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl p-5 bg-card border border-line transition-all duration-200 hover:-translate-y-1 hover:border-accent"
        >
          <p className="text-3xl font-bold tabular-nums mb-1 text-heading">
            <CountUp to={s.value} run={inView} />
          </p>
          <p className="text-xs leading-snug text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

// ------------------------------------------------------------
// Profile card. Shows site.photo if set, otherwise the initials.
// ------------------------------------------------------------
function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 mb-3 bg-card border border-line">
      <div className="hero-glow absolute -top-32 -right-32 w-72 h-72 rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative flex items-center gap-4">
        <div className={`shrink-0 rounded-full p-[2px] bg-linear-135 from-accent to-transparent to-80% ${site.photo ? 'w-20 h-20' : 'w-16 h-16'}`}>
          {site.photo ? (
            <img
              src={site.photo}
              alt={`Photo of ${site.name}`}
              width="80"
              height="80"
              className="w-full h-full rounded-full object-cover bg-surface"
            />
          ) : (
            <div className="w-full h-full rounded-full flex items-center justify-center text-lg font-bold bg-surface text-heading">
              SA
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-lg font-semibold text-heading">{site.name}</p>
          <p className="text-sm text-body">Cloud, networking and security</p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted">
            <MapPinIcon className="w-3.5 h-3.5" />
            {site.location}
          </p>
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------
// Tab content
// ------------------------------------------------------------
function P({ children }) {
  return <p className="leading-relaxed text-body">{children}</p>
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed text-body">
      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  )
}

function Role({ title, place, when }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
      <div>
        <h3 className="text-base font-semibold text-heading">{title}</h3>
        <p className="text-sm text-accent">{place}</p>
      </div>
      <span className="text-xs font-mono text-muted">{when}</span>
    </div>
  )
}

const thisTerm = [
  { code: 'ACIT 3495', topic: 'Docker and Kubernetes' },
  { code: 'ACIT 3855', topic: 'Microservices' },
  { code: 'ACIT 4630', topic: 'Security' },
  { code: 'ACIT 4640', topic: 'Terraform, Packer, Ansible' },
  { code: 'ACIT 4850', topic: 'CI/CD with Jenkins' },
  { code: 'ACIT 4880', topic: 'Data analytics' },
  { code: 'ISSP', topic: 'Sponsored team project' },
]

const tabs = [
  {
    id: 'story',
    label: 'Story',
    content: (
      <div className="space-y-4">
        <P>
          I got into IT through NPower Canada's IT support program while I was working at Arc'teryx. That led me
          to BCIT.
        </P>
        <P>
          The part I enjoy most is the infrastructure side: setting up servers, wiring networks together, and
          making sure nobody gets in who shouldn't.
        </P>
        <P>
          I learn best by building things, breaking them, and figuring out why. That's how most of my side
          projects started.
        </P>
      </div>
    ),
  },
  {
    id: 'work',
    label: 'Work',
    content: (
      <div>
        <Role title="Trainer" place="Arc'teryx, New Westminster" when="May 2023 - Jan 2025" />
        <ul className="space-y-2.5 mb-5">
          <Bullet>Trained new hires and wrote quick start checklists so they could get going faster.</Bullet>
          <Bullet>Wrote down fixes for problems that kept coming up, so coworkers could solve them on their own.</Bullet>
          <Bullet>Got promoted to trainer in my first year.</Bullet>
        </ul>
        <P>
          What it taught me: explain things simply and stay calm when something goes wrong. Both turn out to be
          pretty useful in IT.
        </P>
      </div>
    ),
  },
  {
    id: 'school',
    label: 'School',
    content: (
      <div>
        <Role title="Diploma in Computer Information Technology" place="BCIT" when="Jan 2025 - Present" />
        <p className="text-sm mb-3 text-body">What I'm taking this term:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {thisTerm.map((c) => (
            <span
              key={c.code}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs bg-surface border border-line text-body transition-colors hover:border-accent"
            >
              <span className="font-mono text-accent">{c.code}</span>
              {c.topic}
            </span>
          ))}
        </div>
        <Role title="Google IT Support Foundations" place="NPower Canada" when="2023" />
        <P>IT support basics: hardware, operating systems, networking and troubleshooting.</P>
      </div>
    ),
  },
  {
    id: 'fun',
    label: 'For fun',
    content: (
      <ul className="space-y-3">
        <Bullet>
          I run a small home server. It's where this site lives, and where I break things on purpose to learn how to
          fix them.
        </Bullet>
        <Bullet>
          My gaming PC has a Radeon RX 9060 XT, so it doubles as the box that runs local AI models for my job
          aggregator.
        </Bullet>
        <Bullet>My everyday laptop runs Arch Linux.</Bullet>
      </ul>
    ),
  },
]

function Tabs() {
  const [active, setActive] = useState(0)
  const buttons = useRef([])

  // Left and right arrow keys move between tabs
  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    setActive(next)
    buttons.current[next]?.focus()
  }

  return (
    <div className="rounded-2xl p-2 h-full flex flex-col bg-card border border-line">
      <div
        role="tablist"
        aria-label="About me"
        onKeyDown={onKeyDown}
        className="relative grid rounded-xl p-1 bg-surface"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {/* Sliding highlight behind the active tab. It is one tab wide and moves one width per tab. */}
        <span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-1 rounded-lg bg-page border border-line transition-transform duration-300 ease-out"
          style={{ width: `calc((100% - 0.5rem) / ${tabs.length})`, transform: `translateX(${active * 100}%)` }}
        />
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => (buttons.current[i] = el)}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative z-10 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${active === i ? 'text-heading' : 'text-muted hover:text-body'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        key={tabs[active].id}
        role="tabpanel"
        id={`panel-${tabs[active].id}`}
        aria-labelledby={`tab-${tabs[active].id}`}
        className="flex-1 px-5 py-6 sm:px-6 text-sm sm:text-base animate-fade-in-up"
      >
        {tabs[active].content}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading path="about" title="A bit about me">
        Click through the tabs. There's a little more to me than the projects.
      </SectionHeading>

      <div className="grid lg:grid-cols-[1fr_1.35fr] gap-4 items-stretch">
        <div className="reveal">
          <ProfileCard />
          <Stats />
        </div>
        <div className="reveal min-h-[340px]">
          <Tabs />
        </div>
      </div>
    </section>
  )
}
