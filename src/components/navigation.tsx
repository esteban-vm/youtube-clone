'use client'

import type { ReactNode } from 'react'
import { useClickOutside } from '@react-hooks-hub/use-click-outside'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Button, Drawer, Menu, Navbar } from 'rsc-daisyui'
import logoSmall from '@/assets/logo-small.png'

export interface NavigationProps {
  children: ReactNode
}

export function Navigation({ children }: NavigationProps) {
  const id = useId()
  const { theme } = useTheme()
  const ref = useRef<HTMLButtonElement>(null!)
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useClickOutside([ref], (isOutside) => {
    if (isOutside) setIsOpen(false)
  })

  if (!isClient) return null

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Drawer className='sticky top-0 z-10 h-screen w-full overflow-hidden rounded' id={id} open={isOpen} theme={theme}>
      <Drawer.Content className='flex flex-col'>
        <Navbar as='nav' className='w-full bg-base-300' vanilla>
          <div className='flex-none lg:hidden'>
            <Button ref={ref} shape='square' ghost onClick={toggleOpen}>
              <BiMenuAltLeft className='inline-block size-3/4 stroke-current' />
            </Button>
          </div>
          <div className='mx-2 flex-1 px-2 text-xl font-semibold'>
            <Image alt='logo' className='inline-block size-7' src={logoSmall} /> VidTube
          </div>
          <div className='hidden flex-none lg:block'>
            <Menu horizontal vanilla>
              <Menu.Item>Navbar Item 1</Menu.Item>
              <Menu.Item>Navbar Item 2</Menu.Item>
            </Menu>
          </div>
        </Navbar>
        <div className='flex flex-grow items-center justify-center'>{children}</div>
      </Drawer.Content>
      <Drawer.Side className='absolute h-full' drawerId={id}>
        <Menu as='menu' className='min-h-full w-80 border border-primary bg-base-200 p-4' vanilla>
          <Menu.Item>Sidebar Item 1</Menu.Item>
          <Menu.Item>Sidebar Item 2</Menu.Item>
        </Menu>
      </Drawer.Side>
    </Drawer>
  )
}
