import { notFound } from 'next/navigation'

export interface Props {
  searchParams: Promise<{ q?: string }>
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams

  if (!q) notFound()

  return (
    <section>
      <span>Query Page</span>
      <p>Resultados para: {q}</p>
    </section>
  )
}
