'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Tabs } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export function TabItem({ label, link, children }: Props.TabItem) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => router.replace(link)

  return (
    <>
      <Tabs.Tab active={pathname === link} as='button' className='w-[calc(1/7*100%)]' onClick={handleClick}>
        {label}
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
