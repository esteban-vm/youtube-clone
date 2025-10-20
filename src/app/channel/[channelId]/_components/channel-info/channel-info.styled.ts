import { Button } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const ChannelDescription = tw.p`
  line-clamp-1
  max-w-5xl
  text-pretty
`

export const ChannelTitle = tw.h1`
  text-2xl
  font-bold
  md:text-4xl
`

export const InfoContainer = tw.div`
  flex
  gap-4
  p-4
`

export const LeftSide = tw.div`
  basis-3/4
`

export const ModalDescription = tw.div`
  prose
  py-4
  pb-0
  text-pretty
  dark:prose-invert
`

export const ModalTitle = tw.h3`
  text-lg
  font-bold
`

export const RightSide = tw.div`
  basis-1/4
  text-center
`

export const StyledButton = tw(Button)`
  block
  rounded-md
  bg-red-500
  text-white
  hover:opacity-80
`

export const ThumbnailContainer = tw.div`
  relative
  w-40
  rounded-full
`
