export type LivesPageProps = PageProps<'/channel/[channelId]/lives'>

export default async function LivesPage({ params }: LivesPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de en vivos</p>
      <p>{channelId}</p>
    </>
  )
}
