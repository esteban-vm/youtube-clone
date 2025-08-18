import { Menu } from 'rsc-daisyui'
import { sidebarMenuItems } from '@/constants'
import { Molecules } from '../.'

export function SidebarMenu() {
  return (
    <Menu as='menu' className='min-h-full w-fit gap-1 bg-base-200 p-4' vanilla>
      {sidebarMenuItems.map((item) => (
        <Molecules.SidebarItem key={item.id} icon={item.icon} label={item.label} />
      ))}
      <hr className='w-full border-t border-base-300' />
      <Molecules.ThemeSwitch />
    </Menu>
  )
}
