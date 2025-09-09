import { Skeleton } from 'rsc-daisyui'

export default function Loading() {
  return (
    <>
      <Skeleton className='aspect-video w-full dark:rounded-xl' />
      <Skeleton className='h-6 w-1/2 dark:rounded-full' />
    </>
  )
}
