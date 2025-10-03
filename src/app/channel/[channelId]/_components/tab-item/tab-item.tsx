'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tabs } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export function TabItem({ label, link, children }: Props.TabItem) {
  const pathname = usePathname()

  return (
    <>
      <Tabs.Tab active={pathname === link} as='span' className='w-[calc(1/7*100%)]'>
        <Link href={link}>{label}</Link>
      </Tabs.Tab>
      <Content>{children}</Content>
    </>
  )
}

const Content = tw(Tabs.Content)`
  border-base-300
  bg-base-100
  p-10
`
