import { notFound } from 'next/navigation'

export interface Props {
  searchParams: Promise<{ q?: string }>
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams

  if (!q) notFound()

  return (
    <section>
      <h2>Query Page</h2>
      <p>Query: {q}</p>
    </section>
  )
}
