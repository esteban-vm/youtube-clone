import { Menu, Navbar } from 'rsc-daisyui'
import { navbarMenuItems } from '@/constants'
import { Atoms, Molecules, Organisms } from '../.'

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
              <Molecules.MenuItem key={item.id} icon={item.icon} label={item.label} tipPosition='bottom' />
            ))}
          </Menu>
        </Atoms.MenuContainer>
        <Atoms.AvatarContainer>
          <Molecules.NavAvatar />
        </Atoms.AvatarContainer>
        <Organisms.MobileMenu />
      </Atoms.NavbarSide>
    </Navbar>
  )
}
