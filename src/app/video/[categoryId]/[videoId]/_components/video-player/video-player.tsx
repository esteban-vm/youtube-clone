import Image from 'next/image'
import Link from 'next/link'
import { LuListMusic, LuShare2, LuThumbsUp } from 'react-icons/lu'
import { Button, Collapse } from 'rsc-daisyui'
import { useFetchChannels, useFetchComments } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-player.styled'

export function VideoPlayer({ video }: Props.WithVideo) {
  const { id: videoId, snippet, statistics } = video
  const { channelId, description, publishedAt } = snippet

  const { data: channels } = useFetchChannels({
    queryKey: ['Channels', channelId],
    params: { id: channelId },
  })

  const { data: _comments } = useFetchComments({
    queryKey: ['Comments', videoId],
    params: {
      videoId,
      maxResults: '50',
    },
  })

  const videoTitle = snippet.title
  const youtubeLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  const channelTitle = channels?.items[0].snippet.title ?? ''
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const channelThumbnail = channels?.items[0].snippet.thumbnails?.default?.url
  const subscriberCount = channels?.items[0].statistics.subscriberCount ?? '0'
  const subscribers = helpers.formatValue(subscriberCount)
  const date = helpers.formatDate(publishedAt)
  const views = helpers.formatValue(statistics.viewCount)

  return (
    <>
      <iframe
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
        className='aspect-video w-full'
        referrerPolicy='strict-origin-when-cross-origin'
        src={youtubeLink}
        allowFullScreen
      />
      <h3 className='text-xl font-semibold'>{videoTitle}</h3>
      <$.VideoDetails>
        <$.ChannelContainer>
          <Link href={channelLink} passHref>
            <$.StyledAvatar>
              {channelThumbnail && <Image alt={channelTitle} className='rounded-full' src={channelThumbnail} fill />}
            </$.StyledAvatar>
          </Link>
          <$.ChannelInfo>
            <Link href={channelLink} passHref>
              <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
            </Link>
            <$.ChannelSubscribers>{subscribers} suscriptores</$.ChannelSubscribers>
          </$.ChannelInfo>
          <$.StyledButton>Suscríbete</$.StyledButton>
        </$.ChannelContainer>
        <$.ActionContainer>
          <Button ghost>
            <LuThumbsUp /> {helpers.formatValue(statistics.likeCount)}
          </Button>
          <Button ghost>
            <LuShare2 /> Compartir
          </Button>
          <Button ghost>
            <LuListMusic /> Guardar
          </Button>
        </$.ActionContainer>
      </$.VideoDetails>
      <Collapse as='details' className='border-none bg-base-200 dark:rounded-md' icon='arrow'>
        <Collapse.Title as='summary' className='select-none'>
          {views} vistas • {date}
        </Collapse.Title>
        <Collapse.Content className='text-balance'>
          {description.length ? (
            description
          ) : (
            <span className='italic'>El usuario no proporcionó ninguna descripción para este vídeo.</span>
          )}
        </Collapse.Content>
      </Collapse>
    </>
  )
}
