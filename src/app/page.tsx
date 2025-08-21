'use client'

import type { YouTubeDataAPIVideosResponse } from '@/types'
import { Atoms, Molecules } from '@/_components'
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

  const { data, loading, error } = useFetch<YouTubeDataAPIVideosResponse>(`/videos?${params}`)

  return (
    <Atoms.PageContainer>
      {loading && <Molecules.LoadingSpinner />}
      {data &&
        data.items.map((item) => {
          return (
            <article key={item.id} className='truncate border border-neutral text-sm'>
              <div className='aspect-video w-full border-b border-neutral bg-neutral/50' />
              <span>{item.snippet.title}</span>
            </article>
          )
        })}
      {error && <Molecules.ErrorAlert message={error} />}
    </Atoms.PageContainer>
  )
}
