import { VideoItem } from './video-item'

export function VideoGrid({ videos }: Props.WithVideos) {
  return videos.map((video) => <VideoItem key={video.id} video={video} />)
}
