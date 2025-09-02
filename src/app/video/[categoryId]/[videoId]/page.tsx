import type { Props } from '@/types'
import { Atoms, Organisms, Templates } from '@/video/components'

export type VideoPageProps = Props.WithParams<{ videoId: string; categoryId: string }>

export default async function VideoPage({ params }: VideoPageProps) {
  const { videoId, categoryId } = await params

  return (
    <Atoms.PageContainer>
      <Organisms.VideoPlayer videoId={videoId} />
      <Templates.RecommendedVideos categoryId={categoryId} />
    </Atoms.PageContainer>
  )
}
