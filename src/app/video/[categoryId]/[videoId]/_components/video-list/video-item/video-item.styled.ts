import Image from 'next/image'
import { Badge, Card } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const CardBody = tw(Card.Body)`
  w-3/5
  gap-0.5
  p-1
  pl-0
`

export const CardTitle = tw(Card.Title)`
  inline-block
  truncate
  text-sm
  font-semibold
  hover:opacity-80
`

export const StyledBadge = tw(Badge)`
  absolute
  right-1
  bottom-1
  size-fit
  rounded-md
`

export const StyledCard = tw(Card)`
  max-w-xl
  gap-1
  overflow-hidden
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
