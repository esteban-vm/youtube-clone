import type { APIResponse, Props } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from 'rsc-daisyui'
import { Atoms } from '@/home/components'
import { api } from '@/services'

export function CardAvatar({ item }: Props.WithVideoItem) {
  const { channelId } = item.snippet

  const params = new URLSearchParams({
    id: channelId,
    part: `${['snippet', 'contentDetails']}`,
  })

  const { data: channels } = useQuery({
    queryKey: ['channel', `id: ${channelId}`],
    queryFn: () => api.makeRequest<APIResponse.ChannelList>(`/channels?${params}`),
  })

  const thumbnail = channels?.items[0].snippet.thumbnails?.default?.url

  return (
    <Link href={`/channel/${channelId}`}>
      <Avatar className='h-fit w-14'>
        <Atoms.AvatarImage>{thumbnail && <Image alt='avatar' src={thumbnail} fill />}</Atoms.AvatarImage>
      </Avatar>
    </Link>
  )
}
