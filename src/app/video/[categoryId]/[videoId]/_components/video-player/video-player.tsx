'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LuListMusic, LuShare2, LuThumbsUp } from 'react-icons/lu'
import { Button, Collapse, List } from 'rsc-daisyui'
import { useFetchChannels, useFetchComments } from '@/hooks'
import { helpers } from '@/utils'
import { CommentItem } from './comment-item'
import * as $ from './video-player.styled'

export function VideoPlayer({ video }: Props.WithVideo) {
  const { id: videoId, snippet, statistics } = video
  const { commentCount, viewCount } = statistics
  const { channelId, description, publishedAt } = snippet

  const { data: channels, isSuccess: isSuccessChannels } = useFetchChannels({
    params: { id: channelId },
    queryKey: ['CHANNEL ID', channelId],
  })

  const { data: comments, isSuccess: isSuccessComments } = useFetchComments({
    params: { videoId, maxResults: '50' },
    queryKey: ['COMMENTS BY VIDEO ID', videoId],
  })

  if (!isSuccessChannels) return null

  const [channel] = channels.items
  const channelTitle = channel.snippet.title
  const channelImage = channel.snippet.thumbnails?.default?.url
  const channelRoute = helpers.typedRoute(`/channel/${channelId}/videos`)
  const channelSubs = helpers.formatValue(channel.statistics.subscriberCount)

  const videoTitle = snippet.title
  const videoDate = helpers.formatDate(publishedAt)
  const videoViews = helpers.formatValue(viewCount)
  const videoComments = helpers.formatValue(commentCount)

  const youtubeLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  return (
    <>
      <$.VideoFrame
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        src={youtubeLink}
        allowFullScreen
      />
      <$.VideoTitle>{videoTitle}</$.VideoTitle>
      <$.VideoDetails>
        <$.ChannelInfoContainer>
          <Link href={channelRoute} passHref>
            <$.ChannelImageContainer>
              {channelImage ? <Image alt={channelTitle} className='rounded-full' src={channelImage} fill /> : null}
            </$.ChannelImageContainer>
          </Link>
          <$.ChannelInfoContent>
            <Link href={channelRoute} passHref>
              <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
            </Link>
            <$.ChannelSubs>{channelSubs} suscriptores</$.ChannelSubs>
          </$.ChannelInfoContent>
          <$.SubscriptionButton>Suscríbete</$.SubscriptionButton>
        </$.ChannelInfoContainer>
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
      <Collapse as='details' className='bg-base-200 dark:rounded-md' icon='arrow'>
        <Collapse.Title as='summary' className='select-none'>
          {videoViews} vistas • {videoDate}
        </Collapse.Title>
        <Collapse.Content className='text-balance'>
          {description.length ? (
            description
          ) : (
            <span className='italic'>El usuario no proporcionó ninguna descripción para este vídeo.</span>
          )}
        </Collapse.Content>
      </Collapse>
      <List className='bg-base-200 shadow-none'>
        <$.ListTitle>{videoComments} comentarios</$.ListTitle>
        {isSuccessComments
          ? comments.items.map((comment) => {
              return <CommentItem key={comment.id} comment={comment} />
            })
          : null}
      </List>
    </>
  )
}
