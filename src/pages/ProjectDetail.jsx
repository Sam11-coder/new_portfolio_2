import { useParams, Link } from 'react-router-dom'
import { allProjects } from '../data/projects'
import StatusBar from '../components/StatusBar'
import Footer from '../components/Footer'

function Collapsible({ title, children, defaultOpen = false }) {
  return (
    <details open={defaultOpen} className="group">
      <summary
        className="flex items-center justify-between cursor-pointer py-3 text-sm font-semibold transition-colors hover:text-[var(--accent)]"
        style={{ color: 'var(--text-heading)' }}
      >
        {title}
        <svg
          className="w-4 h-4 transition-transform group-open:rotate-180"
          style={{ color: 'var(--text-muted)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>Project not found</h1>
          <Link to="/" className="text-sm" style={{ color: 'var(--accent)' }}>
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const { detail } = project

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.2s ease' }}>
      <StatusBar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm transition-colors mb-8 hover:text-[var(--text-heading)]"
          style={{ color: 'var(--text-body)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back to projects
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full"
              style={{ backgroundColor: 'var(--bg-status)', color: 'var(--text-body)', border: '1px solid var(--border)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>{project.title}</h1>
        <p className="leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>{project.summary}</p>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-heading)',
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-heading)',
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14m-3-9H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              Live Demo
            </a>
          )}
          {project.privateRepo && (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg"
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
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
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

        <div className="space-y-1" style={{ borderColor: 'var(--border)' }}>
          <Collapsible title="Overview" defaultOpen>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              {detail.overview}
            </p>
          </Collapsible>

          {project.whyBuilt && (
            <div style={{ borderTop: '1px solid var(--border)' }}>
              <Collapsible title="Why I Built It" defaultOpen>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                  {project.whyBuilt}
                </p>
              </Collapsible>
            </div>
          )}

          <div style={{ borderTop: '1px solid var(--border)' }}>
            <Collapsible title="Architecture" defaultOpen>
              <ul className="space-y-2">
                {detail.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-body)' }}>
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)', opacity: 0.6 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Collapsible>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            <Collapsible title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {detail.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-md"
                    style={{ backgroundColor: 'var(--bg-status)', color: 'var(--accent)', border: '1px solid var(--border)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Collapsible>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            <Collapsible title="Key Decisions">
              <ul className="space-y-3">
                {detail.keyDecisions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    <span className="mt-1 flex-shrink-0 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
