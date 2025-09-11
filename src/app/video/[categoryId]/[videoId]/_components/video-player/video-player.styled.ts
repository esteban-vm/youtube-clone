import Image from 'next/image'
import { Avatar } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const AvatarImage = tw(Image)`
  rounded-full
`

export const InfoContainer = tw.div`
  flex
  flex-col
  justify-between
  space-x-4
  md:flex-row
`

export const InfoContent = tw.div`
  flex
  items-center
  justify-between
  gap-3
`

export const StyledAvatar = tw(Avatar)`
  relative
  size-14
  hover:opacity-90
`

export const VideoFrame = tw.iframe`
  aspect-video
  w-full
`

export const VideoTitle = tw.h3`
  text-xl
  font-semibold
`
