import { RecommendedVideos, VideoPlayer } from '@/video/components'

export interface Props {
  params: Promise<{ categoryId: string; videoId: string }>
}

export default async function VideoPage({ params }: Props) {
  const { categoryId, videoId } = await params

  return (
    <section className='grid gap-3 lg:grid-cols-3'>
      <h2>Video Page</h2>
      <VideoPlayer videoId={videoId} />
      <RecommendedVideos categoryId={categoryId} />
    </section>
  )
}
