import type { Props } from '@/types'

export type PageProps = Props.WithParams<{ channelId: string }>

export default async function ChannelPage({ params }: PageProps) {
  const { channelId } = await params

  return (
    <section>
      <h2>Channel Page</h2>
      <p>Channel: {channelId}</p>
    </section>
  )
}
