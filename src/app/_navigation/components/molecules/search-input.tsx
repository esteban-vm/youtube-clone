import type { FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { LuSearch } from 'react-icons/lu'
import { Input } from 'rsc-daisyui'

export function SearchInput() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null!)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const searchQuery = inputRef.current.value.trim()

    if (searchQuery) {
      router.push(`/query/${encodeURI(searchQuery)}`)
    }

    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input as='label' className='w-full max-w-lg !rounded-3xl !outline-none'>
        <input ref={inputRef} autoComplete='off' className='peer' placeholder='Buscar…' type='search' />
        <LuSearch aria-label='icon' className='hidden text-lg opacity-50 peer-placeholder-shown:block' role='img' />
      </Input>
    </form>
  )
}
