import Link from 'next/link'
import { Menu, Tooltip } from 'rsc-daisyui'

export interface NavbarItemProps extends Props.NavbarItem {
  tip: 'bottom' | 'left'
}

export function NavbarItem({ label, icon: Icon, link = '/', tip }: NavbarItemProps) {
  return (
    <Tooltip color='accent' position={tip} tip=''>
      <Tooltip.Content>
        <div className='text-xs font-bold'>{label}</div>
      </Tooltip.Content>
      <Menu.Item as={Link} className='flex aspect-square items-center justify-center' href={link}>
        <Icon aria-label='icon' className='size-4' role='img' />
      </Menu.Item>
    </Tooltip>
  )
}
