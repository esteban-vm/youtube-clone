'use client'

import type { Props } from '@/types'
import { use } from 'react'

export type RecommendationsPageProps = Props.WithParams<{ categoryId: string }>

export default function RecommendationsPage({ params }: RecommendationsPageProps) {
  const { categoryId } = use(params)

  return (
    <aside className='flex w-full flex-col gap-1 lg:basis-1/3'>
      <h2>Recommendations Page</h2>
      <p>Category ID: {categoryId}</p>
    </aside>
  )
}
