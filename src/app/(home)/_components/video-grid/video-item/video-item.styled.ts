import Image from 'next/image'
import { Avatar, Badge, Card } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const ChannelImage = tw(Image)`
  size-full
  rounded-full
`

export const ChannelImageContainer = tw(Avatar)`
  relative
  size-14
  hover:opacity-80
`

export const ChannelTitle = tw.span`
  block
  truncate
  text-sm
  hover:opacity-80
`

export const Container = tw(Card)`
  gap-1
  overflow-hidden
  shadow-sm
  dark:rounded-lg
`

export const InnerContent = tw(Card.Body)`
  w-4/5
  gap-0.5
  p-0
`

export const MainContent = tw.div`
  flex
  items-center
  gap-1
  p-1
`

export const VideoDuration = tw(Badge)`
  absolute
  right-1.5
  bottom-2
  rounded-md
`

export const VideoImage = tw(Image)`
  size-full
  rounded-lg
  object-cover
  object-center
`

export const VideoImageContainer = tw.figure`
  relative
  aspect-video
  hover:opacity-80
`

export const VideoTitle = tw(Card.Title)`
  inline-block
  truncate
  text-sm
  font-semibold
  hover:opacity-80
`
