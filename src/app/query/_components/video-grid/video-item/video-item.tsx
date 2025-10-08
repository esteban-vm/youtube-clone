'use client'

import Link from 'next/link'
import { useFetchChannels, useFetchVideos } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

export function VideoItem({ searchResult }: Props.WithSearchResult) {
  const { videoId } = searchResult.id
  const { channelId } = searchResult.snippet

  const { data: videos, isSuccess: isSuccessVideos } = useFetchVideos({
    params: { id: videoId },
    queryKey: ['VIDEO ID', videoId],
  })

  const {
    data: channels,
    isSuccess: isSuccessChannels,
    isLoading: isLoadingChannels,
  } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['CHANNEL ID', channelId],
  })

  if (!isSuccessVideos || !isSuccessChannels) return null

  const [video] = videos.items
  const videoTitle = video.snippet.title
  const videoImage = video.snippet.thumbnails?.standard?.url
  const videoRoute = helpers.typedRoute(`/video/${video.snippet.categoryId}/${video.id}`)

  const [channel] = channels.items
  const channelTitle = channel.snippet.title
  const channelImage = channel.snippet.thumbnails?.default?.url
  const channelRoute = helpers.typedRoute(`/channel/${channel.id}/videos`)

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
      <$.CardContent>
        <Link href={channelRoute}>
          <$.StyledAvatar>
            {isLoadingChannels && <$.StyledLoading color='neutral' />}
            {channelImage && <$.AvatarImage alt='avatar' src={channelImage} fill />}
          </$.StyledAvatar>
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
      </$.CardContent>
    </$.StyledCard>
  )
}
