import tw from 'tailwind-styled-components'

export const AuthorName = tw.span`
  text-base
  font-semibold
  hover:opacity-80
`

export const ImageContainer = tw.div`
  relative
  size-12
  overflow-hidden
  rounded-full
  hover:opacity-80
`

export const InfoContainer = tw.div`
  space-x-1.5
  text-sm
  [&_svg]:inline
  [&_svg]:cursor-pointer
  [&_svg]:text-base
  [&_svg]:opacity-60
  [&_svg]:hover:opacity-100
`
