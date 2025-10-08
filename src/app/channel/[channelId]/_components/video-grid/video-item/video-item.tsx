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

  const videoDate = helpers.formatDate(video.snippet.publishedAt)
  const videoViews = helpers.formatValue(video.statistics.viewCount)
  const videoDuration = helpers.formatDuration(video.contentDetails.duration)

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
      <$.Content>
        <$.VideoTitle title={videoTitle}>
          <Link href={videoRoute}>{videoTitle}</Link>
        </$.VideoTitle>
        <small className='text-xs'>
          {videoViews} vistas • {videoDate}
        </small>
      </$.Content>
    </$.Container>
  )
}
