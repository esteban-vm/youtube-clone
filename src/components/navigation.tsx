'use client'

import type { ReactNode } from 'react'
import { useClickOutside } from '@react-hooks-hub/use-click-outside'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Button, Drawer, Menu, Navbar } from 'rsc-daisyui'
import logoSmall from '@/assets/logo-small.png'

export interface NavigationProps {
  children: ReactNode
}

export function Navigation({ children }: NavigationProps) {
  const id = useId()
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null!)
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useClickOutside([ref], (isOutside) => {
    if (isOutside) close()
  })

  if (!isClient) return null

  return (
    <Drawer className='sticky top-0 z-10 h-screen w-full overflow-hidden' id={id} open={isOpen} theme={theme}>
      <Drawer.Content className='flex flex-col'>
        <Navbar as='nav' className='w-full bg-base-300' vanilla>
          <div className='flex-none'>
            <Button shape='square' ghost onClick={toggle}>
              {!isOpen ? <FaBars className='size-8/12' /> : <FaXmark className='size-8/12' />}
            </Button>
          </div>
          <div className='ml-1.5 flex-1 text-lg'>
            <Image alt='logo' className='inline size-7' src={logoSmall} />
            <span className='hidden font-semibold lg:inline'> VidTube</span>
          </div>
          <div className='hidden flex-none lg:block'>
            <Menu className='p-0' horizontal vanilla>
              <Menu.Item>Navbar Item 1</Menu.Item>
              <Menu.Item>Navbar Item 2</Menu.Item>
            </Menu>
          </div>
        </Navbar>
        <div className='flex flex-grow items-center justify-center'>{children}</div>
      </Drawer.Content>
      <Drawer.Side ref={ref} className='absolute h-full' drawerId={id}>
        <Menu as='menu' className='min-h-full w-80 border border-primary bg-base-200 p-4' vanilla>
          <Menu.Item onClick={close}>Sidebar Item 1</Menu.Item>
          <Menu.Item onClick={close}>Sidebar Item 2</Menu.Item>
        </Menu>
      </Drawer.Side>
    </Drawer>
  )
}
