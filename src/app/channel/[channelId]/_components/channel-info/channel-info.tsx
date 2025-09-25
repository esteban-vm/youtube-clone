import Image from 'next/image'
import { useState } from 'react'
import { Avatar, Link } from 'rsc-daisyui'
import { helpers, tw } from '@/utils'
import * as $ from './channel-info.styled'

export function ChannelInfo({ channel }: Props.WithChannel) {
  const [isShowingDesc, setIsShowingDesc] = useState(false)
  const { brandingSettings, snippet, statistics } = channel

  const channelTitle = brandingSettings.channel.title ?? 'Título no disponible'
  const channelThumbnail = snippet.thumbnails?.default?.url
  const channelUrl = snippet.customUrl ?? 'Dirección no disponible'
  const channelVideos = statistics.videoCount
  const channelSubscribers = statistics.subscriberCount
  const channelDescription = snippet.description ?? 'Descripción no disponible'

  const videos = helpers.formatValue(channelVideos)
  const subscribers = helpers.formatValue(channelSubscribers)

  return (
    <$.InfoContainer>
      <$.RightSide>
        <Avatar>
          <$.ThumbnailContainer>
            {channelThumbnail && <Image alt={channelTitle} src={channelThumbnail} fill />}
          </$.ThumbnailContainer>
        </Avatar>
      </$.RightSide>
      <$.LeftSide>
        <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
        <p>
          <span className='font-extrabold'>{channelUrl} • </span>&nbsp;
          <span>{subscribers} suscriptores • </span>&nbsp;
          <span>{videos} vídeos</span>
        </p>
        <$.ChannelDescription className={tw.cn(!isShowingDesc && 'line-clamp-1')}>
          {channelDescription}
        </$.ChannelDescription>
        <Link as='span' className='text-sky-500' hover onClick={() => setIsShowingDesc(!isShowingDesc)}>
          ver {isShowingDesc ? 'menos' : 'más'}
        </Link>
        <$.StyledButton>Suscríbete</$.StyledButton>
      </$.LeftSide>
    </$.InfoContainer>
  )
}
