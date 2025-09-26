'use client'

import Image from 'next/image'
import { use } from 'react'
import tw from 'tailwind-styled-components'
import { ChannelInfo } from '@/channel/components'
import { useFetchChannels } from '@/hooks'

export type ChannelPageProps = PageProps<'/channel/[channelId]'>

export default function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = use(params)

  const { data: channels, isSuccess } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  if (!isSuccess) return null
  const [channel] = channels.items

  const channelTitle = channel.brandingSettings.channel.title
  const channelBanner = channel.brandingSettings.image?.bannerExternalUrl

  return (
    <>
      <BannerContainer>{channelBanner && <BannerImage alt={channelTitle} src={channelBanner} fill />}</BannerContainer>
      <ChannelInfo channel={channel} />
    </>
  )
}

const BannerContainer = tw.div`
  relative
  h-72
  overflow-hidden
  rounded-lg
`

const BannerImage = tw(Image)`
  object-cover
  object-center
`
