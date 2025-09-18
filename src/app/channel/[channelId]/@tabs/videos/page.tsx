export type VideosPageProps = PageProps<'/channel/[channelId]/videos'>

export default async function VideosPage({ params }: VideosPageProps) {
  const { channelId } = await params

  return (
    <section>
      <p>Videos by Channel id: {channelId}</p>
    </section>
  )
}
