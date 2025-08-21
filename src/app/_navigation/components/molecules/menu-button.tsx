import { LuMenu } from 'react-icons/lu'
import { Button } from 'rsc-daisyui'
import { useSidebarStore } from '@/hooks'

export function MenuButton() {
  const { drawerId } = useSidebarStore()

  return (
    <Button as='label' htmlFor={drawerId} shape='circle' ghost>
      <LuMenu className='size-6' role='img' />
    </Button>
  )
}
