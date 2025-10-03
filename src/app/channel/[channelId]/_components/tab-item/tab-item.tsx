'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Tabs } from 'rsc-daisyui'

export function TabItem({ label, link, children }: Props.TabItem) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => router.replace(link)

  return (
    <>
      <Tabs.Tab active={pathname === link} as='button' className='w-[calc(1/7*100%)]' onClick={handleClick}>
        {label}
      </Tabs.Tab>
      <Tabs.Content className='p-10'>{children}</Tabs.Content>
    </>
  )
}
