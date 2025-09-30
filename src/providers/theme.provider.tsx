import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({ children }: Props.WithChildren) {
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
