import { Dropdown, Menu, Navbar } from 'rsc-daisyui'
import { navbarMenuItems } from '@/constants'
import { Atoms, Molecules } from '../.'

export function NavbarMenu({ id }: Molecules.MenuButtonProps) {
  return (
    <Navbar className='w-screen gap-1.5 rounded-b-md bg-base-300 shadow-md shadow-base-200' vanilla>
      <Atoms.NavbarSide side='start'>
        <Molecules.MenuButton id={id} />
        <Molecules.NavLogo />
      </Atoms.NavbarSide>
      <Atoms.NavbarCenter>
        <Molecules.SearchInput />
      </Atoms.NavbarCenter>
      <Atoms.NavbarSide className='pr-1' side='end'>
        <Atoms.MenuContainer>
          <Menu as='menu' className='gap-1 p-0' horizontal vanilla>
            {navbarMenuItems.map((item) => (
              <Molecules.MenuItem key={item.id} icon={item.icon} tipPosition='bottom' tipText={item.label} />
            ))}
          </Menu>
        </Atoms.MenuContainer>
        <Atoms.AvatarContainer>
          <Molecules.NavAvatar />
        </Atoms.AvatarContainer>
        <Dropdown align='center' className='lg:hidden'>
          <Dropdown.Button shape='square' ghost vanilla>
            <Molecules.NavAvatar />
          </Dropdown.Button>
          <Dropdown.Menu as='menu' className='mt-4 w-fit bg-base-200'>
            {navbarMenuItems.map((item) => (
              <Molecules.MenuItem key={item.id} icon={item.icon} tipPosition='left' tipText={item.label} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Atoms.NavbarSide>
    </Navbar>
  )
}
