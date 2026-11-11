import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import StatusBar from '../components/StatusBar'
import Footer from '../components/Footer'
import FlowDiagram from '../components/FlowDiagram'
import ButtonLink from '../components/ButtonLink'
import { TeamBadge, Tag, StatusNote } from '../components/Badges'
import { GitHubIcon, ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from '../components/Icons'

function Section({ title, children }) {
  return (
    <section className="py-8 border-t border-line">
      <h2 className="text-lg font-semibold mb-4 text-heading">{title}</h2>
      {children}
    </section>
  )
}

function DotList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-body">
          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-body">
          <span className="mt-0.5 shrink-0 text-xs font-mono text-muted">{String(i + 1).padStart(2, '0')}</span>
          {item}
        </li>
      ))}
    </ol>
  )
}

function BackLink() {
  return (
    <Link
      to={{ pathname: '/', hash: '#projects' }}
      className="inline-flex items-center gap-1.5 text-sm text-body transition-colors hover:text-heading"
    >
      <ArrowLeftIcon />
      Back to projects
    </Link>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    document.title = `${project ? project.title : 'Project not found'} | Sameer Ahmadi`
    window.scrollTo(0, 0)
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-heading">Project not found</h1>
          <BackLink />
        </div>
      </div>
    )
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <div className="min-h-screen">
      <StatusBar />
      <main id="main" className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <BackLink />

        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mt-8 mb-4">
          <TeamBadge team={project.team} />
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-heading">{project.title}</h1>
        <p className="text-base sm:text-lg leading-relaxed mb-6 text-body">{project.summary}</p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          {project.github && (
            <ButtonLink href={project.github} variant="subtle" size="sm" external>
              <GitHubIcon className="w-4 h-4" />
              View on GitHub
            </ButtonLink>
          )}
          {project.liveDemo && (
            <ButtonLink href={project.liveDemo} variant="subtle" size="sm" external>
              <ExternalLinkIcon />
              Live demo
            </ButtonLink>
          )}
          {project.privateRepo && <span className="text-sm text-muted">{project.privateRepo}</span>}
          {project.status && <StatusNote>{project.status}</StatusNote>}
        </div>

        {project.results && (
          <div className={`grid gap-3 mb-10 ${project.results.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {project.results.map((r) => (
              <div key={r.label} className="rounded-xl px-5 py-4 bg-card border border-line">
                <p className="text-2xl font-bold mb-1 text-accent">{r.value}</p>
                <p className="text-sm text-body">{r.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Body. Each section only shows if the project has that field. */}
        {project.flow && (
          <Section title="How it works">
            <FlowDiagram steps={project.flow} />
          </Section>
        )}

        {project.myPart && (
          <Section title="My part">
            <p className="pl-4 border-l-2 border-accent text-sm sm:text-base leading-relaxed text-body">{project.myPart}</p>
          </Section>
        )}

        {project.whyBuilt && (
          <Section title="Why I built it">
            <p className="text-sm sm:text-base leading-relaxed text-body">{project.whyBuilt}</p>
          </Section>
        )}

        <Section title="What's inside">
          <DotList items={project.howItWorks} />
        </Section>

        <Section title="Tech">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-surface text-accent border border-line">
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Decisions and lessons">
          <NumberedList items={project.decisions} />
        </Section>

        {project.images?.length > 0 && (
          <Section title="Screenshots">
            <div className="grid gap-4">
              {project.images.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-xl border border-line" />
              ))}
            </div>
          </Section>
        )}

        <Link
          to={`/project/${next.slug}`}
          className="group mt-8 flex items-center justify-between gap-4 rounded-2xl px-6 py-5 bg-card border border-line transition-colors hover:border-line-strong"
        >
          <span>
            <span className="block text-xs mb-1 text-muted">Next project</span>
            <span className="font-semibold text-heading transition-colors group-hover:text-accent">{next.title}</span>
          </span>
          <ArrowRightIcon className="w-5 h-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </main>
      <Footer />
    </div>
  )
}
