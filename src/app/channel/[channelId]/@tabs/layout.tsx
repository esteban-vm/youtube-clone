import { Tabs } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { TabItem } from '@/channel/components'
import { getTabItems } from '@/constants'

export type TabsLayoutProps = Omit<LayoutProps<'/channel/[channelId]'>, 'tabs'>

export default async function TabsLayout({ children, params }: TabsLayoutProps) {
  const { channelId } = await params
  const tabItems = getTabItems(channelId)

  return (
    <Container decorate='border'>
      {tabItems.map((item) => (
        <TabItem key={item.id} {...item}>
          {children}
        </TabItem>
      ))}
    </Container>
  )
}

const Container = tw(Tabs)`
  w-full
  p-0.5
  text-center
  md:p-1.5
`
