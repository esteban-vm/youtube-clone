import type { YouTubeDataAPIVideoItem } from '@/types'
import Link from 'next/link'
import { Badge, Card } from 'rsc-daisyui'
import { Atoms, Molecules } from '@/_components'

export interface VideoCardProps {
  item: YouTubeDataAPIVideoItem
}

export function VideoCard({ item }: VideoCardProps) {
  const { id, snippet, contentDetails } = item

  return (
    <Card className='gap-1 overflow-hidden shadow-sm dark:rounded-lg'>
      <Molecules.CardImage
        duration={contentDetails.duration}
        image={snippet.thumbnails.standard?.url}
        link={`/video/${snippet.categoryId}/${id}`}
        title={snippet.title}
      />
      <Atoms.CardContent>
        <Molecules.CardAvatar channelId={snippet.channelId} />
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
