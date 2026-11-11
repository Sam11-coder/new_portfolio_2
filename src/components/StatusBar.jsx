import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/theme'
import { site } from '../data/site'
import { SunIcon, MoonIcon, DownloadIcon } from './Icons'
import SocialLinks from './SocialLinks'

const navLinks = [
  { hash: '#about', label: 'About' },
  { hash: '#skills', label: 'Skills' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#contact', label: 'Contact' },
]

function MenuIcon({ open }) {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

// Sticky top bar. On phones the links move into a dropdown menu.
export default function StatusBar() {
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuFor, setMenuFor] = useState(location.key)

  // Close the phone menu whenever the page or section changes
  if (menuFor !== location.key) {
    setMenuFor(location.key)
    setMenuOpen(false)
  }

  // ...and when Escape is pressed
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-nav border-b border-line">
      {/* Only visible when tabbing with the keyboard */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-on-accent"
      >
        Skip to content
      </a>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <Link to="/" className="text-sm font-semibold tracking-tight text-heading">
          {site.name}<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Sections" className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: '/', hash: link.hash }}
              className="text-body transition-colors hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-heading border border-outline transition-colors hover:border-outline-hover"
          >
            <DownloadIcon className="w-3 h-3" />
            Resume
          </a>
          <SocialLinks iconClassName="w-5 h-5" className="hidden sm:flex gap-3 ml-1" />
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg cursor-pointer text-muted transition-all duration-200 hover:text-accent hover:bg-surface"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 -mr-2 rounded-lg cursor-pointer text-muted transition-colors hover:text-accent hover:bg-surface"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Sections" className="md:hidden border-t border-line px-4 pb-5 pt-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: '/', hash: link.hash }}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base text-body border-b border-line transition-colors hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4">
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-heading border border-outline"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              Resume
            </a>
            <SocialLinks iconClassName="w-5 h-5" />
          </div>
        </nav>
      )}
    </header>
  )
}
