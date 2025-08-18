import type { SidebarItemProps } from './sidebar-item'
import Link from 'next/link'
import { Menu, Tooltip } from 'rsc-daisyui'
import { cn } from '@/utils/tailwind.utils'

export interface MenuItemProps extends SidebarItemProps {
  tipPosition?: 'bottom' | 'right' | 'left'
  className?: string
}

export function MenuItem({ icon: Icon, label, href = '/', isActive, className, tipPosition = 'right' }: MenuItemProps) {
  return (
    <Tooltip color='accent' position={tipPosition} tip=''>
      <Tooltip.Content>
        <div className='text-xs font-bold'>{label}</div>
      </Tooltip.Content>
      <Menu.Item
        active={isActive}
        as={Link}
        className={cn('flex aspect-square items-center justify-center', className)}
        href={href}
      >
        <Icon aria-label='icon' className='size-4' role='img' />
      </Menu.Item>
    </Tooltip>
  )
}
