import * as $ from './loading-spinner.styled'

export function LoadingSpinner() {
  return (
    <$.Container>
      <$.StyledLoading variant='ring' />
    </$.Container>
  )
}
