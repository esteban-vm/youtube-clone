import type { Props } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, Loading } from 'rsc-daisyui'
import { Atoms } from '@/home/components'
import { useFetchChannels } from '@/hooks'

export function CardAvatar({ item }: Props.WithVideoItem) {
  const { channelId } = item.snippet

  const {
    data: channels,
    isLoading,
    isSuccess,
  } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  const thumbnail = channels?.items[0].snippet.thumbnails?.default?.url

  return (
    <Link className='hover:opacity-90' href={`/channel/${channelId}`}>
      <Avatar className='relative h-fit w-14'>
        {isLoading && <Loading className='absolute top-1/2 left-1/2 -translate-1/2' color='neutral' />}
        {isSuccess && <Atoms.AvatarImage>{thumbnail && <Image alt='avatar' src={thumbnail} fill />}</Atoms.AvatarImage>}
      </Avatar>
    </Link>
  )
}
