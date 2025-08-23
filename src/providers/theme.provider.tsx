import type { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      defaultTheme='system'
      value={{ light: 'light', dark: 'black' }}
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </NextThemeProvider>
  )
}
