import type { Props } from '@/types'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from 'rsc-daisyui'
import { useSidebarStore } from '@/hooks'

export interface SidebarItemProps extends Props.BaseMenuItem {
  categoryId: `${number}`
}

export function SidebarItem({ id, categoryId, label, icon: Icon, link = '/' }: SidebarItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { drawerId, currentItem, setCurrentItem } = useSidebarStore()

  const handleClick = () => {
    setCurrentItem(categoryId)
    const checkbox = document.getElementById(drawerId) as HTMLInputElement
    checkbox.checked = false
    if (pathname !== '/') router.push('/')
  }

  return (
    <Menu.Item active={currentItem === id} as={Link} href={link} onClick={handleClick}>
      <Icon aria-label='icon' className='size-4' role='img' />
      {label}
    </Menu.Item>
  )
}
