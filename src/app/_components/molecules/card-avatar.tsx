import type { YouTubeAPIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Avatar } from 'rsc-daisyui'
import { Atoms } from '@/_components'
import { getRequest } from '@/services/api.service'

export interface CardAvatarProps {
  channelId: string
}

export function CardAvatar({ channelId }: CardAvatarProps) {
  const params = new URLSearchParams({
    id: channelId,
    part: `${['snippet', 'contentDetails']}`,
  })

  const { data: channel } = useQuery({
    queryKey: ['channel', `id: ${channelId}`],
    queryFn: () => getRequest<YouTubeAPIResponse.ChannelList>(`/channels?${params}`),
  })

  const imageSrc = channel?.items[0].snippet.thumbnails.default?.url

  return (
    <Avatar className='h-fit w-14'>
      <Atoms.ImageContainer>{imageSrc && <Image alt='avatar' src={imageSrc} fill />}</Atoms.ImageContainer>
    </Avatar>
  )
}
