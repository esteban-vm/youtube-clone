export type ShortsPageProps = PageProps<'/channel/[channelId]/shorts'>

export default async function ShortsPage({ params }: ShortsPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de cortos</p>
      <p>{channelId}</p>
    </>
  )
}
