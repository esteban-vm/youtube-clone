export type VideosPageProps = PageProps<'/channel/[channelId]/videos'>

export default async function VideosPage({ params }: VideosPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de vídeos</p>
      <p>{channelId}</p>
    </>
  )
}
