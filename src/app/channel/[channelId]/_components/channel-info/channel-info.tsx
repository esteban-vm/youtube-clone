import Image from 'next/image'
import { useState } from 'react'
import { Avatar, Link } from 'rsc-daisyui'
import { helpers, tw } from '@/utils'
import * as $ from './channel-info.styled'

export function ChannelInfo({ channel }: Props.WithChannel) {
  const [isShowingDesc, setIsShowingDesc] = useState(false)
  const { brandingSettings, snippet, statistics } = channel

  const channelUrl = snippet.customUrl
  const channelVideos = statistics.videoCount
  const channelDescription = snippet.description
  const channelTitle = brandingSettings.channel.title
  const channelSubs = statistics.subscriberCount
  const channelThumbnail = snippet.thumbnails?.default?.url

  const formattedVideos = helpers.formatValue(channelVideos)
  const formattedSubs = helpers.formatValue(channelSubs)

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
          <span>{formattedSubs} suscriptores • </span>&nbsp;
          <span>{formattedVideos} vídeos</span>
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
