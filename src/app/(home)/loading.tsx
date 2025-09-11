import { LoadingItem } from '@/home/components'

export default function HomeLoading() {
  return Array(5)
    .fill(null)
    .map(() => <LoadingItem key={crypto.randomUUID()} />)
}
