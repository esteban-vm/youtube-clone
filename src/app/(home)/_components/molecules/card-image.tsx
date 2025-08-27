import type { Props } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'rsc-daisyui'
import { Atoms } from '@/home'
import { helpers } from '@/utils'

export function CardImage({ item }: Props.WithVideoItem) {
  const { id, snippet, contentDetails } = item

  const thumbnail = snippet.thumbnails?.standard?.url
  const duration = helpers.parseVideoDuration(contentDetails.duration)

  return (
    <Link href={`/video/${snippet.categoryId}/${id}`}>
      <Atoms.CardImage>
        {thumbnail && (
          <Image
            alt={snippet.title}
            className='size-full rounded-b-lg object-cover object-center'
            src={thumbnail}
            fill
          />
        )}
        <Badge className='absolute right-1.5 bottom-2 rounded-md' color='neutral' size='sm'>
          {duration}
        </Badge>
      </Atoms.CardImage>
    </Link>
  )
}
