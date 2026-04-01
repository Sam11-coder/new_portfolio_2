import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function TagBadge({ children }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full"
      style={{
        backgroundColor: 'var(--bg-status)',
        color: 'var(--text-body)',
        border: '1px solid var(--border)',
      }}
    >
      {children}
    </span>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="animate-fade-in-up group relative flex flex-col rounded-xl p-6 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-heading)' }}>
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-body)' }}>
        {project.summary}
      </p>
      <Link
        to={`/project/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors w-fit"
        style={{ color: 'var(--accent)' }}
      >
        Read More
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  )
}

export default function ProjectCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-heading)' }}>Projects</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--text-body)' }}>
        Each project leads with the business problem it solves. Technical depth is one click away.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 stagger">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
