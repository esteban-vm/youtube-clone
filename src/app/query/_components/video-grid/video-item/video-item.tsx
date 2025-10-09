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
    <$.Container border side>
      <Link className='w-2/5' href={videoRoute}>
        <$.VideoImageContainer>
          {videoImage ? <$.VideoImage alt={videoTitle} src={videoImage} fill /> : null}
          <$.VideoDuration color='neutral' size='sm'>
            {videoDuration}
          </$.VideoDuration>
        </$.VideoImageContainer>
      </Link>
      <$.MainContent>
        <$.VideoTitle title={videoTitle}>
          <Link href={videoRoute}>{videoTitle}</Link>
        </$.VideoTitle>
        <$.InnerContent>
          <Link href={channelRoute}>
            <$.ChannelImageContainer>
              {channelImage ? <$.ChannelImage alt={channelTitle} src={channelImage} fill /> : null}
            </$.ChannelImageContainer>
          </Link>
          <div>
            <$.ChannelTitle title={channelTitle}>
              <Link href={channelRoute}>{channelTitle}</Link>
            </$.ChannelTitle>
            <div className='text-sm'>
              {videoViews} vistas • {videoDate}
            </div>
          </div>
        </$.InnerContent>
      </$.MainContent>
    </$.Container>
  )
}
