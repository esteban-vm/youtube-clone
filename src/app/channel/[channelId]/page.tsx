'use client'

import Image from 'next/image'
import { use, useState } from 'react'
import { Avatar, Button, Link } from 'rsc-daisyui'
import { useFetchChannels } from '@/hooks'
import { helpers, tw } from '@/utils'

export type ChannelPageProps = PageProps<'/channel/[channelId]'>

export default function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = use(params)
  const [isShowingInfo, setIsShowingInfo] = useState(false)

  const { data: channels } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  const title = channels?.items[0].brandingSettings.channel.title
  const avatar = channels?.items[0].snippet.thumbnails?.default?.url
  const banner = channels?.items[0].brandingSettings.image?.bannerExternalUrl
  const url = channels?.items[0].snippet.customUrl
  const subscriberCount = channels?.items[0].statistics.subscriberCount ?? '0'
  const viewCount = channels?.items[0].statistics.videoCount ?? '0'
  const subscribers = helpers.formatValue(subscriberCount)
  const views = helpers.formatValue(viewCount)

  return (
    <>
      <div className='relative h-72 overflow-hidden rounded-lg'>
        {banner && title && <Image alt={title} className='object-cover object-center' src={banner} fill />}
      </div>
      <div className='flex gap-4 p-4'>
        <div className='basis-1/4 text-center'>
          <Avatar>
            <div className='relative w-40 rounded-full'>
              {avatar && title && <Image alt={title} src={avatar} fill />}
            </div>
          </Avatar>
        </div>
        <div className='basis-3/4'>
          {title && <h1 className='text-2xl font-bold md:text-4xl'>{title}</h1>}
          <p>
            <span className='font-extrabold'>{url} • </span>&nbsp;
            <span>{subscribers} suscriptores • </span>&nbsp;
            <span>{views} vídeos</span>
          </p>
          <p className={tw.cn('max-w-5xl text-pretty', !isShowingInfo && 'line-clamp-1')}>
            Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit, totam voluptatibus
            laborum obcaecati suscipit porro voluptatum, distinctio molestiae alias officia laudantium quam nostrum
            saepe, itaque iusto facere eligendi omnis ducimus ipsum dolores asperiores consequatur. Libero asperiores
            placeat culpa nobis natus eligendi suscipit maxime mollitia ea ut, temporibus blanditiis neque alias dolorum
            harum dolorem officiis!
          </p>
          <Link as='span' className='text-blue-500' onClick={() => setIsShowingInfo(!isShowingInfo)}>
            more
          </Link>
          <Button className='block'>Subscribe</Button>
        </div>
      </div>
    </>
  )
}
