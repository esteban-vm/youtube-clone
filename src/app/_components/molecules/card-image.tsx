import type { YouTubeAPIResponse } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'rsc-daisyui'
import { Atoms } from '@/_components'
import { parseVideoDuration } from '@/utils/helpers.utils'

export interface CardImageProps {
  item: YouTubeAPIResponse.VideoItem
}

export function CardImage({ item }: CardImageProps) {
  const { id, snippet, contentDetails } = item
  const thumbnail = snippet.thumbnails?.standard?.url

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
          {parseVideoDuration(contentDetails.duration)}
        </Badge>
      </Atoms.CardImage>
    </Link>
  )
}
