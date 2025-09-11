import { Loading } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const Container = tw.div`
  relative
  aspect-video
  w-full
  rounded-xl
  bg-black
`

export const StyledLoading = tw(Loading)`
  absolute
  top-1/2
  left-1/2
  size-10
  -translate-x-1/2
  -translate-y-1/2
  text-white
`
