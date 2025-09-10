export type ChannelPageProps = PageProps<'/channel/[channelId]'>

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = await params

  return (
    <section>
      <h2>Channel Page</h2>
      <p>Channel: {channelId}</p>
    </section>
  )
}
