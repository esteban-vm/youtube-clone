import type { YouTubeAPIResponse } from '@/types'
import { Card } from 'rsc-daisyui'
import { Atoms, Molecules } from '@/_components'

export interface VideoCardProps {
  item: YouTubeAPIResponse.VideoItem
}

export function VideoCard(props: VideoCardProps) {
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
