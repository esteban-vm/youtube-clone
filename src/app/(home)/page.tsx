'use client'

import { Atoms, Molecules, Organisms } from '@/home/components'
import { useFetchVideos, useSidebarStore } from '@/hooks'

export default function HomePage() {
  const category = useSidebarStore((state) => state.category)
  const maxResults = 20

  const {
    data: videos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useFetchVideos({
    queryKey: [category],
    params: {
      regionCode: 'MX',
      chart: 'mostPopular',
      videoCategoryId: category,
      maxResults: maxResults.toString(),
    },
  })

  return (
    <Atoms.PageContainer>
      {isLoading && <Organisms.LoadingGrid items={maxResults / 4} />}
      {isSuccess && videos.items.map((item) => <Organisms.VideoCard key={item.id} item={item} />)}
      {isError && <Molecules.ErrorAlert message={error.message} />}
    </Atoms.PageContainer>
  )
}
