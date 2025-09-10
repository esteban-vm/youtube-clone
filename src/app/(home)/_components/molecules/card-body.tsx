import Link from 'next/link'
import { Card } from 'rsc-daisyui'
import { helpers } from '@/utils'

export function CardBody({ item }: Props.WithVideoItem) {
  const {
    id,
    statistics: { viewCount },
    snippet: { title, channelId, channelTitle, publishedAt, categoryId },
  } = item

  const views = helpers.formatViews(viewCount)
  const date = helpers.formatDate(publishedAt)
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const videoLink = helpers.typedRoute(`/video/${categoryId}/${id}`)

  return (
    <Card.Body className='w-4/5 gap-0.5 p-0'>
      <Card.Title className='inline-block truncate text-sm font-semibold hover:opacity-80'>
        <Link href={videoLink}>{title}</Link>
      </Card.Title>
      <Link className='block text-sm hover:opacity-80' href={channelLink}>
        {channelTitle}
      </Link>
      <small className='text-xs'>
        {views} • {date}
      </small>
    </Card.Body>
  )
}
