import { VideoItem } from './video-item'

export function VideoList({ items }: Props.WithVideoItems) {
  return items.map((item) => <VideoItem key={item.id} item={item} />)
}
