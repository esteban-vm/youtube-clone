import type { Props } from '@/types'
import { RecommendedVideos, VideoPlayer } from '@/video/components'

export type PageProps = Props.WithParams<{ videoId: string; categoryId: string }>

export default async function VideoPage({ params }: PageProps) {
  const { videoId, categoryId } = await params

  return (
    <section className='grid gap-3 lg:grid-cols-3'>
      <h2>Video Page</h2>
      <VideoPlayer videoId={videoId} />
      <RecommendedVideos categoryId={categoryId} />
    </section>
  )
}
