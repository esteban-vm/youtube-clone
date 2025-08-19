import type { MenuItemProps } from '@/types'
import Link from 'next/link'
import { Menu } from 'rsc-daisyui'
import { useSidebarStore } from '@/hooks'

export function SidebarItem(props: MenuItemProps) {
  const { drawerId, currentItem, setCurrentItem } = useSidebarStore()
  const { id, label, icon: Icon, link = '/' } = props

  const handleClick = () => {
    setCurrentItem(id)
    const checkbox = document.getElementById(drawerId) as HTMLInputElement
    checkbox.checked = false
  }

  return (
    <Menu.Item active={currentItem === id} as={Link} href={link} onClick={handleClick}>
      <Icon aria-label='icon' className='size-4' role='img' />
      {label}
    </Menu.Item>
  )
}
