import { Skeleton } from 'rsc-daisyui'
import { Atoms } from '@/video/components'

export function LoadingItem() {
  return (
    <Atoms.LoadingItemContainer>
      <Skeleton className='aspect-video w-2/5 rounded-lg' />
      <Atoms.LoadingItemContent>
        <Skeleton className='h-4 w-full rounded-lg' />
        <Skeleton className='h-4 w-1/2 rounded-lg' />
        <Skeleton className='h-4 w-1/2 rounded-lg' />
      </Atoms.LoadingItemContent>
    </Atoms.LoadingItemContainer>
  )
}
