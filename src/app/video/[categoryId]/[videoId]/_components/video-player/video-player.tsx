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
    queryKey: ['Channels', channelId],
    params: { id: channelId },
  })

  const { data: comments, isSuccess: isSuccessComments } = useFetchComments({
    queryKey: ['Comments', videoId],
    params: {
      videoId,
      maxResults: '50',
    },
  })

  if (!isSuccessChannels) return null
  const [channel] = channels.items

  const videoTitle = snippet.title
  const youtubeLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  const channelTitle = channel.snippet.title
  const channelSubs = channel.statistics.subscriberCount
  const channelThumbnail = channel.snippet.thumbnails?.default?.url
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)

  const formattedDate = helpers.formatDate(publishedAt)
  const formattedViews = helpers.formatValue(viewCount)
  const formattedSubs = helpers.formatValue(channelSubs)
  const formattedComments = helpers.formatValue(commentCount)

  return (
    <>
      <iframe
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
        className='aspect-video w-full'
        referrerPolicy='strict-origin-when-cross-origin'
        src={youtubeLink}
        allowFullScreen
      />
      <$.VideoTitle>{videoTitle}</$.VideoTitle>
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
            <$.ChannelSubscribers>{formattedSubs} suscriptores</$.ChannelSubscribers>
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
      <Collapse as='details' className='bg-base-200 dark:rounded-md' icon='arrow'>
        <Collapse.Title as='summary' className='select-none'>
          {formattedViews} vistas • {formattedDate}
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
        <$.ListTitle>{formattedComments} comentarios</$.ListTitle>
        {isSuccessComments && comments.items.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
      </List>
    </>
  )
}
