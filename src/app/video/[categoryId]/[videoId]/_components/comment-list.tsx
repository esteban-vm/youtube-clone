'use client'

import { useEffect } from 'react'
import { useFetchComments } from '@/hooks'

export function CommentList({ item }: Props.WithVideoItem) {
  const { id } = item

  const { data } = useFetchComments({
    queryKey: [id],
    params: { maxResults: '50', videoId: id },
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return <p>CommentList</p>
}
