'use client'

import { useFetchVideos } from '@/hooks'
import { Molecules } from '@/video/components'

export interface VideoPlayerProps {
  videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const { data: videos, isSuccess } = useFetchVideos({
    params: { id: videoId },
    queryKey: ['Video Player', videoId],
  })

  return (
    <div>
      <p>Video: {isSuccess && videos.items[0].snippet.title}</p>
      {isSuccess && <Molecules.ChannelInfo item={videos.items[0]} />}
    </div>
  )
}
