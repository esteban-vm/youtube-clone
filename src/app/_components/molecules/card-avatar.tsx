import type { YouTubeDataAPIChannelsResponse } from '@/types'
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

  const { data: channel, isSuccess } = useQuery({
    queryKey: ['channel', channelId],
    queryFn: () => getRequest<YouTubeDataAPIChannelsResponse>(`/channels?${params}`),
  })

  return (
    <Avatar className='h-fit w-14'>
      <Atoms.ImageContainer>
        {isSuccess && <Image alt='avatar' src={channel.items[0].snippet.thumbnails.default.url} fill />}
      </Atoms.ImageContainer>
    </Avatar>
  )
}
