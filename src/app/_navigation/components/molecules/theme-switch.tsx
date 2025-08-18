import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'
import { Menu } from 'rsc-daisyui'

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme((value) => (value === 'light' ? 'dark' : 'light'))
  }

  return (
    <Menu.Item as='div' className='cursor-default'>
      <label className='toggle scale-110 text-base-content'>
        <input
          checked={resolvedTheme === 'dark'}
          className='theme-controller'
          type='checkbox'
          value='synthwave'
          onChange={handleThemeChange}
        />
        <LuSun aria-label='sun' className='size-full fill-none stroke-current' />
        <LuMoon aria-label='moon' className='size-full fill-none stroke-current' />
      </label>
    </Menu.Item>
  )
}
