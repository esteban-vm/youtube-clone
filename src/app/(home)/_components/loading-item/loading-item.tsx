import * as $ from './loading-item.styled'

export function LoadingItem() {
  return (
    <$.Container>
      <$.VideoSkeleton />
      <$.Content>
        <$.AvatarSkeleton />
        <$.TextLines>
          <$.TextSkeleton className='w-full' />
          <$.TextSkeleton />
          <$.TextSkeleton />
        </$.TextLines>
      </$.Content>
    </$.Container>
  )
}
