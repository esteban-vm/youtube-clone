import type { IconType } from 'react-icons'
import Link from 'next/link'
import { Menu } from 'rsc-daisyui'
import { cn } from '@/utils/tailwind.utils'

export interface MenuItemProps {
  icon: IconType
  href?: string
  className?: string
}

export function MenuItem({ href = '/', icon: Icon, className }: MenuItemProps) {
  return (
    <Menu.Item as={Link} className={cn('flex aspect-square items-center justify-center', className)} href={href}>
      <Icon className='size-4' role='img' />
    </Menu.Item>
  )
}
