import { Skeleton } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export default function RecommendationsLoading() {
  return Array(2)
    .fill(null)
    .map(() => <RecommendationsLoadingItem key={crypto.randomUUID()} />)
}

function RecommendationsLoadingItem() {
  return (
    <$.Container>
      <Skeleton className='aspect-video w-2/5 rounded-lg' />
      <$.Content>
        <Skeleton className='h-4 w-full rounded-lg' />
        <Skeleton className='h-4 w-1/2 rounded-lg' />
        <Skeleton className='h-4 w-1/2 rounded-lg' />
      </$.Content>
    </$.Container>
  )
}

function $() {}

$.Container = tw.div`
  flex
  h-fit
  w-full
  max-w-xl
  gap-1
  rounded-lg
`

$.Content = tw.div`
  flex
  w-3/5
  flex-col
  gap-0.5
  p-1
  pl-0
`
