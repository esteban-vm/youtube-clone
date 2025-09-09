'use client'

import { useQuery } from '@tanstack/react-query'
import { use } from 'react'
import { ChannelInfo, CommentList, VideoPlayer } from '@/movie/components'

type Props = PageProps<'/movie/[categoryId]/[videoId]'>

export default function DetailsPage({ params }: Props) {
  const { videoId } = use(params)

  const { data: videos, isSuccess } = useQuery<APIResponse.VideoList>({
    queryKey: ['details', videoId],
  })

  if (!isSuccess) return null

  // const { data: videos, isSuccess } = useFetchVideos({
  //   queryKey: [videoId],
  //   params: { id: videoId },
  // })

  // if (!isSuccess) return null

  const [video] = videos.items

  return (
    <>
      <VideoPlayer item={video} />
      <ChannelInfo item={video} />
      <CommentList item={video} />
    </>
  )
}
