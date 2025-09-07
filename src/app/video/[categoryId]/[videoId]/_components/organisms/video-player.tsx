'use client'

import type { APIResponse } from '@/types'
import { useFetch } from '@/hooks'

export interface VideoPlayerProps {
  videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const params = {
    id: videoId,
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  }

  const { data: videos, isSuccess } = useFetch<APIResponse.VideoList>({
    params,
    url: 'videos',
    queryKey: ['Video Player', videoId],
  })

  return (
    <div>
      <p>Video: {isSuccess && videos.items[0].snippet.title}</p>
    </div>
  )
}
