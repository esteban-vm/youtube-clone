import type { Props } from '@/types'
import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'
import Link from 'next/link'
import { Card } from 'rsc-daisyui'
import { helpers } from '@/utils'
import { Molecules } from '@/video/components'

export function RecommendedCard({ item }: Props.WithVideoItem) {
  const { snippet, statistics } = item

  const views = helpers.parseVideoViews(statistics.viewCount)
  const date = formatDistance(snippet.publishedAt, new Date(), { addSuffix: true, locale: es })

  return (
    <Card className='max-w-xl gap-1 overflow-hidden dark:rounded-lg' side>
      <Molecules.CardImage item={item} />
      <div className='flex flex-col gap-1 p-1'>
        <span>New movie is released!</span>
        <Link className='block text-sm hover:opacity-80' href={`/channel/${snippet.channelId}`}>
          {snippet.channelTitle}
        </Link>
        <small className='text-xs'>
          {views} • {date}
        </small>
      </div>
    </Card>
  )
}
