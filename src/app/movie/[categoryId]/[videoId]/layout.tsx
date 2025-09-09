import tw from 'tailwind-styled-components'

type Props = LayoutProps<'/movie/[categoryId]/[videoId]'>

export default async function MovieLayout({ children, details, recommendations }: Props) {
  return (
    <$.Container>
      {children}
      <$.Details>{details}</$.Details>
      <$.Recommendations>{recommendations}</$.Recommendations>
    </$.Container>
  )
}

function $() {}

$.Container = tw.section`
  grid
  size-full
  gap-3
  p-3
  lg:grid-cols-3
`

$.Details = tw.main`
  flex
  w-full
  min-w-72
  flex-col
  space-y-4
  md:col-span-2
`

$.Recommendations = tw.aside`
  flex
  w-full
  flex-col
  gap-1
  lg:basis-1/3
`
