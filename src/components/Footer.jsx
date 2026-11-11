import { site } from '../data/site'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="py-8 mt-8 border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <span>&copy; {new Date().getFullYear()} {site.name}</span>
          <span className="inline-flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            served from my home server
          </span>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
