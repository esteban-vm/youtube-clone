import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'rsc-daisyui'
import { Atoms } from '@/_components'
import { parseVideoDuration } from '@/utils/helpers.utils'

export interface CardImageProps {
  title: string
  duration: string
  link: string
  image?: string
}

export function CardImage({ title, duration, link, image }: CardImageProps) {
  return (
    <Link href={link}>
      <Atoms.CardImage>
        {image && <Image alt={title} className='size-full rounded-b-lg object-cover object-center' src={image} fill />}
        <Badge className='absolute right-1.5 bottom-2 rounded-md' color='neutral' size='sm'>
          {parseVideoDuration(duration)}
        </Badge>
      </Atoms.CardImage>
    </Link>
  )
}
