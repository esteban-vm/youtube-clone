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

export const LoadingItemContainer = tw.div`
  flex
  h-fit
  w-full
  max-w-xl
  gap-1
  rounded-lg
`

export const LoadingItemContent = tw.div`
  flex
  w-3/5
  flex-col
  gap-0.5
  p-1
  pl-0
`

export const PageContainer = tw.section`
  grid
  size-full
  gap-3
  p-3
  lg:grid-cols-3
`

export const RecommendedVideos = tw.aside`
  flex
  w-full
  flex-col
  gap-1
  lg:basis-1/3
`

export const VideoPlayer = tw.div`
  flex
  w-full
  min-w-72
  flex-col
  space-y-4
  md:col-span-2
`
