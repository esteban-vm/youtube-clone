'use client'

import { useFetchVideos } from '@/hooks'

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
    </div>
  )
}
