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

  const channelTitle = channels?.items[0].brandingSettings.channel.title ?? 'Título no disponible'
  const channelThumbnail = channels?.items[0].snippet.thumbnails?.default?.url
  const channelBanner = channels?.items[0].brandingSettings.image?.bannerExternalUrl
  const channelUrl = channels?.items[0].snippet.customUrl ?? 'Dirección no disponible'
  const channelSubscribers = channels?.items[0].statistics.subscriberCount
  const channelViews = channels?.items[0].statistics.videoCount

  const views = helpers.formatValue(channelViews)
  const subscribers = helpers.formatValue(channelSubscribers)

  return (
    <>
      <div className='relative h-72 overflow-hidden rounded-lg'>
        {channelBanner && <Image alt={channelTitle} className='object-cover object-center' src={channelBanner} fill />}
      </div>
      <div className='flex gap-4 p-4'>
        <div className='basis-1/4 text-center'>
          <Avatar>
            <div className='relative w-40 rounded-full'>
              {channelThumbnail && <Image alt={channelTitle} src={channelThumbnail} fill />}
            </div>
          </Avatar>
        </div>
        <div className='basis-3/4'>
          <h1 className='text-2xl font-bold md:text-4xl'>{channelTitle}</h1>
          <p>
            <span className='font-extrabold'>{channelUrl} • </span>&nbsp;
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
