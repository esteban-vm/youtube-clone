import { LuSearch } from 'react-icons/lu'
import { Input } from 'rsc-daisyui'

export function SearchInput() {
  return (
    <Input as='label' className='w-full max-w-xl !rounded-3xl'>
      <input autoComplete='off' className='peer' placeholder='Search' type='search' />
      <LuSearch className='hidden text-lg opacity-50 peer-placeholder-shown:block' />
    </Input>
  )
}
