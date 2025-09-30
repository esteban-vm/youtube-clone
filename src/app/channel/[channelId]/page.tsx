'use client'

import { use } from 'react'
import { ChannelBanner, ChannelInfo } from '@/channel/components'
import { useFetchChannels } from '@/hooks'

export type ChannelPageProps = PageProps<'/channel/[channelId]'>

export default function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = use(params)

  const { data: channels, isSuccess } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['channel by id', channelId],
  })

  if (isSuccess) {
    const [channel] = channels.items

    return (
      <>
        <ChannelBanner channel={channel} />
        <ChannelInfo channel={channel} />
      </>
    )
  }

  return null
}
