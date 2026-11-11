import { site } from '../data/site'
import { GitHubIcon, EmailIcon, LinkedInIcon } from './Icons'

const links = [
  { href: site.github, label: 'GitHub', Icon: GitHubIcon },
  { href: `mailto:${site.email}`, label: 'Email', Icon: EmailIcon },
  { href: site.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
]

// GitHub, email and LinkedIn icons in a row (used in the top bar and the footer)
export default function SocialLinks({ iconClassName = 'w-4 h-4', className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = link.Icon
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-muted transition-colors hover:text-accent"
          >
            <Icon className={iconClassName} />
          </a>
        )
      })}
    </div>
  )
}
