import { Skeleton } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const AvatarSkeleton = tw(Skeleton)`
  size-16
  shrink-0
  rounded-full
`

export const Container = tw.div`
  flex
  flex-col
  gap-1
`

export const Content = tw.div`
  flex
  items-center
  gap-1
`

export const TextLines = tw.div`
  flex
  w-full
  flex-col
  gap-1.5
`

export const TextSkeleton = tw(Skeleton)`
  h-4
  w-1/2
  rounded-lg
`

export const VideoSkeleton = tw(Skeleton)`
  aspect-video
  w-full
  rounded-lg
`
