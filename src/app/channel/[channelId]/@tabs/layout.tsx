import Link from 'next/link'
import { helpers } from '@/utils'

export type TabsLayoutProps = LayoutProps<'/channel/[channelId]'>

export default async function TabsLayout({ children, params }: TabsLayoutProps) {
  const { channelId } = await params

  return (
    <section>
      <p>Tabs Layout</p>
      <Link href={helpers.typedRoute(`/channel/${channelId}/videos`)}>Videos Link</Link>
      {children}
    </section>
  )
}
