'use client'

import { useFetchVideos } from '@/hooks'
import { Molecules } from '@/video/components'

export interface VideoPlayerProps {
  videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const { data: videos, isSuccess } = useFetchVideos({
    queryKey: [videoId],
    params: { id: videoId },
  })

  return (
    <div>
      <p>Video: {isSuccess && videos.items[0].snippet.title}</p>
      {isSuccess && <Molecules.ChannelInfo item={videos.items[0]} />}
    </div>
  )
}
