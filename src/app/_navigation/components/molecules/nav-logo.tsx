import Image from 'next/image'
import logoSmall from '@/assets/logo-small.png'

// import logo from '@/assets/logo.png'

export function NavLogo() {
  return (
    <div>
      {/* <Image alt='logo' className='mr-1 inline size-9 lg:hidden' src={logoSmall} /> */}
      {/* <Image alt='logo' className='hidden h-9 w-auto lg:mr-1 lg:inline' src={logo} /> */}
      <Image alt='logo' className='inline size-9 lg:mr-1' src={logoSmall} />
      <span className='hidden align-middle font-semibold lg:inline'>VidTube</span>
    </div>
  )
}
