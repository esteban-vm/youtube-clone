import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { VideoGrid } from '@/query/components'

export type QueryPageProps = PageProps<'/query'>

export async function generateMetadata({ searchParams }: QueryPageProps): Promise<Metadata> {
  const { q } = await searchParams

  if (q) {
    return {
      title: `Resultados para: ${q}`,
    }
  }

  return {
    title: 'Sin resultados',
  }
}

export default async function QueryPage({ searchParams }: QueryPageProps) {
  const { q } = await searchParams

  if (!q) notFound()

  return (
    <>
      <VideoGrid q={q} />
    </>
  )
}
