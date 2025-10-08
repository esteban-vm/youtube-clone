'use client'

import Link from 'next/link'
import { useFetchVideos } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

/**
 * Video Item for Channel Videos Page
 */
export function VideoItem({ playlistItem }: Props.WithPlaylistItem) {
  const { videoId } = playlistItem.contentDetails

  const { data: videos, isSuccess } = useFetchVideos({
    params: { id: videoId },
    queryKey: ['VIDEO ID', videoId],
  })

  if (!isSuccess) return null

  const [video] = videos.items
  const videoTitle = video.snippet.title
  const videoImage = video.snippet.thumbnails?.standard?.url
  const videoRoute = helpers.typedRoute(`/video/${video.snippet.categoryId}/${videoId}`)

  const formattedDate = helpers.formatDate(video.snippet.publishedAt)
  const formattedViews = helpers.formatValue(video.statistics.viewCount)
  const formattedDuration = helpers.formatDuration(video.contentDetails.duration)

  return (
    <$.StyledCard>
      <Link href={videoRoute}>
        <$.ThumbnailContainer>
          {videoImage && <$.ThumbnailImage alt={videoTitle} src={videoImage} fill />}
          <$.StyledBadge color='neutral' size='sm'>
            {formattedDuration}
          </$.StyledBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.CardBody>
        <$.CardTitle title={videoTitle}>
          <Link href={videoRoute}>{videoTitle}</Link>
        </$.CardTitle>
        <small className='text-xs'>
          {formattedViews} vistas • {formattedDate}
        </small>
      </$.CardBody>
    </$.StyledCard>
  )
}
