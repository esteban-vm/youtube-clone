'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { RecommendedVideo } from '@/movie/components'
import Loading from './loading'

type Props = PageProps<'/movie/[categoryId]/[videoId]'>

export default function RecommendationsPage({ params }: Props) {
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

  if (isLoading) return <Loading />

  if (isSuccess) {
    return videos.items.map((item) => <RecommendedVideo key={item.id} item={item} />)
  }

  return null
}
