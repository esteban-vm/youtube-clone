'use client'

import type { APIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Atoms, Molecules, Organisms } from '@/home/components'
import { useSidebarStore } from '@/hooks'
import { api } from '@/services'

export default function HomePage() {
  const categoryId = useSidebarStore((state) => state.currentItem)
  const maxResults = 20

  const params = new URLSearchParams({
    chart: 'mostPopular',
    videoCategoryId: `${categoryId}`,
    maxResults: maxResults.toString(),
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  })

  const {
    data: videos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['Home videos', categoryId],
    queryFn: () => api.makeRequest<APIResponse.VideoList>(`/videos?${params}`),
  })

  return (
    <Atoms.PageContainer>
      {isLoading && <Molecules.LoadingGrid items={maxResults} />}
      {isSuccess && videos.items.map((item) => <Organisms.VideoCard key={item.id} item={item} />)}
      {isError && <Molecules.ErrorAlert message={error.message} />}
    </Atoms.PageContainer>
  )
}
