import Image from 'next/image'
import Link from 'next/link'
import logoSmall from '@/assets/logo-small.png'

export function NavLogo() {
  return (
    <Link href='/'>
      <div>
        <Image alt='logo' className='inline size-9 lg:mr-1' src={logoSmall} />
        <span className='hidden align-middle font-semibold select-none lg:inline'>VidTube</span>
      </div>
    </Link>
  )
}
