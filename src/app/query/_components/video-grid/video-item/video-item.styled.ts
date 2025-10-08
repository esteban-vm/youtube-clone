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
  truncate
  text-sm
  hover:opacity-80
`

export const Container = tw(Card)`
  max-w-6xl
  w-full
  gap-1
  overflow-hidden
  dark:rounded-lg
`

export const Content = tw(Card.Body)`
  w-3/5
  gap-0.5
  p-1
  pl-0
`

export const VideoDuration = tw(Badge)`
  absolute
  right-1
  bottom-1
  size-fit
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
  w-full
  hover:opacity-80
`

export const VideoTitle = tw(Card.Title)`
  inline-block
  truncate
  font-semibold
  hover:opacity-80
`
