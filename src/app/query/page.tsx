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
  const searchResults = searchList.items

  return (
    <>
      <VideoGrid searchResults={searchResults} />
    </>
  )
}
