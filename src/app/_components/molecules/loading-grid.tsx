import { Skeleton } from 'rsc-daisyui'

export interface LoadingGridProps {
  items: number
}

export function LoadingGrid({ items }: LoadingGridProps) {
  return (
    <>
      {Array(items)
        .fill(null)
        .map(() => (
          <LoadingItem key={crypto.randomUUID()} />
        ))}
    </>
  )
}

export function LoadingItem() {
  return (
    <div className='flex flex-col gap-1'>
      <Skeleton className='aspect-video w-full rounded-lg' />
      <div className='flex items-center gap-1'>
        <Skeleton className='size-16 shrink-0 rounded-full' />
        <div className='flex w-full flex-col gap-1.5'>
          <Skeleton className='h-4 w-full rounded-lg' />
          <Skeleton className='h-4 w-full rounded-lg' />
          <Skeleton className='h-4 w-1/4 self-end rounded-lg' />
        </div>
      </div>
    </div>
  )
}
