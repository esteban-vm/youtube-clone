import { Skeleton } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export default function DetailsLoading() {
  return (
    <>
      <PlayerSkeleton />
      <TextSkeleton />
    </>
  )
}

const PlayerSkeleton = tw(Skeleton)`
  aspect-video
  w-full
  dark:rounded-xl
`

const TextSkeleton = tw(Skeleton)`
  h-6
  w-1/2
  dark:rounded-full
`
