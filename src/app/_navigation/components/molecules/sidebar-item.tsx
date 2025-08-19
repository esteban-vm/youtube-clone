import type { MenuItemProps } from '@/types'
import Link from 'next/link'
import { Menu } from 'rsc-daisyui'

export function SidebarItem(props: MenuItemProps) {
  const { id, label, icon: Icon, link = '/', isActive } = props

  return (
    <Menu.Item active={isActive} as={Link} href={link} id={id}>
      <Icon aria-label='icon' className='size-4' role='img' />
      {label}
    </Menu.Item>
  )
}
