import Link from 'next/link'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

export function VideoItem({ video }: Props.WithVideo) {
  const { id: videoId, snippet, contentDetails, statistics } = video
  const { categoryId, channelId, channelTitle, title, publishedAt, thumbnails } = snippet

  const { data: channels, isLoading } = useFetchChannels({
    params: { id: channelId },
    queryKey: [VideoItem.name, `CHANNEL ID: ${channelId}`],
  })

  const videoThumbnail = thumbnails?.standard?.url
  const videoLink = helpers.typedRoute(`/video/${categoryId}/${videoId}`)
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const avatarLink = channels?.items[0].snippet.thumbnails?.default?.url

  const formattedDate = helpers.formatDate(publishedAt)
  const formattedViews = helpers.formatValue(statistics.viewCount)
  const formattedDuration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.StyledCard>
      <Link href={videoLink}>
        <$.ThumbnailContainer>
          {videoThumbnail && <$.ThumbnailImage alt={title} src={videoThumbnail} fill />}
          <$.StyledBadge color='neutral' size='sm'>
            {formattedDuration}
          </$.StyledBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.CardContent>
        <Link href={channelLink}>
          <$.StyledAvatar>
            {isLoading && <$.StyledLoading color='neutral' />}
            {avatarLink && <$.AvatarImage alt='avatar' src={avatarLink} fill />}
          </$.StyledAvatar>
        </Link>
        <$.CardBody>
          <$.CardTitle>
            <Link href={videoLink}>{title}</Link>
          </$.CardTitle>
          <Link href={channelLink}>
            <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
          </Link>
          <small className='text-xs'>
            {formattedViews} vistas • {formattedDate}
          </small>
        </$.CardBody>
      </$.CardContent>
    </$.StyledCard>
  )
}
