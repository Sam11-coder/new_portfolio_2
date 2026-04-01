import { statusItems } from '../data/projects'
import { useTheme } from '../context/ThemeContext'
import { GitHubIcon, EmailIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'

function StatusDot({ status }) {
  const colors = {
    online: 'bg-emerald-400',
    degraded: 'bg-amber-400',
    offline: 'bg-red-400',
  }
  return (
    <span className="relative flex h-2 w-2">
      {status === 'online' && (
        <span className={`absolute inline-flex h-full w-full rounded-full ${colors[status]} opacity-40 animate-pulse-dot`} />
      )}
      <span className={`relative inline-flex h-2 w-2 rounded-full ${colors[status]}`} />
    </span>
  )
}

function SocialLink({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-colors hover:text-[var(--accent)]"
      style={{ color: 'var(--text-muted)' }}
    >
      {children}
    </a>
  )
}

export default function StatusBar() {
  const { dark, toggle } = useTheme()

  return (
    <div className="sticky top-0 z-50">
      {/* Main Nav */}
      <header
        className="backdrop-blur-md"
        style={{
          backgroundColor: 'var(--bg-nav)',
          borderBottom: '1px solid var(--border)',
          transition: 'background-color 0.2s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight transition-colors"
            style={{ color: 'var(--text-heading)' }}
          >
            Sameer<span style={{ color: 'var(--accent)' }}>.</span>
          </a>
          <div className="flex items-center gap-4">
            {/* TODO: replace with actual resume file */}
            <a
              href="/resume.pdf"
              download
              className="resume-btn inline-flex items-center gap-1.5 rounded-md text-xs font-medium transition-colors"
              style={{
                padding: '6px 14px',
                border: '1px solid var(--resume-btn-border)',
                color: 'var(--text-heading)',
              }}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download Resume
            </a>
            <SocialLink href="https://github.com/Sam11-coder" label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="mailto:sameeralam1029@gmail.com" label="Email">
              <EmailIcon />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/sameer-alam11" label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="ml-2 p-1.5 rounded-md transition-colors cursor-pointer hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Status Bar */}
      <div
        style={{
          backgroundColor: 'var(--bg-status)',
          borderBottom: '1px solid var(--border)',
          transition: 'background-color 0.2s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-center gap-4 sm:gap-6">
          {statusItems.map((item) => (
            <div key={item.name} className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--text-muted)' }}>
              <StatusDot status={item.status} />
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">{item.name.split('—')[0].split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
