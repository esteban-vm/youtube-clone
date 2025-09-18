export type ChannelPageProps = PageProps<'/channel/[channelId]'>

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = await params

  return (
    <section>
      <p>Channel Page</p>
      <p>Channel id: {channelId}</p>
    </section>
  )
}
