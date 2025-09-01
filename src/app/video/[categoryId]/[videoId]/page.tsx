import type { Props } from '@/types'
import { Atoms, Organisms, Templates } from '@/video/components'

export type PageProps = Props.WithParams<{ videoId: string; categoryId: string }>

export default async function VideoPage({ params }: PageProps) {
  const { videoId, categoryId } = await params

  return (
    <Atoms.PageContainer>
      <Organisms.VideoPlayer videoId={videoId} />
      <Templates.RecommendedVideos categoryId={categoryId} />
    </Atoms.PageContainer>
  )
}
