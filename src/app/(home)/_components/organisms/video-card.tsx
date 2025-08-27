import type { Props } from '@/types'
import { Card } from 'rsc-daisyui'
import { Atoms, Molecules } from '@/home'

export function VideoCard(props: Props.WithVideoItem) {
  return (
    <Card className='gap-1 overflow-hidden shadow-sm dark:rounded-lg'>
      <Molecules.CardImage {...props} />
      <Atoms.CardContent>
        <Molecules.CardAvatar {...props} />
        <Molecules.CardContent {...props} />
      </Atoms.CardContent>
    </Card>
  )
}
