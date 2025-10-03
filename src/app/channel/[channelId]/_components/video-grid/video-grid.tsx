import tw from 'tailwind-styled-components'
import { VideoItem } from './video-item'

export function VideoGrid({ playlistItems }: Props.WithPlaylistItems) {
  return (
    <Container>
      {playlistItems.map((item) => (
        <VideoItem key={item.id} playlistItem={item} />
      ))}
    </Container>
  )
}

const Container = tw.div`
  mb-3.5
  grid
  gap-3.5
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
`
