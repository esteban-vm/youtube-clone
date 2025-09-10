import { Skeleton } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export default function HomeLoading() {
  return Array(5)
    .fill(null)
    .map(() => <HomeLoadingItem key={crypto.randomUUID()} />)
}

function HomeLoadingItem() {
  return (
    <$.Container>
      <Skeleton className='aspect-video w-full rounded-lg' />
      <$.Content>
        <Skeleton className='size-16 shrink-0 rounded-full' />
        <$.Lines>
          <Skeleton className='h-4 w-full rounded-lg' />
          <Skeleton className='h-4 w-1/2 rounded-lg' />
          <Skeleton className='h-4 w-1/2 rounded-lg' />
        </$.Lines>
      </$.Content>
    </$.Container>
  )
}

function $() {}

$.Container = tw.div`
  flex
  flex-col
  gap-1
`

$.Content = tw.div`
  flex
  items-center
  gap-1
`

$.Lines = tw.div`
  flex
  w-full
  flex-col
  gap-1.5
`
