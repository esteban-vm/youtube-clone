import { Tabs } from 'rsc-daisyui'

export type TabsLayoutProps = LayoutProps<'/channel/[channelId]'>

export default async function TabsLayout({ children, params }: TabsLayoutProps) {
  const { channelId: _ } = await params

  return (
    <>
      <Tabs className='w-full p-0.5 text-center md:p-1.5' decorate='border'>
        <Tabs.Tab aria-label='Home' as='input' className='w-[calc(1/7*100%)]' name='my_tabs_2' type='radio' />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 1</Tabs.Content>

        <Tabs.Tab
          aria-label='Videos'
          as='input'
          className='w-[calc(1/7*100%)]'
          name='my_tabs_2'
          type='radio'
          defaultChecked
        />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 2</Tabs.Content>

        <Tabs.Tab aria-label='Shorts' as='input' className='w-[calc(1/7*100%)]' name='my_tabs_2' type='radio' />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 3</Tabs.Content>

        <Tabs.Tab aria-label='Live' as='input' className='w-[calc(1/7*100%)]' name='my_tabs_2' type='radio' />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 4</Tabs.Content>

        <Tabs.Tab aria-label='Podcasts' as='input' className='w-[calc(1/7*100%)]' name='my_tabs_2' type='radio' />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 5</Tabs.Content>

        <Tabs.Tab aria-label='Playlist' as='input' className='w-[calc(1/7*100%)]' name='my_tabs_2' type='radio' />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 6</Tabs.Content>

        <Tabs.Tab aria-label='Community' as='input' className='w-[calc(1/7*100%)]' name='my_tabs_2' type='radio' />
        <Tabs.Content className='border-base-300 bg-base-100 p-10'>Tab content 7</Tabs.Content>
      </Tabs>
      {children}
    </>
  )
}
