'use client'

import type { ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useId, useState } from 'react'
import { Drawer } from 'rsc-daisyui'
import { Atoms, Organisms, Templates } from './components'

export interface NavigationProps {
  children: ReactNode
}

export function Navigation({ children }: NavigationProps) {
  const id = useId()
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Drawer className='h-screen overflow-hidden' id={id} theme={theme}>
      <Drawer.Content className='flex flex-col'>
        <Templates.NavbarMenu id={id} />
        <Atoms.PageContainer>{children}</Atoms.PageContainer>
      </Drawer.Content>
      <Drawer.Side className='absolute h-full' drawerId={id}>
        <Organisms.SidebarMenu />
      </Drawer.Side>
    </Drawer>
  )
}
