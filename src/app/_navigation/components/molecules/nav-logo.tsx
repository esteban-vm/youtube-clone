import Image from 'next/image'
import Link from 'next/link'
import logoSmall from '@/assets/logo-small.png'

export function NavLogo() {
  return (
    <Link href='/'>
      <div className='relative size-9'>
        <Image alt='logo' src={logoSmall} fill />
        <span className='absolute top-1/5 left-[110%] hidden font-semibold select-none lg:block'>VidTube</span>
      </div>
    </Link>
  )
}
