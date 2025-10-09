import type { Metadata } from 'next'
import { Navigation } from '@/app/_navigation'
import { appName, authorName } from '@/constants'
import { QueryProvider, ThemeProvider } from '@/providers'
import '@/app/globals.css'

export type RootLayoutProps = LayoutProps<'/'>

export const metadata: Metadata = {
  applicationName: appName,
  title: { default: appName, template: `${appName} | %s` },
  description: 'Clon de YouTube creado con Create Next App',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'YouTube Clone'],
  authors: { name: authorName, url: 'https://github.com/esteban-vm' },
  generator: 'Next.js',
  creator: authorName,
  publisher: authorName,
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <QueryProvider>
            <Navigation>{children}</Navigation>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
