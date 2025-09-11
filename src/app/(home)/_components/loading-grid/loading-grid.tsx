import { LoadingItem } from './loading-item'

export function LoadingGrid() {
  return Array(5)
    .fill(null)
    .map(() => <LoadingItem key={crypto.randomUUID()} />)
}
