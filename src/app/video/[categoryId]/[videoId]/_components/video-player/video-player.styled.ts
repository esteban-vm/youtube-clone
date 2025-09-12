import Image from 'next/image'
import { Avatar, Button } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const AvatarImage = tw(Image)`
  rounded-full
`

export const ChannelInfo = tw.div`
  flex
  flex-col
  space-y-1
`

export const ChannelSubscribers = tw.span`
  mr-1
  text-sm
  text-gray-500
`

export const ChannelTitle = tw.span`
  text-lg
  font-medium
  hover:opacity-80
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

export const StyledButton = tw(Button)`
  bg-red-500
  text-white
`

export const VideoFrame = tw.iframe`
  aspect-video
  w-full
`

export const VideoTitle = tw.h3`
  text-xl
  font-semibold
`
