'use client'

import type { Props } from '@/types'
import { use } from 'react'

export type DetailsPageProps = Props.WithParams<{ videoId: string }>

export default function DetailsPage({ params }: DetailsPageProps) {
  const { videoId } = use(params)

  return (
    <main className='flex w-full min-w-72 flex-col space-y-4 md:col-span-2'>
      <h2>Details Page</h2>
      <p>Video ID: {videoId}</p>
    </main>
  )
}
