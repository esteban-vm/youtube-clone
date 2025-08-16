import Image from 'next/image'
import { Avatar } from 'rsc-daisyui'
import avatar from '@/assets/user_profile.jpg'

export function NavAvatar() {
  return (
    <Avatar>
      <div className='w-10 rounded-full'>
        <Image alt='avatar' src={avatar} />
      </div>
    </Avatar>
  )
}
