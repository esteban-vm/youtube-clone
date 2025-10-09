import type { Metadata } from 'next'
import { api } from '@/utils'

export type ChannelLayoutProps = LayoutProps<'/channel/[channelId]'>

export async function generateMetadata({ params }: ChannelLayoutProps): Promise<Metadata> {
  const { channelId } = await params
  const channel = await fetchChannelData(channelId)

  if (channel) {
    return {
      title: `Canal: ${channel.snippet.title}`,
    }
  }

  return {
    title: 'Canal no encontrado',
  }
}

export default function ChannelLayout({ children, tabs }: ChannelLayoutProps) {
  return (
    <section className='size-full'>
      {children}
      {tabs}
    </section>
  )
}

const fetchChannelData = async (channelId: string): Promise<APIResponse.Channel | null> => {
  try {
    const instance = api.getInstance()

    const { data } = await instance.request<APIResponse.ChannelList>({
      url: 'channels',
      params: {
        id: channelId,
        part: 'snippet',
      },
    })

    return data.items[0]
  } catch {
    return null
  }
}
