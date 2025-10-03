export type CommunityPageProps = PageProps<'/channel/[channelId]/community'>

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de comunidad</p>
      <p>{channelId}</p>
    </>
  )
}
