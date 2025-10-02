'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { use } from 'react'
import { Tabs } from 'rsc-daisyui'
import { helpers } from '@/utils'

export type TabsLayoutProps = Omit<LayoutProps<'/channel/[channelId]'>, 'tabs'>

export default function TabsLayout({ children, params }: TabsLayoutProps) {
  const { channelId } = use(params)
  const pathname = usePathname()

  const homeLink = helpers.typedRoute(`/channel/${channelId}`)
  const videosLink = helpers.typedRoute(`/channel/${channelId}/videos`)

  const isActiveHome = homeLink === pathname
  const isActiveVideos = videosLink === pathname

  return (
    <Tabs className='w-full p-0.5 text-center md:p-1.5' decorate='border'>
      <Tabs.Tab active={isActiveHome} as='span' className='w-[calc(1/7*100%)]'>
        <Link href={homeLink}>Inicio</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>

      <Tabs.Tab active={isActiveVideos} as='span' className='w-[calc(1/7*100%)]'>
        <Link href={videosLink}>Vídeos</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>

      <Tabs.Tab as='span' className='w-[calc(1/7*100%)]'>
        <Link href={videosLink}>Cortos</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>

      <Tabs.Tab as='span' className='w-[calc(1/7*100%)]'>
        <Link href={videosLink}>En vivo</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>

      <Tabs.Tab as='span' className='w-[calc(1/7*100%)]'>
        <Link href={videosLink}>Podcasts</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>

      <Tabs.Tab as='span' className='w-[calc(1/7*100%)]'>
        <Link href={videosLink}>Listas</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>

      <Tabs.Tab as='span' className='w-[calc(1/7*100%)]'>
        <Link href={videosLink}>Comunidad</Link>
      </Tabs.Tab>
      <Tabs.Content className='border-base-300 bg-base-100 p-10'>{children}</Tabs.Content>
    </Tabs>
  )
}
