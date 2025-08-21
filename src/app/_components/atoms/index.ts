import tw from 'tailwind-styled-components'

export const ErrorMessage = tw.p`
  text-xs
  font-semibold
  italic
`

export const ErrorTitle = tw.h3`
  font-bold
  uppercase
`

export const FeedbackContainer = tw.div`
  col-span-full
  flex
  items-center
  justify-center
`

export const PageContent = tw.div`
  grid
  h-full
  gap-2.5
  p-2.5
  md:grid-cols-2
  lg:grid-cols-3
`
