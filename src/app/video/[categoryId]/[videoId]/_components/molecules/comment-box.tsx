'use client'

import type { Props } from '@/types'
import { useEffect } from 'react'
import { useFetchComments } from '@/hooks'

export function CommentBox({ item }: Props.WithVideoItem) {
  const { id } = item

  const { data, isSuccess } = useFetchComments({
    queryKey: [id],
    params: { maxResults: '50', videoId: id },
  })

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
    }
  }, [data, isSuccess])

  return <p>CommentBox</p>
}
