import tw from 'tailwind-styled-components'

export const CommenterName = tw.span`
  text-base
  font-semibold
`

export const ImageContainer = tw.div`
  relative
  size-12
  overflow-hidden
  rounded-full
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
