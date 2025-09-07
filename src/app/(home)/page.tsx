'use client'

import type { APIResponse } from '@/types'
import { Atoms, Molecules, Organisms } from '@/home/components'
import { useFetch, useSidebarStore } from '@/hooks'

export default function HomePage() {
  const category = useSidebarStore((state) => state.category)
  const maxResults = 20

  const params = {
    regionCode: 'MX',
    chart: 'mostPopular',
    videoCategoryId: category,
    maxResults: maxResults.toString(),
    part: ['snippet', 'contentDetails', 'statistics'].toString(),
  }

  const {
    data: videos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useFetch<APIResponse.VideoList>({
    params,
    url: 'videos',
    queryKey: ['Home videos', category],
  })

  return (
    <Atoms.PageContainer>
      {isLoading && <Organisms.LoadingGrid items={maxResults / 4} />}
      {isSuccess && videos.items.map((item) => <Organisms.VideoCard key={item.id} item={item} />)}
      {isError && <Molecules.ErrorAlert message={error.message} />}
    </Atoms.PageContainer>
  )
}
