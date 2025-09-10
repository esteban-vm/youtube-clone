'use client'

import type { MouseEventHandler } from 'react'
import { LuRefreshCcw, LuTriangleAlert } from 'react-icons/lu'
import { Alert, Button } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'

export interface HomeErrorProps {
  error: Error
}

export default function HomeError({ error }: HomeErrorProps) {
  const handleReloadClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.disabled = true
    location.reload()
  }

  return (
    <$.Container>
      <$.Alert color='error'>
        <$.AlertIcon aria-label='icon' role='img' />
        <div>
          <$.Title>Error</$.Title>
          <$.Message>{error.message}</$.Message>
        </div>
        <Button color='error' size='sm' onClick={handleReloadClick}>
          <$.ButtonIcon />
          Recargar página
        </Button>
      </$.Alert>
    </$.Container>
  )
}

function $() {}

$.Container = tw.div`
  col-span-full
  flex
  items-center
  justify-center
`

$.Alert = tw(Alert)`
  w-fit
`

$.AlertIcon = tw(LuTriangleAlert)`
  size-6
  shrink-0
  stroke-current
`

$.ButtonIcon = tw(LuRefreshCcw)`
  size-[1.2em]
`

$.Title = tw.h3`
  font-bold
  uppercase
`

$.Message = tw.p`
  text-xs
  font-semibold
  italic
`
