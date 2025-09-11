import { LoadingItem } from './loading-item'

export function LoadingGrid() {
  return Array(2)
    .fill(null)
    .map(() => <LoadingItem key={crypto.randomUUID()} />)
}
