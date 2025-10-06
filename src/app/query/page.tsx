'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { useFetchSearchResults } from '@/hooks'
import { VideoGrid } from '@/query/components'

export type QueryPageProps = PageProps<'/query'>

export default function QueryPage({ searchParams }: QueryPageProps) {
  const { q } = use(searchParams)

  if (!q) notFound()

  const { data: searchList, isSuccess } = useFetchSearchResults({
    queryKey: ['QUERY', q],
    params: {
      q: q.toString(),
      type: 'video',
      maxResults: '20',
    },
  })

  if (!isSuccess) return null

  return (
    <section>
      <h2>Query Page</h2>
      <VideoGrid searchResults={searchList.items} />
    </section>
  )
}
