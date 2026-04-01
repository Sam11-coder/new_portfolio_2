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

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }} className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
        <span>&copy; {new Date().getFullYear()} Sameer. Built with intention.</span>
        <div className="flex items-center gap-4">
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
    </footer>
  )
}
