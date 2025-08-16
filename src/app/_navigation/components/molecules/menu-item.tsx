import type { IconType } from 'react-icons'
import Link from 'next/link'
import { Menu, Tooltip } from 'rsc-daisyui'
import { cn } from '@/utils/tailwind.utils'

export interface MenuItemProps {
  icon: IconType
  tipText: string
  tipPosition?: 'bottom' | 'right'
  href?: string
  className?: string
}

export function MenuItem({ icon: Icon, tipText, tipPosition = 'right', href = '/', className }: MenuItemProps) {
  return (
    <Tooltip color='accent' position={tipPosition} tip=''>
      <Tooltip.Content>
        <div className='text-xs font-bold'>{tipText}</div>
      </Tooltip.Content>
      <Menu.Item as={Link} className={cn('flex aspect-square items-center justify-center', className)} href={href}>
        <Icon aria-label='icon' className='size-4' role='img' />
      </Menu.Item>
    </Tooltip>
  )
}
