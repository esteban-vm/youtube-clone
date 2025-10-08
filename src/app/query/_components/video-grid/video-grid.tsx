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
  grid
  size-full
  grid-cols-[repeat(auto-fit,minmax(theme(spacing.80),1fr))]
  gap-2.5
  p-2.5
`
