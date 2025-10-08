import Image from 'next/image'
import { Avatar, Badge, Card } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const AvatarImage = tw(Image)`
  size-full
  rounded-full
`

export const CardBody = tw(Card.Body)`
  w-4/5
  gap-0.5
  p-0
`

export const CardContent = tw.div`
  flex
  items-center
  gap-1
  p-1
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
  truncate
  text-sm
  hover:opacity-80
`

export const StyledAvatar = tw(Avatar)`
  relative
  size-14
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
