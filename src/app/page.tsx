'use client'

import type { YouTubeDataAPIVideosResponse } from '@/types'
import { Atoms, Molecules, Organisms } from '@/_components'
import { useFetch, useSidebarStore } from '@/hooks'

export default function Page() {
  const categoryId = useSidebarStore((state) => state.currentItem)

  const params = new URLSearchParams({
    maxResults: '9',
    chart: 'mostPopular',
    videoCategoryId: `${categoryId}`,
    key: process.env.NEXT_PUBLIC_API_KEY,
    part: `${['snippet', 'contentDetails', 'statistics']}`,
  })

  const { isLoading, data, error } = useFetch<YouTubeDataAPIVideosResponse>(`/videos?${params}`)

  return (
    <Atoms.PageContainer>
      {isLoading && <Molecules.LoadingSpinner />}
      {data && data.items.map((item) => <Organisms.VideoCard key={item.id} {...item} />)}
      {error && <Molecules.ErrorAlert message={error} />}
    </Atoms.PageContainer>
  )
}
