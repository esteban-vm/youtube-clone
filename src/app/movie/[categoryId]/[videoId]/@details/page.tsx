'use client'

import { use } from 'react'
import { useFetchVideos } from '@/hooks'
import { ChannelInfo, CommentList, VideoPlayer } from '@/movie/components'
import Loading from './loading'

type Props = PageProps<'/movie/[categoryId]/[videoId]'>

export default function DetailsPage({ params }: Props) {
  const { videoId } = use(params)

  const {
    data: videos,
    isSuccess,
    isLoading,
  } = useFetchVideos({
    queryKey: [videoId],
    params: { id: videoId },
  })

  if (isLoading) return <Loading />

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
