import tw from 'tailwind-styled-components'

export const CardImage = tw.figure`
  relative
  aspect-video
  hover:opacity-80
  [&_img]:size-full
  [&_img]:rounded-lg
  [&_img]:object-cover
  [&_img]:object-center
`

export const PageContainer = tw.section`
  grid
  size-full
  gap-3
  p-3
  lg:grid-cols-3
`

export const VideosContainer = tw.article`
  flex
  w-full
  flex-col
  gap-1
  lg:basis-1/3
`
