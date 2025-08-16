import { LuMenu } from 'react-icons/lu'
import { Button } from 'rsc-daisyui'

export interface MenuButtonProps {
  id: string
}

export function MenuButton({ id }: MenuButtonProps) {
  return (
    <Button as='label' htmlFor={id} shape='square' ghost>
      <LuMenu className='size-6' role='img' />
    </Button>
  )
}
