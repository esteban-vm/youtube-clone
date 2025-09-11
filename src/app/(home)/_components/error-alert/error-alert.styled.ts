import { LuRefreshCcw, LuTriangleAlert } from 'react-icons/lu'
import { Alert } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export const AlertIcon = tw(LuTriangleAlert)`
  size-6
  shrink-0
  stroke-current
`

export const ButtonIcon = tw(LuRefreshCcw)`
  size-[1.2em]
`

export const Container = tw.div`
  col-span-full
  flex
  items-center
  justify-center
`

export const ErrorMessage = tw.p`
  text-xs
  font-semibold
  italic
`

export const ErrorTitle = tw.h3`
  font-bold
  uppercase
`

export const StyledAlert = tw(Alert)`
  w-fit
`
