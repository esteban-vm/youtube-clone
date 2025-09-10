'use client'

import { VideoCard } from '@/home/components'
import { useFetchVideos, useSidebarStore } from '@/hooks'
import HomeError from './error'
import HomeLoading from './loading'

export default function HomePage() {
  const category = useSidebarStore((state) => state.category)
  const maxResults = 20

  const {
    data: videos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useFetchVideos({
    queryKey: [category],
    params: {
      regionCode: 'MX',
      chart: 'mostPopular',
      videoCategoryId: category,
      maxResults: maxResults.toString(),
    },
  })

  if (isLoading) {
    return <HomeLoading />
  }

  if (isSuccess) {
    return videos.items.map((item) => <VideoCard key={item.id} item={item} />)
  }

  if (isError) {
    return <HomeError error={error} />
  }

  return null
}
