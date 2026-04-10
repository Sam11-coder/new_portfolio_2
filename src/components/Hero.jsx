import { GitHubIcon, EmailIcon, LinkedInIcon } from './Icons'

function SocialLink({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-lg transition-all duration-200 hover:text-[var(--accent)]"
      style={{ color: 'var(--text-muted)', backgroundColor: 'transparent' }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-status)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="max-w-2xl">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{
            backgroundColor: 'var(--bg-status)',
            color: 'var(--accent)',
            border: '1px solid var(--border)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Available for opportunities
        </div>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5"
          style={{ color: 'var(--text-heading)' }}
        >
          Hi, I'm Sameer
          <span style={{ color: 'var(--accent)' }}>.</span>
          <br />
          <span style={{ color: 'var(--text-body)' }}>I make cool stuff.</span>
        </h1>
        <p
          className="text-base sm:text-lg max-w-xl leading-relaxed"
          style={{ color: 'var(--text-body)' }}
        >
          I like building practical projects across infrastructure, web, and AI.
        </p>
        <div className="flex items-center gap-3 mt-8">
          <a
            href="/resume.pdf"
            download
            className="resume-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              border: '1px solid var(--resume-btn-border)',
              color: 'var(--text-heading)',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#09090b',
            }}
          >
            View Projects
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-1 mt-6">
          <SocialLink href="https://github.com/Sam11-coder" label="GitHub">
            <GitHubIcon className="w-4 h-4" />
          </SocialLink>
          <SocialLink href="mailto:samirahmady01@gmail.com" label="Email">
            <EmailIcon className="w-4 h-4" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/sameer-ahmadi-854749253/" label="LinkedIn">
            <LinkedInIcon className="w-4 h-4" />
          </SocialLink>
        </div>
      </div>
    </section>
  )
}
