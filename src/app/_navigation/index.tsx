'use client'

import type { ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Drawer } from 'rsc-daisyui'
import { Atoms, Organisms, Templates } from '@/_navigation/components'
import { useSidebarStore } from '@/hooks'

export interface NavigationProps {
  children: ReactNode
}

export function Navigation({ children }: NavigationProps) {
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
      <Drawer.Side className='h-full' drawerId={drawerId}>
        <Organisms.SidebarMenu />
      </Drawer.Side>
    </Drawer>
  )
}
