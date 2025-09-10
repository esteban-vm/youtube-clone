import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'rsc-daisyui'
import { Atoms } from '@/home/components'
import { helpers } from '@/utils'

export function CardImage({ item }: Props.WithVideoItem) {
  const { id, snippet, contentDetails } = item

  const thumbnail = snippet.thumbnails?.standard?.url
  const duration = helpers.formatDuration(contentDetails.duration)
  const link = helpers.typedRoute(`/video/${snippet.categoryId}/${id}`)

  return (
    <Link href={link}>
      <Atoms.CardImage>
        {thumbnail && <Image alt={snippet.title} src={thumbnail} fill />}
        <Badge className='absolute right-1.5 bottom-2 rounded-md' color='neutral' size='sm'>
          {duration}
        </Badge>
      </Atoms.CardImage>
    </Link>
  )
}
