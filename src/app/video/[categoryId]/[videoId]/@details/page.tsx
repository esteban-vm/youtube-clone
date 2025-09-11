'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { VideoPlayer } from '@/video/components'
import DetailsLoading from './loading'

export type DetailsPageProps = PageProps<'/video/[categoryId]/[videoId]'>

export default function DetailsPage({ params }: DetailsPageProps) {
  const { videoId } = use(params)

  const {
    data: videos,
    isSuccess,
    isLoading,
  } = useFetchVideos({
    queryKey: [videoId],
    params: { id: videoId },
  })

  if (isLoading) {
    return <DetailsLoading />
  }

  if (isSuccess) {
    return <VideoPlayer item={videos.items[0]} />
  }

  return null
}
