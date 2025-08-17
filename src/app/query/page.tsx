export interface Props {
  searchParams: Promise<{ q: string }>
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams

  return (
    <section>
      <span>Query Page</span>
      <p>{q}</p>
    </section>
  )
}
