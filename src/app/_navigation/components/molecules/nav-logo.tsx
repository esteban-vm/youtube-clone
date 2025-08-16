import Image from 'next/image'
import logoSmall from '@/assets/logo-small.png'

export function NavLogo() {
  return (
    <div>
      <Image alt='logo' className='inline size-9 lg:mr-1' src={logoSmall} />
      <span className='hidden align-middle font-semibold select-none lg:inline'>VidTube</span>
    </div>
  )
}
