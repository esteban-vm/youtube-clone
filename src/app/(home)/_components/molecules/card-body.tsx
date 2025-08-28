import type { Props } from '@/types'
import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'
import Link from 'next/link'
import { Card } from 'rsc-daisyui'
import { helpers } from '@/utils'

export function CardBody({ item }: Props.WithVideoItem) {
  const {
    statistics: { viewCount },
    snippet: { title, channelId, channelTitle, publishedAt },
  } = item

  const views = helpers.parseVideoViews(viewCount)
  const date = formatDistance(publishedAt, new Date(), { addSuffix: true, locale: es })

  return (
    <Card.Body className='w-4/5 gap-1 p-0'>
      <Card.Title className='inline-block truncate text-sm'>{title}</Card.Title>
      <Link className='block text-sm' href={`/channel/${channelId}`}>
        {channelTitle}
      </Link>
      <small className='text-xs'>
        {views} • {date}
      </small>
    </Card.Body>
  )
}
