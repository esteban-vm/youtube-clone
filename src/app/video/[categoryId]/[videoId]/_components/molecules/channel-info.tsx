import type { Props } from '@/types'
import { useFetchChannels } from '@/hooks'

export function ChannelInfo({ item }: Props.WithVideoItem) {
  const { channelId } = item.snippet

  const { data: channels, isSuccess } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  return <p> {isSuccess && channels.items[0].snippet.title} </p>
}
