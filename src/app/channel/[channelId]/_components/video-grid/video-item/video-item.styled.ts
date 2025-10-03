import Image from 'next/image'
import { Badge, Card } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const CardBody = tw(Card.Body)`
  gap-1.5
  p-2.5
  text-left
`

export const CardTitle = tw(Card.Title)`
  inline-block
  truncate
  text-sm
  font-semibold
  hover:opacity-80
`

export const ChannelTitle = tw.span`
  block
  text-sm
  hover:opacity-80
`

export const StyledBadge = tw(Badge)`
  absolute
  right-1.5
  bottom-2
  rounded-md
`

export const StyledCard = tw(Card)`
  gap-1
  overflow-hidden
  shadow-sm
  dark:rounded-lg
`

export const ThumbnailContainer = tw.figure`
  relative
  aspect-video
  hover:opacity-80
`

export const ThumbnailImage = tw(Image)`
  size-full
  rounded-lg
  object-cover
  object-center
`
