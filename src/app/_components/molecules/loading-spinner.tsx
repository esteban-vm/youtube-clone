import { Loading } from 'rsc-daisyui'
import { Atoms } from '@/_components'

export function LoadingSpinner() {
  return (
    <Atoms.FeedbackContainer>
      <Loading size='xl' variant='ring' />
    </Atoms.FeedbackContainer>
  )
}
