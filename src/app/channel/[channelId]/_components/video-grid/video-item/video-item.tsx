'use client'

import Link from 'next/link'
import { useFetchVideos } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

export function VideoItem({ playlistItem }: Props.WithPlaylistItem) {
  const { videoId } = playlistItem.contentDetails

  const { data: videos, isSuccess } = useFetchVideos({
    params: { id: videoId },
    queryKey: ['VIDEO ID', videoId],
  })

  if (!isSuccess) return null

  const [video] = videos.items
  const { id, snippet, statistics, contentDetails } = video

  const videoTitle = snippet.title
  const videoThumbnail = snippet.thumbnails?.standard?.url
  const videoLink = helpers.typedRoute(`/video/${snippet.categoryId}/${id}`)

  const formattedDate = helpers.formatDate(snippet.publishedAt)
  const formattedViews = helpers.formatValue(statistics.viewCount)
  const formattedDuration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.StyledCard>
      <Link href={videoLink}>
        <$.ThumbnailContainer>
          {videoThumbnail && <$.ThumbnailImage alt={videoTitle} src={videoThumbnail} fill />}
          <$.StyledBadge color='neutral' size='sm'>
            {formattedDuration}
          </$.StyledBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.CardBody>
        <$.CardTitle title={videoTitle}>
          <Link href={videoLink}>{videoTitle}</Link>
        </$.CardTitle>
        <small className='text-xs'>
          {formattedViews} vistas • {formattedDate}
        </small>
      </$.CardBody>
    </$.StyledCard>
  )
}
