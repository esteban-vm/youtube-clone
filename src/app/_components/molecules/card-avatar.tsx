import type { YouTubeAPIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Avatar } from 'rsc-daisyui'
import { Atoms } from '@/_components'
import { getRequest } from '@/services/api.service'

export interface CardAvatarProps {
  item: YouTubeAPIResponse.VideoItem
}

export function CardAvatar({ item }: CardAvatarProps) {
  const { channelId } = item.snippet

  const params = new URLSearchParams({
    id: channelId,
    part: `${['snippet', 'contentDetails']}`,
  })

  const { data: channels } = useQuery({
    queryKey: ['channel', `id: ${channelId}`],
    queryFn: () => getRequest<YouTubeAPIResponse.ChannelList>(`/channels?${params}`),
  })

  const thumbnail = channels?.items[0].snippet.thumbnails?.default?.url

  return (
    <Avatar className='h-fit w-14'>
      <Atoms.AvatarImage>{thumbnail && <Image alt='avatar' src={thumbnail} fill />}</Atoms.AvatarImage>
    </Avatar>
  )
}
