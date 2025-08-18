import type { IconType } from 'react-icons'
import Link from 'next/link'
import { Menu, Tooltip } from 'rsc-daisyui'
import { cn } from '@/utils/tailwind.utils'

export interface MenuItemProps {
  icon: IconType
  tipText: string
  tipPosition?: 'bottom' | 'right' | 'left'
  href?: string
  className?: string
  isActive?: boolean
}

export function MenuItem({
  icon: Icon,
  tipText,
  tipPosition = 'right',
  href = '/',
  className,
  isActive,
}: MenuItemProps) {
  return (
    <Tooltip color='accent' position={tipPosition} tip=''>
      <Tooltip.Content>
        <div className='text-xs font-bold'>{tipText}</div>
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
