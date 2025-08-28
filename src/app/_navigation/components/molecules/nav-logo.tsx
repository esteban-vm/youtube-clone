import Image from 'next/image'
import Link from 'next/link'
import logoSmall from '@/assets/logo-small.png'
import { useSidebarStore } from '@/hooks'
import { Atoms } from '@/nav/components'

export function NavLogo() {
  const setCategory = useSidebarStore((state) => state.setCategory)

  return (
    <Link href='/'>
      <div className='relative size-9' onClick={() => setCategory('0')}>
        <Image alt='logo' src={logoSmall} fill />
        <Atoms.LogoText>VidTube</Atoms.LogoText>
      </div>
    </Link>
  )
}
