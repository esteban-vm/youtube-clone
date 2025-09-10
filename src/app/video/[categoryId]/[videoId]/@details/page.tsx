'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { ChannelInfo, CommentList, VideoPlayer } from '@/video/components'
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

  if (isLoading) return <DetailsLoading />

  if (isSuccess) {
    const [video] = videos.items

    return (
      <>
        <VideoPlayer item={video} />
        <ChannelInfo item={video} />
        <CommentList item={video} />
      </>
    )
  }

  return null
}
