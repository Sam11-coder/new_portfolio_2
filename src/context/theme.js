import { createContext, useContext } from 'react'

export const ThemeContext = createContext({ dark: true, toggle: () => {} })

// { dark, toggle } from the nearest ThemeProvider
export function useTheme() {
  return useContext(ThemeContext)
}
