import Image from 'next/image'
import Link from 'next/link'
import { Badge, Card } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { helpers } from '@/utils'

export function RecommendedVideo({ item }: Props.WithVideoItem) {
  const { id, contentDetails, snippet, statistics } = item
  const { categoryId, channelId, channelTitle, title, publishedAt, thumbnails } = snippet

  const thumbnail = thumbnails?.standard?.url
  const channelLink = `/channel/${channelId}`
  const videoLink = `/video/${categoryId}/${id}`
  const date = helpers.formatDate(publishedAt)
  const views = helpers.formatViews(statistics.viewCount)
  const duration = helpers.formatDuration(contentDetails.duration)

  return (
    <$.Card side>
      <$.VideoLink href={videoLink}>
        <$.ThumbnailContainer>
          {thumbnail && <$.Thumbnail alt={title} src={thumbnail} fill />}
          <$.DurationBadge color='neutral' size='xs'>
            {duration}
          </$.DurationBadge>
        </$.ThumbnailContainer>
      </$.VideoLink>
      <$.CardBody>
        <$.CardTitle>
          <Link href={videoLink}>{title}</Link>
        </$.CardTitle>
        <$.ChannelLink href={channelLink}>{channelTitle}</$.ChannelLink>
        <$.Small>
          {views} • {date}
        </$.Small>
      </$.CardBody>
    </$.Card>
  )
}

function $() {}

$.Card = tw(Card)`
  max-w-xl
  gap-1
  overflow-hidden
  dark:rounded-lg
`

$.CardBody = tw(Card.Body)`
  w-3/5
  gap-0.5
  p-1
  pl-0
`

$.CardTitle = tw(Card.Title)`
  inline-block
  truncate
  text-sm
  font-semibold
  hover:opacity-80
`

$.ChannelLink = tw(Link)`
  block
  text-sm
  hover:opacity-80
`

$.VideoLink = tw(Link)`
  w-2/5
`

$.Thumbnail = tw(Image)`
  size-full
  rounded-lg
  object-cover
  object-center
`

$.ThumbnailContainer = tw.figure`
  relative
  aspect-video
  hover:opacity-80
`

$.Small = tw.small`
  text-xs
`

$.DurationBadge = tw(Badge)`
  absolute
  right-1
  bottom-1
  size-fit
  rounded-md
`
