'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { LoadingSpinner, VideoPlayer } from '@/video/components'

export type DetailsPageProps = PageProps<'/video/[categoryId]/[videoId]'>

export default function DetailsPage({ params }: DetailsPageProps) {
  const { videoId } = use(params)

  const {
    data: videos,
    isLoading,
    isSuccess,
  } = useFetchVideos({
    params: { id: videoId },
    queryKey: [DetailsPage.name, `VIDEO ID: ${videoId}`],
  })

  if (isLoading) return <LoadingSpinner />
  if (isSuccess) return <VideoPlayer video={videos.items[0]} />

  return null
}
