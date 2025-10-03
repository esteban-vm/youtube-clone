'use client'

import { use } from 'react'
import tw from 'tailwind-styled-components'
import { VideoGrid } from '@/channel/components'
import { useFetchChannels, useFetchPlayLists } from '@/hooks'

export type VideosPageProps = PageProps<'/channel/[channelId]/videos'>

export default function VideosPage({ params }: VideosPageProps) {
  const { channelId } = use(params)

  const { data: channels, isSuccess: isSuccessChannels } = useFetchChannels({
    params: { id: channelId },
    queryKey: [VideosPage.name, `CHANNEL ID: ${channelId}`],
  })

  const playlistId = channels?.items[0].contentDetails.relatedPlaylists.uploads ?? ''

  const { data: playlists, isSuccess: isSuccessPlaylists } = useFetchPlayLists({
    params: { playlistId, maxResults: '20' },
    queryKey: [VideosPage.name, `UPLOAD PLAYLIST ID: ${playlistId}`],
  })

  if (!isSuccessChannels || !isSuccessPlaylists) return null

  const playlistItems = playlists.items

  return (
    <div>
      <Title>Último vídeo</Title>
      {playlistItems.length ? <VideoGrid playlistItems={playlistItems.slice(0, 1)} /> : <span>Sin vídeos</span>}
      <Title>Vídeos del canal</Title>
      {playlistItems.length ? <VideoGrid playlistItems={playlistItems} /> : <span>Sin vídeos</span>}
    </div>
  )
}

const Title = tw.h2`
  mb-3.5
  text-left
  text-lg
  font-bold
`
