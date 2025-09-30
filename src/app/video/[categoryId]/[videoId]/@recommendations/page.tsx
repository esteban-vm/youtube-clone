'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { LoadingGrid, VideoList } from '@/video/components'

export type RecommendationsPageProps = PageProps<'/video/[categoryId]/[videoId]'>

export default function RecommendationsPage({ params }: RecommendationsPageProps) {
  const { categoryId } = use(params)

  const {
    data: videos,
    isLoading,
    isSuccess,
  } = useFetchVideos({
    queryKey: ['recommended videos by category id', categoryId],
    params: {
      regionCode: 'MX',
      maxResults: '12',
      chart: 'mostPopular',
      videoCategoryId: categoryId,
    },
  })

  if (isLoading) return <LoadingGrid />
  if (isSuccess) return <VideoList videos={videos.items} />

  return null
}
