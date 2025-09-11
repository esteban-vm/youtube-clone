'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { LoadingGrid, VideoCard } from '@/video/components'

export type RecommendationsPageProps = PageProps<'/video/[categoryId]/[videoId]'>

export default function RecommendationsPage({ params }: RecommendationsPageProps) {
  const { categoryId } = use(params)

  const {
    data: videos,
    isSuccess,
    isLoading,
  } = useFetchVideos({
    queryKey: [categoryId],
    params: {
      maxResults: '12',
      regionCode: 'MX',
      chart: 'mostPopular',
      videoCategoryId: categoryId,
    },
  })

  if (isLoading) {
    return <LoadingGrid />
  }

  if (isSuccess) {
    return videos.items.map((item) => <VideoCard key={item.id} item={item} />)
  }

  return null
}
