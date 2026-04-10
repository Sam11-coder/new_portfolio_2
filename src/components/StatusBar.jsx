import { useTheme } from '../context/ThemeContext'
import { GitHubIcon, EmailIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'

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
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'var(--bg-nav)',
        borderBottom: '1px solid var(--border)',
        transition: 'background-color 0.2s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-semibold tracking-tight transition-colors"
          style={{ color: 'var(--text-heading)' }}
        >
          Sameer Ahmadi<span style={{ color: 'var(--accent)' }}>.</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="resume-btn hidden sm:inline-flex items-center gap-1.5 rounded-lg text-xs font-medium transition-all duration-200"
            style={{
              padding: '6px 14px',
              border: '1px solid var(--resume-btn-border)',
              color: 'var(--text-heading)',
            }}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Resume
          </a>
          <div className="hidden sm:flex items-center gap-3 ml-1">
            <SocialLink href="https://github.com/Sam11-coder" label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="mailto:samirahmady01@gmail.com" label="Email">
              <EmailIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/sameer-ahmadi-854749253/" label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-all duration-200 cursor-pointer hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)', backgroundColor: 'transparent' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-status)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
