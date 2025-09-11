'use client'

import { ErrorAlert, LoadingGrid, VideoCard } from '@/home/components'
import { useFetchVideos, useSidebarStore } from '@/hooks'

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
    return <LoadingGrid />
  }

  if (isError) {
    return <ErrorAlert error={error} />
  }

  if (isSuccess) {
    return videos.items.map((item) => <VideoCard key={item.id} item={item} />)
  }

  return null
}
