'use client'

import Link from 'next/link'
import { useFetchChannels, useFetchVideos } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

/**
 * Video Item for Query Page
 */
export function VideoItem({ searchResult }: Props.WithSearchResult) {
  const { videoId } = searchResult.id
  const { channelId } = searchResult.snippet

  const { data: videos, isSuccess: isSuccessVideos } = useFetchVideos({
    params: { id: videoId },
    queryKey: ['VIDEO ID', videoId],
  })

  const { data: channels, isSuccess: isSuccessChannels } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['CHANNEL ID', channelId],
  })

  if (!isSuccessVideos || !isSuccessChannels) return null

  const [channel] = channels.items
  const channelTitle = channel.snippet.title
  const channelImage = channel.snippet.thumbnails?.default?.url
  const channelRoute = helpers.typedRoute(`/channel/${channelId}/videos`)

  const [video] = videos.items

  const videoTitle = video.snippet.title
  const videoImage = video.snippet.thumbnails?.standard?.url
  const videoRoute = helpers.typedRoute(`/video/${video.snippet.categoryId}/${videoId}`)

  const videoDate = helpers.formatDate(video.snippet.publishedAt)
  const videoViews = helpers.formatValue(video.statistics.viewCount)
  const videoDuration = helpers.formatDuration(video.contentDetails.duration)

  return (
    <$.Container side>
      <Link className='w-2/5' href={videoRoute}>
        <$.VideoImageContainer>
          {videoImage && <$.VideoImage alt={videoTitle} src={videoImage} fill />}
          <$.VideoDuration color='neutral' size='sm'>
            {videoDuration}
          </$.VideoDuration>
        </$.VideoImageContainer>
      </Link>
      <$.Content>
        <$.VideoTitle title={videoTitle}>
          <Link href={videoRoute}>{videoTitle}</Link>
        </$.VideoTitle>
        <Link href={channelRoute}>
          <$.ChannelImageContainer>
            {channelImage && <$.ChannelImage alt={channelTitle} src={channelImage} fill />}
          </$.ChannelImageContainer>
        </Link>
        <$.ChannelTitle title={channelTitle}>
          <Link href={channelRoute}>{channelTitle}</Link>
        </$.ChannelTitle>
        <span className='text-sm'>
          {videoViews} vistas • {videoDate}
        </span>
      </$.Content>
    </$.Container>
  )
}
