import * as $ from './loading-item.styled'

export function LoadingItem() {
  return (
    <$.Container>
      <$.PlayerSkeleton />
      <$.Content>
        <$.TextSkeleton className='w-full' />
        <$.TextSkeleton />
        <$.TextSkeleton />
      </$.Content>
    </$.Container>
  )
}
