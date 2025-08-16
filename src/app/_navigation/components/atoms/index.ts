import tw from 'tailwind-styled-components'

export interface NavbarSideProps {
  side: 'start' | 'end'
}

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
