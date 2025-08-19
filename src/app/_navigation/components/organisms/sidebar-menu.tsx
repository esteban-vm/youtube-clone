import { Menu } from 'rsc-daisyui'
import { Molecules } from '@/_navigation/components'
import { sidebarMenuItems } from '@/constants'

export function SidebarMenu() {
  return (
    <Menu as='menu' className='min-h-full w-fit gap-1 bg-base-200 p-4' vanilla>
      {sidebarMenuItems.map((item) => (
        <Molecules.SidebarItem key={item.id} {...item} />
      ))}
      <hr className='w-full border-t border-base-300' />
      <Molecules.ThemeSwitch />
    </Menu>
  )
}
