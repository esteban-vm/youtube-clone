'use client'

import { ErrorAlert, LoadingGrid, VideoGrid } from '@/home/components'
import { useFetchVideos, useSidebarStore } from '@/hooks'

export type HomePageProps = PageProps<'/'>

export default function HomePage() {
  const categoryId = useSidebarStore((state) => state.category)

  const {
    data: videos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useFetchVideos({
    queryKey: ['home videos by category id', categoryId],
    params: {
      regionCode: 'MX',
      maxResults: '20',
      chart: 'mostPopular',
      videoCategoryId: categoryId,
    },
  })

  if (isLoading) return <LoadingGrid />
  if (isSuccess) return <VideoGrid videos={videos.items} />
  if (isError) return <ErrorAlert error={error} />

  return null
}
