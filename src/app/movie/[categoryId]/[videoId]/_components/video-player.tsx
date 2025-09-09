import type { Props } from '@/types'

export function VideoPlayer({ item }: Props.WithVideoItem) {
  return (
    <>
      <iframe
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
        className='aspect-video w-full'
        referrerPolicy='strict-origin-when-cross-origin'
        src={`https://www.youtube.com/embed/${item.id}?autoplay=1`}
        allowFullScreen
      />
      <h3 className='text-xl font-semibold'>{item.snippet.title}</h3>
    </>
  )
}
