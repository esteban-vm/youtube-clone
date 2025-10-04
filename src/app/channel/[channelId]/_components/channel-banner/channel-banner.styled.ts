import Image from 'next/image'
import tw from 'tailwind-styled-components'

export const BannerContainer = tw.div`
  relative
  h-72
  overflow-hidden
  rounded-b-lg
`

export const BannerImage = tw(Image)`
  object-cover
  object-center
`
