export type PodcastsPageProps = PageProps<'/channel/[channelId]/podcasts'>

export default async function PodcastsPage({ params }: PodcastsPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de podcasts</p>
      <p>{channelId}</p>
    </>
  )
}
