import type { Route } from 'next'
import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date: string) => {
  return formatDistance(date, new Date(), { addSuffix: true, locale: es })
}

export const formatDuration = (duration: string) => {
  const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)/)

  if (!matches) return '00:00'

  const hours = parseInt(matches[1] || '0', 10)
  const minutes = parseInt(matches[2] || '0', 10)
  const seconds = parseInt(matches[3] || '0', 10)

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const formatValue = (value: string | number, type: 'vistas' | 'suscriptores' = 'vistas') => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value

  if (numValue < 1_000) return numValue.toString()

  const units = [
    { value: 1e9, suffix: ' mil M' },
    { value: 1e6, suffix: 'M' },
    { value: 1e3, suffix: ' mil' },
  ]

  for (const unit of units) {
    if (numValue >= unit.value) {
      return (numValue / unit.value).toFixed(1).replace(/\.0$/, '') + unit.suffix + ' ' + type
    }
  }
}

export const typedRoute = <T extends string>(route: Route<T>) => route
