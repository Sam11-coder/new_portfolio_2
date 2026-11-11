import { Link } from 'react-router-dom'
import { GitHubIcon, ArrowRightIcon, ExternalLinkIcon } from './Icons'
import { TeamBadge, Tag, StatusNote } from './Badges'

// Tells the CSS spotlight (.spotlight in index.css) where the mouse is inside the card
function trackMouse(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function CardLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  )
}

// The title link stretches over the whole card (the after: classes), so the card is
// clickable anywhere. GitHub and demo links sit above it with relative z-10.
export default function ProjectCard({ project, large = false }) {
  const result = large && project.results?.[0]

  return (
    <article
      onMouseMove={trackMouse}
      className={`spotlight group relative h-full flex flex-col rounded-2xl bg-card border border-line transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl ${large ? 'p-7' : 'p-6'}`}
    >
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        <TeamBadge team={project.team} />
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className={`font-semibold mb-2 text-heading transition-colors group-hover:text-accent ${large ? 'text-xl' : 'text-lg'}`}>
        <Link to={`/project/${project.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
          {project.title}
        </Link>
      </h3>

      <p className="text-sm leading-relaxed mb-5 text-body">{project.summary}</p>

      {result && (
        <div className="mb-5 flex items-baseline gap-2 flex-wrap">
          <span className="text-lg font-bold text-accent">{result.value}</span>
          <span className="text-xs text-muted">{result.label}</span>
        </div>
      )}

      {project.status && (
        <div className="mb-4">
          <StatusNote>{project.status}</StatusNote>
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-1.5 font-medium text-accent">
          Read more
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
        {project.github && (
          <CardLink href={project.github}>
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </CardLink>
        )}
        {project.liveDemo && (
          <CardLink href={project.liveDemo}>
            <ExternalLinkIcon className="w-4 h-4" />
            Live demo
          </CardLink>
        )}
        {project.privateRepo && <span className="text-xs text-muted">{project.privateRepo}</span>}
      </div>
    </article>
  )
}
