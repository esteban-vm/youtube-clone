'use client'

import { useFetchVideos } from '@/hooks'
import { Atoms, Organisms } from '@/video/components'

export interface RecommendedVideosProps {
  categoryId: string
}

export function RecommendedVideos({ categoryId }: RecommendedVideosProps) {
  const maxResults = 12

  const {
    data: videos,
    isLoading,
    isSuccess,
  } = useFetchVideos({
    queryKey: [categoryId],
    params: {
      regionCode: 'MX',
      chart: 'mostPopular',
      videoCategoryId: categoryId,
      maxResults: maxResults.toString(),
    },
  })

  return (
    <Atoms.RecommendedVideos>
      {isLoading && <Organisms.LoadingGrid items={maxResults / 2} />}
      {isSuccess && videos.items.map((item) => <Organisms.RecommendedCard key={item.id} item={item} />)}
    </Atoms.RecommendedVideos>
  )
}
