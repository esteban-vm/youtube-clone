import type { ReactNode } from 'react'
import type { Props } from '@/types'

export type MovieLayoutProps = Props.WithChildren<{
  details: ReactNode
  recommendations: ReactNode
}>

export default function MovieLayout({ children, details, recommendations }: MovieLayoutProps) {
  return (
    <section className='grid size-full gap-3 p-3 lg:grid-cols-3'>
      {children}
      {details}
      {recommendations}
    </section>
  )
}
