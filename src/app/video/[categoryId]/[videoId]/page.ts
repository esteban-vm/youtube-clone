import type { Metadata } from 'next'
import { api } from '@/utils'

export type VideoPageProps = PageProps<'/video/[categoryId]/[videoId]'>

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { videoId } = await params
  const video = await fetchVideoData(videoId)

  if (video) {
    return {
      title: `Vídeo: ${video.snippet.title}`,
    }
  }

  return {
    title: 'Vídeo no encontrado',
  }
}

export default function VideoPage() {
  return null
}

const fetchVideoData = async (videoId: string): Promise<APIResponse.Video | null> => {
  try {
    const instance = api.getInstance()

    const { data } = await instance.request<APIResponse.VideoList>({
      url: 'videos',
      params: {
        id: videoId,
        part: 'snippet',
      },
    })

    return data.items[0]
  } catch {
    return null
  }
}
