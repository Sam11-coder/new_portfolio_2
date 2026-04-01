import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
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
  const project = projects.find((p) => p.slug === slug)

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
        <p className="leading-relaxed mb-8" style={{ color: 'var(--text-body)' }}>{project.summary}</p>

        <div className="space-y-1" style={{ borderColor: 'var(--border)' }}>
          <Collapsible title="Overview" defaultOpen>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              {detail.overview}
            </p>
          </Collapsible>

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
