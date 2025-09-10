import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from 'rsc-daisyui'
import { useSidebarStore } from '@/hooks'

export function SidebarItem({ categoryId, label, icon: Icon, link = '/' }: Props.SidebarItem) {
  const router = useRouter()
  const pathname = usePathname()
  const { drawerId, category, setCategory } = useSidebarStore()

  const handleClick = () => {
    setCategory(categoryId)
    const checkbox = document.getElementById(drawerId) as HTMLInputElement
    checkbox.checked = false
    if (pathname !== '/') router.push('/')
  }

  return (
    <Menu.Item active={category === categoryId} as={Link} href={link} onClick={handleClick}>
      <Icon aria-label='icon' className='size-4' role='img' />
      {label}
    </Menu.Item>
  )
}
