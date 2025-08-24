export interface Props {
  params: Promise<{ channelId: string }>
}

export default async function Page({ params }: Props) {
  const { channelId } = await params

  return (
    <section>
      <h2>Channel Page</h2>
      <p>Channel: {channelId}</p>
    </section>
  )
}
