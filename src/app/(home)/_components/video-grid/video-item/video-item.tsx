import Link from 'next/link'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-item.styled'

export function VideoItem({ video }: Props.WithVideo) {
  const { id, snippet, contentDetails, statistics } = video
  const { categoryId, channelId, channelTitle, title, publishedAt, thumbnails } = snippet

  const { data: channels, isLoading } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  const thumbnail = thumbnails?.standard?.url
  const date = helpers.formatDate(publishedAt)
  const views = helpers.formatValue(statistics.viewCount)
  const duration = helpers.formatDuration(contentDetails.duration)
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const videoLink = helpers.typedRoute(`/video/${categoryId}/${id}`)
  const avatarLink = channels?.items[0].snippet.thumbnails?.default?.url

  return (
    <$.StyledCard>
      <Link href={videoLink}>
        <$.ThumbnailContainer>
          {thumbnail && <$.ThumbnailImage alt={title} src={thumbnail} fill />}
          <$.StyledBadge color='neutral' size='sm'>
            {duration}
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
            {views} vistas • {date}
          </small>
        </$.CardBody>
      </$.CardContent>
    </$.StyledCard>
  )
}
