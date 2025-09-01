'use client'

import type { APIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/services'
import { Atoms, Organisms } from '@/video/components'

export interface RecommendedVideosProps {
  categoryId: string
}

export function RecommendedVideos({ categoryId }: RecommendedVideosProps) {
  const params = {
    regionCode: 'MX',
    maxResults: '12',
    chart: 'mostPopular',
    videoCategoryId: categoryId,
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  }

  const { data: videos, isSuccess } = useQuery({
    queryKey: ['Recommended videos', categoryId],
    queryFn: () => api.makeRequest<APIResponse.VideoList>('videos', params),
  })

  return (
    <Atoms.VideosContainer>
      {isSuccess && videos.items.map((item) => <Organisms.RecommendedCard key={item.id} item={item} />)}
    </Atoms.VideosContainer>
  )
}
