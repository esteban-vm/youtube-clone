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
    queryKey: [videoId],
    params: { id: videoId },
  })

  if (isLoading) return <LoadingSpinner />
  if (isSuccess) return <VideoPlayer item={videos.items[0]} />

  return null
}
