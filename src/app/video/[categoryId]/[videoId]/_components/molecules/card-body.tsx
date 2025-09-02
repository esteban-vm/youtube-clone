import type { Props } from '@/types'
import Link from 'next/link'
import { Card } from 'rsc-daisyui'
import { helpers } from '@/utils'

export function CardBody({ item }: Props.WithVideoItem) {
  const {
    id,
    statistics: { viewCount },
    snippet: { title, channelId, channelTitle, publishedAt, categoryId },
  } = item

  const videoLink = `/video/${categoryId}/${id}`
  const channelLink = `/channel/${channelId}`
  const views = helpers.parseVideoViews(viewCount)
  const date = helpers.formatDate(publishedAt)

  return (
    <Card.Body className='w-3/5 gap-0.5 p-0'>
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
