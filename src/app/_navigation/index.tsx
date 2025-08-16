'use client'

import type { ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useId, useState } from 'react'
import { LuBell, LuLayoutGrid, LuVideo } from 'react-icons/lu'
import { Drawer, Menu, Navbar } from 'rsc-daisyui'
import { Atoms, Molecules } from './components'

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
        <Navbar className='w-screen gap-1.5 rounded-b-md bg-base-300 shadow-md shadow-base-200' vanilla>
          <Atoms.NavbarSide side='start'>
            <Molecules.MenuButton id={id} />
            <Molecules.NavLogo />
          </Atoms.NavbarSide>
          <Atoms.NavbarCenter>
            <Molecules.SearchInput />
          </Atoms.NavbarCenter>
          <Atoms.NavbarSide className='pr-1' side='end'>
            <Atoms.MenuContainer>
              <Menu as='menu' className='gap-1 p-0' horizontal vanilla>
                <Molecules.MenuItem icon={LuVideo} />
                <Molecules.MenuItem icon={LuLayoutGrid} />
                <Molecules.MenuItem icon={LuBell} />
              </Menu>
            </Atoms.MenuContainer>
            <Molecules.NavAvatar />
          </Atoms.NavbarSide>
        </Navbar>
        <Atoms.PageContainer>{children}</Atoms.PageContainer>
      </Drawer.Content>
      <Drawer.Side className='absolute h-full' drawerId={id}>
        <Menu as='menu' className='min-h-full w-fit gap-1 bg-base-200 p-4' vanilla>
          <Molecules.MenuItem className='lg:hidden' icon={LuVideo} />
          <Molecules.MenuItem className='lg:hidden' icon={LuLayoutGrid} />
          <Molecules.MenuItem className='lg:hidden' icon={LuBell} />
        </Menu>
      </Drawer.Side>
    </Drawer>
  )
}
