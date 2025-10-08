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

  const formattedDate = helpers.formatDate(publishedAt)
  const formattedViews = helpers.formatValue(statistics.viewCount)
  const formattedDuration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.StyledCard side>
      <Link className='w-2/5' href={videoRoute}>
        <$.ThumbnailContainer>
          {videoImage && <$.ThumbnailImage alt={videoTitle} src={videoImage} fill />}
          <$.StyledBadge color='neutral' size='xs'>
            {formattedDuration}
          </$.StyledBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.CardBody>
        <$.CardTitle title={videoTitle}>
          <Link href={videoRoute}>{videoTitle}</Link>
        </$.CardTitle>
        <$.ChannelTitle title={channelTitle}>
          <Link href={channelRoute}>{channelTitle}</Link>
        </$.ChannelTitle>
        <small className='text-xs'>
          {formattedViews} vistas • {formattedDate}
        </small>
      </$.CardBody>
    </$.StyledCard>
  )
}
