import type { YouTubeDataAPIVideoItem } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, Badge, Card } from 'rsc-daisyui'
import { Molecules } from '@/_components'

export interface VideoCardProps {
  item: YouTubeDataAPIVideoItem
}

export function VideoCard({ item }: VideoCardProps) {
  const { id, snippet, contentDetails } = item

  return (
    <Card className='gap-1 overflow-hidden shadow-sm dark:rounded-lg'>
      <Molecules.CardImage
        duration={contentDetails.duration}
        image={snippet.thumbnails.high.url}
        link={`/video/${snippet.categoryId}/${id}`}
        title={snippet.title}
      />
      <div className='flex items-center gap-1 p-1'>
        <Avatar className='h-fit w-16'>
          <div className='relative mx-auto size-full rounded-full'>
            <Image alt='avatar' src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' fill />
          </div>
        </Avatar>
        <Card.Body className='w-4/5 gap-1 p-0'>
          <Card.Title className='inline-block truncate text-sm'>{snippet.title}</Card.Title>
          <Link className='block text-xs' href={`/channel/${snippet.channelId}`}>
            {snippet.channelTitle}
          </Link>
          <Card.Actions>
            <Badge className='dark:rounded-lg' size='sm' outline>
              Views
            </Badge>
          </Card.Actions>
        </Card.Body>
      </div>
    </Card>
  )
}
