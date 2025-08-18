export const parseValue = (value: string | number) => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value

  if (numValue > 1_000_000) {
    return (numValue / 1_000_000).toFixed(2) + 'M'
  } else if (numValue >= 1_000 && numValue < 2_000) {
    return (numValue / 1_000).toFixed(1) + 'k'
  } else {
    return numValue.toFixed(2)
  }
}

export const parseVideoDuration = (duration: string) => {
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
