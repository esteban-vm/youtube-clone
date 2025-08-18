import { useClickOutside } from '@react-hooks-hub/use-click-outside'
import { useRef } from 'react'
import { Dropdown } from 'rsc-daisyui'
import { navbarMenuItems } from '@/constants'
import { Molecules } from '../.'

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null!)

  useClickOutside([menuRef], (isOutside) => {
    if (isOutside) {
      menuRef.current.open = false
    }
  })

  return (
    <Dropdown ref={menuRef} align='center' className='lg:hidden'>
      <Dropdown.Button shape='square' ghost vanilla>
        <Molecules.NavAvatar />
      </Dropdown.Button>
      <Dropdown.Menu as='menu' className='mt-4 w-fit bg-base-200'>
        {navbarMenuItems.map((item) => (
          <Molecules.MenuItem key={item.id} icon={item.icon} label={item.label} tipPosition='left' />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
