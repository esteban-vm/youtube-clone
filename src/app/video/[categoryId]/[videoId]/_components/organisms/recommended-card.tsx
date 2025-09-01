import type { Props } from '@/types'
import { Card } from 'rsc-daisyui'
import { Molecules } from '@/video/components'

export function RecommendedCard(props: Props.WithVideoItem) {
  return (
    <Card className='max-w-xl gap-1 overflow-hidden dark:rounded-lg' side>
      <Molecules.CardImage {...props} />
      <Molecules.CardBody {...props} />
    </Card>
  )
}
