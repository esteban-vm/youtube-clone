import tw from 'tailwind-styled-components'

export type VideoLayoutProps = LayoutProps<'/video/[categoryId]/[videoId]'>

export default async function VideoLayout({ children, details, recommendations }: VideoLayoutProps) {
  return (
    <Container>
      {children}
      <Details>{details}</Details>
      <Recommendations>{recommendations}</Recommendations>
    </Container>
  )
}

const Container = tw.section`
  grid
  size-full
  gap-3
  p-3
  lg:grid-cols-3
`

const Details = tw.main`
  flex
  w-full
  min-w-72
  flex-col
  space-y-4
  md:col-span-2
`

const Recommendations = tw.aside`
  flex
  w-full
  flex-col
  gap-1
  lg:basis-1/3
`
