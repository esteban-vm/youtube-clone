import Link from 'next/link'
import { LuListMusic, LuShare2, LuThumbsDown, LuThumbsUp } from 'react-icons/lu'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-player.styled'

export function VideoPlayer({ video }: Props.WithVideo) {
  const { id, snippet, statistics } = video
  const { channelId } = snippet

  const { data: channels } = useFetchChannels({
    queryKey: [channelId],
    params: { id: channelId },
  })

  const videoTitle = snippet.title
  const youtubeLink = `https://www.youtube.com/embed/${id}?autoplay=1`
  const channelTitle = channels?.items[0].snippet.title ?? ''
  const channelLink = helpers.typedRoute(`/channel/${channelId}`)
  const channelThumbnail = channels?.items[0].snippet.thumbnails?.default?.url
  const subscriberCount = channels?.items[0].statistics.subscriberCount ?? '0'
  const subscribers = helpers.formatValue(subscriberCount, 'suscriptores')

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
        <$.ChannelContainer>
          <Link href={channelLink} passHref>
            <$.StyledAvatar>
              {channelThumbnail && <$.AvatarImage alt={channelTitle} src={channelThumbnail} fill />}
            </$.StyledAvatar>
          </Link>
          <$.ChannelInfo>
            <Link href={channelLink} passHref>
              <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
            </Link>
            <$.ChannelSubscribers>{subscribers}</$.ChannelSubscribers>
          </$.ChannelInfo>
          <$.StyledButton>Suscríbete</$.StyledButton>
        </$.ChannelContainer>
        <$.ActionContainer>
          <span>
            <LuThumbsUp /> {helpers.formatValue(statistics.likeCount)}
          </span>
          <span>
            <LuThumbsDown /> {helpers.formatValue(statistics.dislikeCount)}
          </span>
          <span>
            <LuShare2 /> Share
          </span>
          <span>
            <LuListMusic /> Save
          </span>
        </$.ActionContainer>
      </$.VideoDetails>
    </>
  )
}
