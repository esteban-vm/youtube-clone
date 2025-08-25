import tw from 'tailwind-styled-components'

export const CardContent = tw.div`
  flex
  items-center
  gap-1
  p-1
`

export const CardImage = tw.figure`
  relative
  aspect-video
  hover:opacity-80
`

export const ErrorContainer = tw.div`
  col-span-full
  flex
  items-center
  justify-center
`

export const ErrorMessage = tw.p`
  text-xs
  font-semibold
  italic
`

export const ErrorTitle = tw.h3`
  font-bold
  uppercase
`

export const ImageContainer = tw.div`
  relative
  mx-auto
  size-full
  rounded-full
`

export const PageContainer = tw.section`
  grid
  size-full
  grid-cols-[repeat(auto-fit,minmax(theme(spacing.80),1fr))]
  place-content-center
  gap-2.5
  p-2.5
`
