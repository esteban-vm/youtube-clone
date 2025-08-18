import { Menu } from 'rsc-daisyui'
import { sidebarMenuItems } from '@/constants'
import { Molecules } from '../.'

export function SidebarMenu() {
  return (
    <Menu as='menu' className='min-h-full w-fit gap-1 bg-base-200 p-4' vanilla>
      {sidebarMenuItems.map((item) => (
        <Molecules.MenuItem key={item.id} icon={item.icon} tipText={item.label} />
      ))}
    </Menu>
  )
}
