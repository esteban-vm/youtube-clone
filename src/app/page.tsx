'use client'

import type { APIResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Atoms, Molecules, Organisms } from '@/app/_components'
import { sidebarMenuItems } from '@/constants'
import { useSidebarStore } from '@/hooks'
import { api } from '@/services'

export default function Page() {
  const categoryId = useSidebarStore((state) => state.currentItem)
  const category = sidebarMenuItems.find((item) => item.id === categoryId)?.label
  const maxResults = 20

  const params = new URLSearchParams({
    maxResults: maxResults.toString(),
    chart: 'mostPopular',
    videoCategoryId: `${categoryId}`,
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
    queryFn: () => api.getRequest<APIResponse.VideoList>(`/videos?${params}`),
  })

  return (
    <Atoms.PageContainer>
      {isLoading && <Molecules.LoadingGrid items={maxResults} />}
      {isSuccess && videos.items.map((item) => <Organisms.VideoCard key={item.id} item={item} />)}
      {isError && <Molecules.ErrorAlert message={error.message} />}
    </Atoms.PageContainer>
  )
}
