import Link from 'next/link'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'
import * as $ from './video-player.styled'

export function VideoPlayer({ video }: Props.WithVideo) {
  const { id, snippet } = video
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
  // const subscribers= helpers.formatValue(statistics.likeCount)

  return (
    <>
      <$.VideoFrame
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        src={youtubeLink}
        allowFullScreen
      />
      <$.VideoTitle>{videoTitle}</$.VideoTitle>
      <$.InfoContainer>
        <$.InfoContent>
          <Link href={channelLink}>
            <$.StyledAvatar>
              {channelThumbnail && <$.AvatarImage alt={channelTitle} src={channelThumbnail} fill />}
            </$.StyledAvatar>
          </Link>
          <span className='mr-2 text-sm text-gray-500'></span>
        </$.InfoContent>
      </$.InfoContainer>
    </>
  )
}
