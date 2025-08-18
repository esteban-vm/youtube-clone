import type { FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { LuSearch } from 'react-icons/lu'
import { Join, Kbd } from 'rsc-daisyui'

export function SearchInput() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null!)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const searchQuery = inputRef.current.value.trim()

    if (searchQuery) {
      router.push(`/query?q=${searchQuery}`)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'k' && event.ctrlKey) {
        event.preventDefault()
        inputRef.current.focus()
      }
    })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Join className='w-full max-w-lg'>
        <Join.Input as='label' className='w-full !rounded-l-3xl !outline-none' color='neutral'>
          <input
            ref={inputRef}
            aria-label='Buscar videos'
            autoComplete='off'
            className='peer'
            placeholder='Buscar…'
            type='search'
          />
          <Kbd className='hidden select-none peer-placeholder-shown:block' size='sm'>
            Ctrl
          </Kbd>
          <Kbd className='hidden select-none peer-placeholder-shown:block' size='sm'>
            K
          </Kbd>
        </Join.Input>
        <Join.Button className='!rounded-r-3xl' color='neutral' shape='square' type='submit'>
          <LuSearch aria-label='icon' role='img' />
        </Join.Button>
      </Join>
    </form>
  )
}
