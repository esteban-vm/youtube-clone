import type { YouTubeAPIResponse } from '@/types'
import Link from 'next/link'
import { Badge, Card } from 'rsc-daisyui'
import { Atoms, Molecules } from '@/_components'

export interface VideoCardProps {
  item: YouTubeAPIResponse.VideoItem
}

export function VideoCard({ item }: VideoCardProps) {
  const { snippet } = item

  return (
    <Card className='gap-1 overflow-hidden shadow-sm dark:rounded-lg'>
      <Molecules.CardImage item={item} />
      <Atoms.CardContent>
        <Molecules.CardAvatar item={item} />
        <Card.Body className='w-4/5 gap-1 p-0'>
          <Card.Title className='inline-block truncate text-sm'>{snippet.title}</Card.Title>
          <Link className='block text-xs' href={`/channel/${snippet.channelId}`}>
            {snippet.channelTitle}
          </Link>
          <Badge className='dark:rounded-lg' size='sm' outline>
            Views
          </Badge>
        </Card.Body>
      </Atoms.CardContent>
    </Card>
  )
}
