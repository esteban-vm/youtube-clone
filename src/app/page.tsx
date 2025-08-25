'use client'

import type { YouTubeDataAPIVideosResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Atoms, Molecules, Organisms } from '@/_components'
import { sidebarMenuItems } from '@/constants'
import { useSidebarStore } from '@/hooks'
import { getVideos } from '@/services/api.service'

export default function Page() {
  const categoryId = useSidebarStore((state) => state.currentItem)
  const category = sidebarMenuItems.find((item) => item.id === categoryId)?.label
  const maxResults = 20

  const params = new URLSearchParams({
    maxResults: maxResults.toString(),
    chart: 'mostPopular',
    videoCategoryId: `${categoryId}`,
    key: process.env.NEXT_PUBLIC_API_KEY,
    part: `${['snippet', 'contentDetails', 'statistics']}`,
  })

  const {
    data: videos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['videos', `category: ${category}`],
    queryFn: () => getVideos<YouTubeDataAPIVideosResponse>(`/videos?${params}`),
  })

  return (
    <Atoms.PageContainer>
      {isLoading && <Molecules.LoadingGrid items={maxResults} />}
      {isSuccess && videos.items.map((item) => <Organisms.VideoCard key={item.id} item={item} />)}
      {isError && <Molecules.ErrorAlert message={error.message} />}
    </Atoms.PageContainer>
  )
}
