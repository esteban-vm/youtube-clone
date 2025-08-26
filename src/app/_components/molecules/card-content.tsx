import type { Props } from '@/types'
import Link from 'next/link'
import { Badge, Card } from 'rsc-daisyui'

export function CardContent({ item }: Props.WithVideoItem) {
  const {
    snippet: { title, channelId, channelTitle },
  } = item

  return (
    <Card.Body className='w-4/5 gap-1 p-0'>
      <Card.Title className='inline-block truncate text-sm'>{title}</Card.Title>
      <Link className='block text-xs' href={`/channel/${channelId}`}>
        {channelTitle}
      </Link>
      <Badge className='dark:rounded-lg' size='sm' outline>
        Views
      </Badge>
    </Card.Body>
  )
}
