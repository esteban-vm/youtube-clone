import type { MouseEventHandler } from 'react'
import { Button } from 'rsc-daisyui'
import * as $ from './error-alert.styled'

export interface ErrorAlertProps {
  error: Error
}

export function ErrorAlert({ error }: ErrorAlertProps) {
  const handleReloadClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.disabled = true
    location.reload()
  }

  return (
    <$.Container>
      <$.StyledAlert color='error'>
        <$.AlertIcon aria-label='icon' role='img' />
        <div>
          <$.ErrorTitle>Ha ocurrido un error</$.ErrorTitle>
          <$.ErrorMessage>{error.message}</$.ErrorMessage>
        </div>
        <Button color='error' size='sm' onClick={handleReloadClick}>
          <$.ButtonIcon />
          Recargar página
        </Button>
      </$.StyledAlert>
    </$.Container>
  )
}
