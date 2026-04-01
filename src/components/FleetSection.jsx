import { fleet } from '../data/projects'

const icons = {
  server: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    </svg>
  ),
  cpu: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
    </svg>
  ),
}

function FleetCard({ node }) {
  return (
    <div
      className="animate-fade-in-up flex flex-col items-center text-center rounded-xl p-6 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div
        className="flex items-center justify-center w-14 h-14 rounded-lg mb-4"
        style={{ backgroundColor: 'var(--bg-status)', color: 'var(--accent)' }}
      >
        {icons[node.icon]}
      </div>
      <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{node.name}</h3>
      <p className="text-sm mb-3" style={{ color: 'var(--text-body)' }}>{node.role}</p>
      <div className="flex flex-col gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
        <span>{node.hardware}</span>
        <span>{node.os}</span>
      </div>
    </div>
  )
}

export default function FleetSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-heading)' }}>Infrastructure Fleet</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--text-body)' }}>
        Built to simulate a real distributed enterprise environment.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 stagger">
        {fleet.map((node) => (
          <FleetCard key={node.name} node={node} />
        ))}
      </div>
      <div className="hidden sm:flex items-center justify-center mt-6 gap-2" style={{ color: 'var(--text-muted)' }}>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
        <span className="text-xs uppercase tracking-wider">Connected via internal network</span>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
      </div>
    </section>
  )
}
