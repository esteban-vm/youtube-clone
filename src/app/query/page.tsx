'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'

export type QueryPageProps = PageProps<'/query'>

export default function QueryPage({ searchParams }: QueryPageProps) {
  const { q } = use(searchParams)

  if (!q) notFound()

  return (
    <section>
      <h2>Query Page</h2>
      <p>Query: {q}</p>
    </section>
  )
}
