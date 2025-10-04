'use client'

import { use } from 'react'
import tw from 'tailwind-styled-components'
import { VideoGrid } from '@/channel/components'
import { useFetchChannels, useFetchPlaylists } from '@/hooks'

export type VideosPageProps = PageProps<'/channel/[channelId]/videos'>

export default function VideosPage({ params }: VideosPageProps) {
  const { channelId } = use(params)

  const { data: channels, isSuccess: isSuccessChannels } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['CHANNEL ID', channelId],
  })

  const playlistId = channels?.items[0].contentDetails.relatedPlaylists.uploads ?? ''

  const { data: playlists, isSuccess: isSuccessPlaylists } = useFetchPlaylists({
    params: { playlistId, maxResults: '20' },
    queryKey: ['PLAYLIST ID', playlistId],
  })

  if (!isSuccessChannels || !isSuccessPlaylists) return null

  const playlistItems = playlists.items

  return (
    <div>
      <Title>Último vídeo</Title>
      <VideoGrid playlistItems={playlistItems.slice(0, 1)} />
      <Title>Vídeos del canal</Title>
      <VideoGrid playlistItems={playlistItems} />
    </div>
  )
}

const Title = tw.h2`
  mb-3.5
  text-left
  text-lg
  font-bold
`
