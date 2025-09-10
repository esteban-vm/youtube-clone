import { notFound } from 'next/navigation'

export type QueryPageProps = PageProps<'/query'>

export default async function QueryPage({ searchParams }: QueryPageProps) {
  const { q } = await searchParams

  if (!q) notFound()

  return (
    <section>
      <h2>Query Page</h2>
      <p>Query: {q}</p>
    </section>
  )
}
