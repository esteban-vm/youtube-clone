import type { Props } from '@/types'

export type ChannelPageProps = Props.WithParams<{ channelId: string }>

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = await params

  return (
    <section>
      <h2>Channel Page</h2>
      <p>Channel: {channelId}</p>
    </section>
  )
}
