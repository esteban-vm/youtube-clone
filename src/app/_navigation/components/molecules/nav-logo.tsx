import Image from 'next/image'
import Link from 'next/link'
import logoSmall from '@/assets/logo-small.png'
import { Atoms } from '../.'

export function NavLogo() {
  return (
    <Link href='/'>
      <div className='relative size-9'>
        <Image alt='logo' src={logoSmall} fill />
        <Atoms.LogoText>VidTube</Atoms.LogoText>
      </div>
    </Link>
  )
}
