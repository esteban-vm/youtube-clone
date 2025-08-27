import { Menu } from 'rsc-daisyui'
import { sidebarMenuItems } from '@/constants'
import { Atoms, Molecules } from '@/nav/components'

export function SidebarMenu() {
  return (
    <Menu as='menu' className='min-h-full w-fit gap-1 bg-base-200 p-4' vanilla>
      {sidebarMenuItems.map((item) => (
        <Molecules.SidebarItem key={item.id} {...item} />
      ))}
      <Atoms.Separator />
      <Molecules.ThemeSwitch />
    </Menu>
  )
}
