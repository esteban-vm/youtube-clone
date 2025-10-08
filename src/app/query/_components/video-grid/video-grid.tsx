import tw from 'tailwind-styled-components'
import { VideoItem } from './video-item'

export function VideoGrid({ searchResults }: Props.WithSearchResults) {
  return (
    <Container>
      {searchResults.map((result) => (
        <VideoItem key={result.id.videoId} searchResult={result} />
      ))}
    </Container>
  )
}

const Container = tw.div`
  flex
  size-full
  flex-col
  items-center
  gap-2.5
  p-2.5
`
