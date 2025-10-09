import type { Metadata } from 'next'
import tw from 'tailwind-styled-components'

export type HomeLayoutProps = LayoutProps<'/'>

export const metadata: Metadata = {
  title: 'Inicio',
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <Container>{children}</Container>
}

const Container = tw.section`
  grid
  size-full
  grid-cols-[repeat(auto-fit,minmax(theme(spacing.80),1fr))]
  gap-2.5
  p-2.5
`
