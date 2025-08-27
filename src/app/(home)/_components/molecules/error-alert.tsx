import type { MouseEventHandler } from 'react'
import { LuRefreshCcw, LuTriangleAlert } from 'react-icons/lu'
import { Alert, Button } from 'rsc-daisyui'
import { Atoms } from '@/home/components'

export interface ErrorAlertProps {
  message: string
}

export function ErrorAlert({ message }: ErrorAlertProps) {
  const handleReloadClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.disabled = true
    location.reload()
  }

  return (
    <Atoms.ErrorContainer>
      <Alert className='w-fit' color='error'>
        <LuTriangleAlert aria-label='icon' className='size-6 shrink-0 stroke-current' role='img' />
        <div>
          <Atoms.ErrorTitle>Error</Atoms.ErrorTitle>
          <Atoms.ErrorMessage>{message}</Atoms.ErrorMessage>
        </div>
        <Button color='error' size='sm' onClick={handleReloadClick}>
          <LuRefreshCcw className='size-[1.2em]' />
          Recargar página
        </Button>
      </Alert>
    </Atoms.ErrorContainer>
  )
}
