export interface Props {
  params: Promise<{ queryId: string }>
}

export default async function Page({ params }: Props) {
  const { queryId } = await params

  return (
    <section>
      <span>Query Page</span>
      <p>{decodeURI(queryId)}</p>
    </section>
  )
}
