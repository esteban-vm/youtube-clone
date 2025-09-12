import { VideoItem } from './video-item'

export function VideoList({ videos }: Props.WithVideos) {
  return videos.map((video) => <VideoItem key={video.id} video={video} />)
}
