'use client'

import type { Props } from '@/types'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Drawer } from 'rsc-daisyui'
import { useSidebarStore } from '@/hooks'
import { Atoms, Organisms, Templates } from '@/nav/components'

export function Navigation({ children }: Props.WithChildren) {
  const { theme } = useTheme()
  const { drawerId } = useSidebarStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Drawer className='min-h-screen' id={drawerId} theme={theme}>
      <Drawer.Content className='relative flex flex-col'>
        <Templates.NavbarMenu />
        <Atoms.PageContainer>{children}</Atoms.PageContainer>
      </Drawer.Content>
      <Drawer.Side className='z-10 h-full' drawerId={drawerId}>
        <Organisms.SidebarMenu />
      </Drawer.Side>
    </Drawer>
  )
}
