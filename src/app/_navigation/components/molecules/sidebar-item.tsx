import type { IconType } from 'react-icons'
import Link from 'next/link'
import { Menu } from 'rsc-daisyui'

export interface SidebarItemProps {
  icon: IconType
  label: string
  href?: string
  isActive?: boolean
}

export function SidebarItem({ icon: Icon, label, href = '/', isActive }: SidebarItemProps) {
  return (
    <Menu.Item active={isActive} as={Link} href={href}>
      <Icon aria-label='icon' className='size-4' role='img' />
      {label}
    </Menu.Item>
  )
}
