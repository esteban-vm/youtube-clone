'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { VideoCard } from '@/video/components'
import RecommendationsLoading from './loading'

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

  if (isLoading) return <RecommendationsLoading />

  if (isSuccess) {
    return videos.items.map((item) => <VideoCard key={item.id} item={item} />)
  }

  return null
}
