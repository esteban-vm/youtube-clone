import { Kbd } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export interface NavbarSideProps {
  side: 'start' | 'end'
}

export const AvatarContainer = tw.div`
  hidden
  lg:block
`

export const LogoText = tw.span`
  absolute
  top-1/5
  left-[110%]
  hidden
  font-semibold
  select-none
  lg:block
`

export const MenuContainer = tw.div`
  hidden
  lg:block
`

export const NavbarCenter = tw.div`
  grow
  text-center
`

export const NavbarSide = tw.div<NavbarSideProps>`
  ${(props) => (props.side === 'start' ? 'justify-start' : 'justify-end')}
  flex
  w-fit
  items-center
  gap-1.5
  xl:w-1/4
`

export const PageContainer = tw.div`
  flex
  flex-grow
  items-center
  justify-center
`

export const Separator = tw.hr`
  w-full
  border-t
  border-base-300
`

export const StyledKbd = tw(Kbd)`
  hidden
  select-none
  peer-placeholder-shown:block
`

export const ThemeLabel = tw.label`
  toggle
  scale-[120%]
  text-base-content
  dark:rounded-full
  dark:before:rounded-full
  [&_svg]:size-full
`
