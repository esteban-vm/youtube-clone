import { LoadingItem } from '@/video/components'

export default function RecommendationsLoading() {
  return Array(2)
    .fill(null)
    .map(() => <LoadingItem key={crypto.randomUUID()} />)
}
