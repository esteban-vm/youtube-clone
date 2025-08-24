import Image from 'next/image'
import Link from 'next/link'
import { Atoms } from '@/_navigation/components'
import logoSmall from '@/assets/logo-small.png'
import { useSidebarStore } from '@/hooks'

export function NavLogo() {
  const setItem = useSidebarStore((state) => state.setCurrentItem)

  return (
    <Link href='/'>
      <div className='relative size-9' onClick={() => setItem(0)}>
        <Image alt='logo' src={logoSmall} fill />
        <Atoms.LogoText>VidTube</Atoms.LogoText>
      </div>
    </Link>
  )
}
