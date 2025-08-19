import type { MenuItemProps } from '@/types'
import Link from 'next/link'
import { Menu, Tooltip } from 'rsc-daisyui'

export interface NavbarItemProps extends MenuItemProps {
  tipPosition?: 'bottom' | 'right' | 'left'
}

export function NavbarItem(props: NavbarItemProps) {
  const { id, label, icon: Icon, link = '/', isActive, tipPosition } = props

  return (
    <Tooltip color='accent' id={id} position={tipPosition} tip=''>
      <Tooltip.Content>
        <div className='text-xs font-bold'>{label}</div>
      </Tooltip.Content>
      <Menu.Item active={isActive} as={Link} className='flex aspect-square items-center justify-center' href={link}>
        <Icon aria-label='icon' className='size-4' role='img' />
      </Menu.Item>
    </Tooltip>
  )
}
