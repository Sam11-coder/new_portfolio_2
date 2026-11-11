import { useEffect, useState } from 'react'
import { ThemeContext } from './theme'

// localStorage can throw (private windows, blocked storage), so reads and writes are guarded.
function readStoredTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => readStoredTheme() !== 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // the theme just won't be remembered next visit
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}
