export interface VideoPlayerProps {
  videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  return <p>Video: {videoId}</p>
}
