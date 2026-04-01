import { GitHubIcon, EmailIcon, LinkedInIcon } from './Icons'

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

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide uppercase mb-4" style={{ color: 'var(--accent)' }}>
          Systems & Infrastructure
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6" style={{ color: 'var(--text-heading)' }}>
          Hands-on systems administration<br />
          <span style={{ color: 'var(--text-body)' }}>and infrastructure design.</span>
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-body)' }}>
          I use a distributed homelab to bridge the gap between classroom theory and
          real-world IT. From network routing to self-hosting AI, I build practical
          projects to deepen my understanding of system architecture.
        </p>
        <div className="flex items-center gap-5 mt-6">
          {/* TODO: replace with actual resume file */}
          <a
            href="/resume.pdf"
            download
            className="resume-btn inline-flex items-center gap-2 rounded-md text-lg transition-colors"
            style={{
              padding: '10px 20px',
              border: '1px solid var(--resume-btn-border)',
              color: 'var(--text-heading)',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Download Resume
          </a>
        </div>
        <div className="flex items-center gap-5 mt-4">
          <SocialLink href="https://github.com/Sam11-coder" label="GitHub">
            <GitHubIcon className="w-4 h-4" />
          </SocialLink>
          <SocialLink href="mailto:sameeralam1029@gmail.com" label="Email">
            <EmailIcon className="w-4 h-4" />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/sameer-alam11" label="LinkedIn">
            <LinkedInIcon className="w-4 h-4" />
          </SocialLink>
        </div>
      </div>
    </section>
  )
}
