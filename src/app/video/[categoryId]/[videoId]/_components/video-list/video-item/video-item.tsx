import Link from 'next/link'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

/**
 * Video Item for Video Recommendations Page
 */
export function VideoItem({ video }: Props.WithVideo) {
  const { id: videoId, contentDetails, snippet, statistics } = video
  const { title: videoTitle, categoryId, channelId, channelTitle, publishedAt, thumbnails } = snippet

  const channelRoute = helpers.typedRoute(`/channel/${channelId}/videos`)

  const videoImage = thumbnails?.standard?.url
  const videoRoute = helpers.typedRoute(`/video/${categoryId}/${videoId}`)

  const videoDate = helpers.formatDate(publishedAt)
  const videoViews = helpers.formatValue(statistics.viewCount)
  const videoDuration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.Container side>
      <Link className='w-2/5' href={videoRoute}>
        <$.VideoImageContainer>
          {videoImage && <$.VideoImage alt={videoTitle} src={videoImage} fill />}
          <$.VideoDuration color='neutral' size='xs'>
            {videoDuration}
          </$.VideoDuration>
        </$.VideoImageContainer>
      </Link>
      <$.Content>
        <$.VideoTitle title={videoTitle}>
          <Link href={videoRoute}>{videoTitle}</Link>
        </$.VideoTitle>
        <$.ChannelTitle title={channelTitle}>
          <Link href={channelRoute}>{channelTitle}</Link>
        </$.ChannelTitle>
        <small className='text-xs'>
          {videoViews} vistas • {videoDate}
        </small>
      </$.Content>
    </$.Container>
  )
}
