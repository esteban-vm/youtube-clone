'use client'

import { useQuery } from '@tanstack/react-query'
import { use } from 'react'
import { RecommendedVideo } from '@/movie/components'

type Props = PageProps<'/movie/[categoryId]/[videoId]'>

export default function RecommendationsPage({ params }: Props) {
  const { categoryId } = use(params)

  const { data: videos, isSuccess } = useQuery<APIResponse.VideoList>({
    queryKey: ['recommendations', categoryId],
  })

  if (!isSuccess) return null

  // const { data: videos, isSuccess } = useFetchVideos({
  //   queryKey: [categoryId],
  //   params: {
  //     maxResults: '12',
  //     regionCode: 'MX',
  //     chart: 'mostPopular',
  //     videoCategoryId: categoryId,
  //   },
  // })

  return (
    <>
      {videos.items.map((item) => (
        <RecommendedVideo key={item.id} item={item} />
      ))}
    </>
  )
}
