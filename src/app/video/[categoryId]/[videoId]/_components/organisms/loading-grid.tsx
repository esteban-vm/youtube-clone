import { Molecules } from '@/video/components'

export interface LoadingGridProps {
  items: number
}

export function LoadingGrid({ items }: LoadingGridProps) {
  return (
    <>
      {Array(items)
        .fill(null)
        .map(() => {
          return <Molecules.LoadingItem key={crypto.randomUUID()} />
        })}
    </>
  )
}
