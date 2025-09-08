import type { Props } from '@/types'
import { useFetchChannels } from '@/hooks'

export function ChannelInfo({ item }: Props.WithVideoItem) {
  const { channelId } = item.snippet

  const { data: channels, isSuccess } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['Channel Info', channelId],
  })

  return <p> {isSuccess && channels.items[0].snippet.title} </p>
}
