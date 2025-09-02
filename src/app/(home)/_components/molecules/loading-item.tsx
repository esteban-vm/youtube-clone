import { Skeleton } from 'rsc-daisyui'
import { Atoms } from '@/home/components'

export function LoadingItem() {
  return (
    <Atoms.LoadingItemContainer>
      <Skeleton className='aspect-video w-full rounded-lg' />
      <Atoms.LoadingItemContent>
        <Skeleton className='size-16 shrink-0 rounded-full' />
        <Atoms.LoadingItemLines>
          <Skeleton className='h-4 w-full rounded-lg' />
          <Skeleton className='h-4 w-1/2 rounded-lg' />
          <Skeleton className='h-4 w-1/2 rounded-lg' />
        </Atoms.LoadingItemLines>
      </Atoms.LoadingItemContent>
    </Atoms.LoadingItemContainer>
  )
}
