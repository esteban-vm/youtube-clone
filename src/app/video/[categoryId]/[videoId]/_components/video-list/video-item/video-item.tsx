import Link from 'next/link'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

export function VideoItem({ video }: Props.WithVideo) {
  const { id, contentDetails, snippet, statistics } = video
  const { categoryId, channelId, channelTitle, title, publishedAt, thumbnails } = snippet

  const videoThumbnail = thumbnails?.standard?.url
  const videoLink = helpers.typedRoute(`/video/${categoryId}/${id}`)
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)

  const formattedDate = helpers.formatDate(publishedAt)
  const formattedViews = helpers.formatValue(statistics.viewCount)
  const formattedDuration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.StyledCard side>
      <Link className='w-2/5' href={videoLink}>
        <$.ThumbnailContainer>
          {videoThumbnail && <$.ThumbnailImage alt={title} src={videoThumbnail} fill />}
          <$.StyledBadge color='neutral' size='xs'>
            {formattedDuration}
          </$.StyledBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.CardBody>
        <$.CardTitle>
          <Link href={videoLink}>{title}</Link>
        </$.CardTitle>
        <Link href={channelLink} passHref>
          <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
        </Link>
        <small className='text-xs'>
          {formattedViews} vistas • {formattedDate}
        </small>
      </$.CardBody>
    </$.StyledCard>
  )
}
