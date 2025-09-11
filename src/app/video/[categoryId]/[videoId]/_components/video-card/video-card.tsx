import Link from 'next/link'
import { helpers } from '@/utils'
import * as $ from './video-card.styled'

export function VideoCard({ item }: Props.WithVideoItem) {
  const { id, contentDetails, snippet, statistics } = item
  const { categoryId, channelId, channelTitle, title, publishedAt, thumbnails } = snippet

  const thumbnail = thumbnails?.standard?.url
  const date = helpers.formatDate(publishedAt)
  const views = helpers.formatViews(statistics.viewCount)
  const duration = helpers.formatDuration(contentDetails.duration)
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const videoLink = helpers.typedRoute(`/video/${categoryId}/${id}`)

  return (
    <$.StyledCard side>
      <Link className='w-2/5' href={videoLink}>
        <$.ThumbnailContainer>
          {thumbnail && <$.ThumbnailImage alt={title} src={thumbnail} fill />}
          <$.StyledBadge color='neutral' size='xs'>
            {duration}
          </$.StyledBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.CardBody>
        <$.CardTitle>
          <Link href={videoLink}>{title}</Link>
        </$.CardTitle>
        <Link className='block text-sm hover:opacity-80' href={channelLink}>
          {channelTitle}
        </Link>
        <small className='text-xs'>
          {views} • {date}
        </small>
      </$.CardBody>
    </$.StyledCard>
  )
}
