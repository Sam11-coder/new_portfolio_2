import { useParams, Link } from 'react-router-dom'
import { soloProjects, groupProjects, duoProjects } from '../data/projects'
import StatusBar from '../components/StatusBar'
import Footer from '../components/Footer'

const categoryMap = {
  solo: { label: 'Solo Projects', description: 'Independent work, designed, built, and shipped by me.', projects: soloProjects },
  group: { label: 'Group Projects', description: 'Team-based work, collaborating across roles and responsibilities.', projects: groupProjects },
  duo: { label: 'Duo Projects', description: 'Partner projects, built closely with one other developer.', projects: duoProjects },
}

function TagBadge({ children }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-full"
      style={{
        backgroundColor: 'var(--bg-status)',
        color: 'var(--text-muted)',
        border: '1px solid var(--border)',
      }}
    >
      {children}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <div
      className="animate-fade-in-up group rounded-2xl p-6 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-hover)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </div>

      <Link to={`/project/${project.slug}`}>
        <h3
          className="text-lg font-semibold mb-2 transition-colors group-hover:text-[var(--accent)]"
          style={{ color: 'var(--text-heading)' }}
        >
          {project.title}
        </h3>
      </Link>

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>
        {project.summary}
      </p>

      {/* Tech stack preview */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.detail.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md"
            style={{
              backgroundColor: 'var(--bg-status)',
              color: 'var(--accent)',
              border: '1px solid var(--border)',
            }}
          >
            {tech}
          </span>
        ))}
        {project.detail.techStack.length > 4 && (
          <span
            className="px-2 py-0.5 text-[10px] font-mono rounded-md"
            style={{ color: 'var(--text-muted)' }}
          >
            +{project.detail.techStack.length - 4} more
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--accent)' }}
        >
          View details
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14m-3-9H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}

        {project.privateRepo && (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: 'var(--bg-status)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            Private repository (production code)
          </span>
        )}
      </div>

      {project.liveDemoStatus && (
        <div
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: 'var(--bg-status)',
            color: 'var(--text-muted)',
            border: '1px dashed var(--border)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          {project.liveDemoStatus}
        </div>
      )}
    </div>
  )
}

export default function CategoryPage() {
  const { category } = useParams()
  const data = categoryMap[category]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
            Category not found
          </h1>
          <Link to="/" className="text-sm" style={{ color: 'var(--accent)' }}>Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.2s ease' }}>
      <StatusBar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm transition-colors mb-10 hover:text-[var(--text-heading)]"
          style={{ color: 'var(--text-body)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
            style={{ color: 'var(--text-heading)' }}
          >
            {data.label}
          </h1>
          <p className="text-base" style={{ color: 'var(--text-body)' }}>
            {data.description}
          </p>
          <div
            className="mt-3 text-sm font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            {data.projects.length} {data.projects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>

        {/* Projects grid */}
        {data.projects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {data.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 rounded-2xl"
            style={{ border: '1px dashed var(--border)', color: 'var(--text-muted)' }}
          >
            <p className="text-sm">No projects in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
