export type PlaylistsPageProps = PageProps<'/channel/[channelId]/playlists'>

export default async function PlaylistsPage({ params }: PlaylistsPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de listas</p>
      <p>{channelId}</p>
    </>
  )
}
