import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { useFetchChannels } from '@/hooks'
import { helpers } from '@/utils'

export function VideoPlayer({ item }: Props.WithVideoItem) {
  const { id, snippet } = item
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

  return (
    <>
      <$.Video
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        src={youtubeLink}
        allowFullScreen
      />
      <$.VideoTitle>{videoTitle}</$.VideoTitle>
      <$.InfoContainer>
        <$.InfoContent>
          <Link href={channelLink}>
            <$.Avatar>{channelThumbnail && <$.AvatarImage alt={channelTitle} src={channelThumbnail} fill />}</$.Avatar>
          </Link>
        </$.InfoContent>
      </$.InfoContainer>
    </>
  )
}

function $() {}

$.Video = tw.iframe`
  aspect-video
  w-full
`

$.VideoTitle = tw.h3`
  text-xl
  font-semibold
`

$.InfoContainer = tw.div`
  flex
  flex-col
  justify-between
  space-x-4
  md:flex-row
`

$.InfoContent = tw.div`
  flex
  items-center
  justify-between
  gap-3
`

$.Avatar = tw(Avatar)`
  relative
  size-14
  hover:opacity-90
`

$.AvatarImage = tw(Image)`
  rounded-full
`
