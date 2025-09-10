import Image from 'next/image'
import Link from 'next/link'
import { Avatar, Badge, Card, Loading } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'

export function VideoCard({ item }: Props.WithVideoItem) {
  const { id, snippet, contentDetails, statistics } = item
  const { categoryId, channelId, channelTitle, title, publishedAt, thumbnails } = snippet

  const {
    data: channels,
    isLoading,
    isSuccess,
  } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  const thumbnail = thumbnails?.standard?.url
  const avatar = channels?.items[0].snippet.thumbnails?.default?.url

  const views = helpers.formatViews(statistics.viewCount)
  const date = helpers.formatDate(publishedAt)
  const duration = helpers.formatDuration(contentDetails.duration)

  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const videoLink = helpers.typedRoute(`/video/${categoryId}/${id}`)

  return (
    <$.Card>
      <Link href={videoLink}>
        <$.ThumbnailContainer>
          {thumbnail && <$.Thumbnail alt={title} src={thumbnail} fill />}
          <$.DurationBadge color='neutral' size='sm'>
            {duration}
          </$.DurationBadge>
        </$.ThumbnailContainer>
      </Link>
      <$.Content>
        <Link className='hover:opacity-90' href={channelLink}>
          <$.Avatar>
            {isLoading && <$.Loading color='neutral' />}
            {isSuccess && <$.AvatarContainer>{avatar && <Image alt='avatar' src={avatar} fill />}</$.AvatarContainer>}
          </$.Avatar>
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
      </$.Content>
    </$.Card>
  )
}

function $() {}

$.Card = tw(Card)`
  gap-1
  overflow-hidden
  shadow-sm
  dark:rounded-lg
`

$.CardBody = tw(Card.Body)`
  w-4/5
  gap-0.5
  p-0
`

$.CardTitle = tw(Card.Title)`
  inline-block
  truncate
  text-sm
  font-semibold
  hover:opacity-80
`

$.Content = tw.div`
  flex
  items-center
  gap-1
  p-1
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

$.Avatar = tw(Avatar)`
  relative
  h-fit
  w-14
`

$.AvatarContainer = tw.div`
  relative
  mx-auto
  size-full
  rounded-full
`

$.Loading = tw(Loading)`
  absolute
  top-1/2
  left-1/2
  -translate-1/2
`

$.DurationBadge = tw(Badge)`
  absolute
  right-1.5
  bottom-2
  rounded-md
`
