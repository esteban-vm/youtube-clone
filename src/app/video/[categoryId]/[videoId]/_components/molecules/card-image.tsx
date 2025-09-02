import type { Props } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'rsc-daisyui'
import { helpers } from '@/utils'
import { Atoms } from '@/video/components'

export function CardImage({ item }: Props.WithVideoItem) {
  const { id, snippet, contentDetails } = item

  const link = `/video/${snippet.categoryId}/${id}`
  const thumbnail = snippet.thumbnails?.standard?.url
  const duration = helpers.formatDuration(contentDetails.duration)

  return (
    <Link className='w-2/5' href={link}>
      <Atoms.CardImage>
        {thumbnail && <Image alt={snippet.title} src={thumbnail} fill />}
        <Badge className='absolute right-1 bottom-1 size-fit rounded-md' color='neutral' size='xs'>
          {duration}
        </Badge>
      </Atoms.CardImage>
    </Link>
  )
}
