export type TabsPageProps = PageProps<'/channel/[channelId]'>

export default async function TabsPage({ params }: TabsPageProps) {
  const { channelId } = await params

  return (
    <>
      <p>Página de inicio</p>
      <p>{channelId}</p>
    </>
  )
}
