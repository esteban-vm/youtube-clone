'use client'

import tw from 'tailwind-styled-components'
import { useFetchSearchResults } from '@/hooks'
import { VideoItem } from './video-item'

export interface VideoGridProps {
  q: string | string[]
}

export function VideoGrid({ q }: VideoGridProps) {
  q = q.toString()

  const { data: searchList, isSuccess } = useFetchSearchResults({
    queryKey: [VideoGrid.name, 'VIDEOS BY SEARCH QUERY', q],
    params: {
      q,
      type: 'video',
      maxResults: '20',
    },
  })

  if (!isSuccess) return null

  const searchResults = searchList.items

  return (
    <Container>
      {searchResults.map((result) => (
        <VideoItem key={result.id.videoId} searchResult={result} />
      ))}
    </Container>
  )
}

const Container = tw.div`
  flex
  size-full
  flex-col
  items-center
  gap-2.5
  p-2.5
`
