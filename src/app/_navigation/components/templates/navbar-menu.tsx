import { Menu, Navbar } from 'rsc-daisyui'
import { navbarMenuItems } from '@/constants'
import { Atoms, Molecules, Organisms } from '@/navigation'

export function NavbarMenu() {
  return (
    <Navbar className='sticky top-0 z-10 w-full gap-1.5 bg-base-300' vanilla>
      <Atoms.NavbarSide side='start'>
        <Molecules.MenuButton />
        <Molecules.NavLogo />
      </Atoms.NavbarSide>
      <Atoms.NavbarCenter>
        <Molecules.SearchInput />
      </Atoms.NavbarCenter>
      <Atoms.NavbarSide className='pr-1' side='end'>
        <Atoms.MenuContainer>
          <Menu as='menu' className='gap-1 p-0' horizontal vanilla>
            {navbarMenuItems.map((item) => (
              <Molecules.NavbarItem key={item.id} {...item} tipPosition='bottom' />
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
