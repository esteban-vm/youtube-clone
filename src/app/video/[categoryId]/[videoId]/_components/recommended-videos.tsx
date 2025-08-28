'use client'

import type { APIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/services'

export interface RecommendedVideosProps {
  categoryId: string
}

export function RecommendedVideos({ categoryId }: RecommendedVideosProps) {
  const params = new URLSearchParams({
    regionCode: 'US',
    maxResults: '12',
    chart: 'mostPopular',
    videoCategoryId: categoryId,
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  })

  const { data: videos, isSuccess } = useQuery({
    queryKey: ['Recommended videos', categoryId],
    queryFn: () => api.makeRequest<APIResponse.VideoList>(`/videos?${params}`),
  })

  return (
    <div className='flex w-full flex-col lg:basis-1/3'>
      {isSuccess && videos.items.map((item) => <div key={item.id}>{item.snippet.title}</div>)}
    </div>
  )
}
