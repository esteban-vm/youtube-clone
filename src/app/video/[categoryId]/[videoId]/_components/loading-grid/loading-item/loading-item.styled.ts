import { Skeleton } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  h-fit
  w-full
  max-w-xl
  gap-1
  rounded-lg
`

export const Content = tw.div`
  flex
  w-3/5
  flex-col
  gap-0.5
  p-1
  pl-0
`

export const PlayerSkeleton = tw(Skeleton)`
  aspect-video
  w-2/5
  rounded-lg
`

export const TextSkeleton = tw(Skeleton)`
  h-4
  w-1/2
  rounded-lg
`
