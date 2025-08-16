import { LuSearch } from 'react-icons/lu'
import { Input } from 'rsc-daisyui'

export function SearchInput() {
  return (
    <Input as='label' className='w-full max-w-lg !rounded-3xl'>
      <input autoComplete='off' className='peer' placeholder='Buscar…' type='search' />
      <LuSearch aria-label='icon' className='hidden text-lg opacity-50 peer-placeholder-shown:block' role='img' />
    </Input>
  )
}
