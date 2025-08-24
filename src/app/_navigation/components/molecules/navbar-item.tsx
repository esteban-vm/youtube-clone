import type { MenuItemProps } from '@/types'
import Link from 'next/link'
import { Menu, Tooltip } from 'rsc-daisyui'

export interface NavbarItemProps extends MenuItemProps {
  tipPosition: 'bottom' | 'left'
}

export function NavbarItem({ label, icon: Icon, link = '/', tipPosition }: NavbarItemProps) {
  return (
    <Tooltip color='accent' position={tipPosition} tip=''>
      <Tooltip.Content>
        <div className='text-xs font-bold'>{label}</div>
      </Tooltip.Content>
      <Menu.Item as={Link} className='flex aspect-square items-center justify-center' href={link}>
        <Icon aria-label='icon' className='size-4' role='img' />
      </Menu.Item>
    </Tooltip>
  )
}
