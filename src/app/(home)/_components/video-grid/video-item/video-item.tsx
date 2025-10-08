'use client'

import Link from 'next/link'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

/**
 * Video Item for Home Page
 */
export function VideoItem({ video }: Props.WithVideo) {
  const { id: videoId, snippet, contentDetails, statistics } = video
  const { title: videoTitle, categoryId, channelId, channelTitle, publishedAt, thumbnails } = snippet

  const { data: channels, isSuccess } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['CHANNEL ID', channelId],
  })

  if (!isSuccess) return null

  const [channel] = channels.items
  const channelImage = channel.snippet.thumbnails?.default?.url
  const channelRoute = helpers.typedRoute(`/channel/${channelId}/videos`)

  const videoImage = thumbnails?.standard?.url
  const videoRoute = helpers.typedRoute(`/video/${categoryId}/${videoId}`)

  const videoDate = helpers.formatDate(publishedAt)
  const videoViews = helpers.formatValue(statistics.viewCount)
  const videoDuration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.Container>
      <Link href={videoRoute}>
        <$.VideoImageContainer>
          {videoImage && <$.VideoImage alt={videoTitle} src={videoImage} fill />}
          <$.VideoDuration color='neutral' size='sm'>
            {videoDuration}
          </$.VideoDuration>
        </$.VideoImageContainer>
      </Link>
      <$.MainContent>
        <Link href={channelRoute}>
          <$.ChannelImageContainer>
            {channelImage && <$.ChannelImage alt={channelTitle} src={channelImage} fill />}
          </$.ChannelImageContainer>
        </Link>
        <$.InnerContent>
          <$.VideoTitle title={videoTitle}>
            <Link href={videoRoute}>{videoTitle}</Link>
          </$.VideoTitle>
          <$.ChannelTitle title={channelTitle}>
            <Link href={channelRoute}>{channelTitle}</Link>
          </$.ChannelTitle>
          <small className='text-xs'>
            {videoViews} vistas • {videoDate}
          </small>
        </$.InnerContent>
      </$.MainContent>
    </$.Container>
  )
}
