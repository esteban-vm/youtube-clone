import type { YouTubeDataAPIVideoItem } from '@/types'
import Image from 'next/image'
import { Avatar, Badge, Card } from 'rsc-daisyui'

export function VideoCard(props: YouTubeDataAPIVideoItem) {
  const { snippet } = props

  return (
    <Card className='gap-1 !rounded-none shadow-sm'>
      <figure className='relative aspect-video'>
        <Image
          alt='Shoes'
          className='size-full object-cover object-center'
          src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
          fill
        />
      </figure>

      <div className='flex flex-row items-start justify-center'>
        <Avatar className='h-fit w-1/4'>
          <div className='relative mx-auto size-1/2 rounded-full'>
            <Image alt='avatar' src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' fill />
          </div>
        </Avatar>

        <Card.Body className='block w-3/4 gap-1 p-1'>
          <Card.Title className='line-clamp-2 text-base leading-tight'>{snippet.title}</Card.Title>
          <p className='text-xs'>Channel name</p>

          <Card.Actions>
            <Badge size='sm' outline>
              Views
            </Badge>
            <Badge size='sm' outline>
              Published at
            </Badge>
          </Card.Actions>
        </Card.Body>
      </div>
    </Card>
  )
}
