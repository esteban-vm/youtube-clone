import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import tw from 'tailwind-styled-components'
import { api } from '@/utils'

type Props = LayoutProps<'/movie/[categoryId]/[videoId]'>

async function fetchRecommendations(categoryId: string) {
  const instance = api.getInstance()

  const { data } = await instance.get<APIResponse.VideoList>('videos', {
    params: {
      maxResults: '12',
      regionCode: 'MX',
      chart: 'mostPopular',
      videoCategoryId: categoryId,
      part: ['snippet', 'statistics', 'contentDetails'].toString(),
    },
  })

  return data
}

async function fetchDetails(videoId: string) {
  const instance = api.getInstance()

  const { data } = await instance.get<APIResponse.VideoList>('videos', {
    params: {
      id: videoId,
      part: ['snippet', 'statistics', 'contentDetails'].toString(),
    },
  })

  return data
}

export default async function MovieLayout({ children, details, recommendations, params }: Props) {
  const { categoryId, videoId } = await params

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['recommendations', categoryId],
    queryFn: () => fetchRecommendations(categoryId),
  })

  await queryClient.prefetchQuery({
    queryKey: ['details', videoId],
    queryFn: () => fetchDetails(videoId),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <$.Container>
        {children}
        <$.Details>{details}</$.Details>
        <$.Recommendations>{recommendations}</$.Recommendations>
      </$.Container>
    </HydrationBoundary>
  )
}

function $() {}

$.Container = tw.section`
  grid
  size-full
  gap-3
  p-3
  lg:grid-cols-3
`

$.Details = tw.main`
  flex
  w-full
  min-w-72
  flex-col
  space-y-4
  md:col-span-2
`

$.Recommendations = tw.aside`
  flex
  w-full
  flex-col
  gap-1
  lg:basis-1/3
`
