'use client'

import { useFetchVideos } from '@/hooks'
import { Molecules } from '@/video/components'

export interface VideoPlayerProps {
  videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const { data: videos, isSuccess } = useFetchVideos({
    queryKey: [videoId],
    params: { id: videoId },
  })

  if (!isSuccess) return null

  const [video] = videos.items

  return (
    <div className='flex w-full min-w-72 flex-col space-y-4 md:col-span-2'>
      <iframe
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        className='aspect-video w-full'
        referrerPolicy='strict-origin-when-cross-origin'
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        allowFullScreen
      />
      <h3 className='text-xl font-semibold'>{video.snippet.title}</h3>
      <Molecules.ChannelInfo item={video} />
      <Molecules.CommentBox item={video} />
    </div>
  )
}
