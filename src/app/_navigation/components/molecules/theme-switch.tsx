import { useTheme } from 'next-themes'
import { useId } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { Menu } from 'rsc-daisyui'
import { Atoms } from '@/_navigation/components'

export function ThemeSwitch() {
  const id = useId()
  const { resolvedTheme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme((value) => (value === 'light' ? 'dark' : 'light'))
  }

  return (
    <Menu.Item as='div' className='cursor-default self-center'>
      <Atoms.ThemeLabel>
        <input checked={resolvedTheme === 'dark'} id={id} type='checkbox' onChange={handleThemeChange} />
        <LuSun aria-label='sun' />
        <LuMoon aria-label='moon' />
      </Atoms.ThemeLabel>
    </Menu.Item>
  )
}
