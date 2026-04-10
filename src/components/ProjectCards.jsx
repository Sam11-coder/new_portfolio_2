import { Link } from 'react-router-dom'
import { soloProjects, groupProjects, duoProjects } from '../data/projects'

const categories = [
  {
    key: 'solo',
    label: 'Solo Projects',
    description: 'Independent work, designed, built, and shipped by me.',
    count: soloProjects.length,
  },
  {
    key: 'group',
    label: 'Group Projects',
    description: 'Team-based work, collaborating across roles and responsibilities.',
    count: groupProjects.length,
  },
  {
    key: 'duo',
    label: 'Duo Projects',
    description: 'Partner projects, built closely with one other developer.',
    count: duoProjects.length,
  },
]

function CategoryCard({ category }) {
  return (
    <Link
      to={`/projects/${category.key}`}
      className="animate-fade-in-up group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3
            className="text-lg font-semibold transition-colors group-hover:text-[var(--accent)]"
            style={{ color: 'var(--text-heading)' }}
          >
            {category.label}
          </h3>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: 'var(--bg-status)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            {category.count} {category.count === 1 ? 'project' : 'projects'}
          </span>
        </div>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
          {category.description}
        </p>
      </div>
      <div
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-all"
        style={{ color: 'var(--accent)' }}
      >
        Browse projects
        <svg
          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  )
}

export default function ProjectCards() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h2
          className="text-3xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--text-heading)' }}
        >
          Projects
        </h2>
        <p className="text-sm max-w-lg" style={{ color: 'var(--text-body)' }}>
          Organized by how they were built. Click a category to see all projects inside.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 stagger">
        {categories.map((cat) => (
          <CategoryCard key={cat.key} category={cat} />
        ))}
      </div>
    </section>
  )
}
