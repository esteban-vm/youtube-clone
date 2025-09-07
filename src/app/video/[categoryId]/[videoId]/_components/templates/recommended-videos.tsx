'use client'

import type { APIResponse } from '@/types'
import { useFetch } from '@/hooks'
import { Atoms, Organisms } from '@/video/components'

export interface RecommendedVideosProps {
  categoryId: string
}

export function RecommendedVideos({ categoryId }: RecommendedVideosProps) {
  const maxResults = 12

  const params = {
    regionCode: 'MX',
    chart: 'mostPopular',
    videoCategoryId: categoryId,
    maxResults: maxResults.toString(),
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  }

  const {
    data: videos,
    isLoading,
    isSuccess,
  } = useFetch<APIResponse.VideoList>({
    params,
    url: 'videos',
    queryKey: ['Recommended videos', categoryId],
  })

  return (
    <Atoms.VideosContainer>
      {isLoading && <Organisms.LoadingGrid items={maxResults / 2} />}
      {isSuccess && videos.items.map((item) => <Organisms.RecommendedCard key={item.id} item={item} />)}
    </Atoms.VideosContainer>
  )
}
