'use client'

import type { APIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { api } from '@/services'

export interface VideoPlayerProps {
  videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const params = {
    id: videoId,
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  }

  const { data } = useQuery({
    queryKey: ['Video Detail', videoId],
    queryFn: () => api.makeRequest<APIResponse.VideoList>('videos', params),
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return <p>Video: {videoId}</p>
}
