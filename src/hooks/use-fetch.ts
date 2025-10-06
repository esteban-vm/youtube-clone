import type { QueryKey } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/utils'

export interface UseFetchBaseProps {
  queryKey: QueryKey
  params: Record<string, string>
}

export interface UseFetchProps extends UseFetchBaseProps {
  url: 'videos' | 'channels' | 'commentThreads' | 'playlistItems' | 'search'
}

export const useFetch = <TData, TError = AxiosError>({ queryKey, ...restProps }: UseFetchProps) => {
  const fetchData = async (): Promise<TData> => {
    const instance = api.getInstance()
    const { data } = await instance.request<TData, AxiosResponse<TData, TError>>(restProps)
    return data
  }

  return useQuery<TData, TError>({
    queryKey,
    queryFn: fetchData,
  })
}

export const useFetchChannels = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.ChannelList>({
    queryKey,
    url: 'channels',
    params: {
      ...params,
      part: ['snippet', 'contentDetails', 'statistics', 'brandingSettings'].toString(),
    },
  })
}

export const useFetchComments = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.CommentThreadList>({
    queryKey,
    url: 'commentThreads',
    params: {
      ...params,
      part: ['snippet', 'replies'].toString(),
    },
  })
}

export const useFetchPlaylists = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.PlaylistItemList>({
    queryKey,
    url: 'playlistItems',
    params: {
      ...params,
      part: ['snippet', 'contentDetails', 'status'].toString(),
    },
  })
}

export const useFetchSearchResults = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.SearchList>({
    queryKey,
    url: 'search',
    params: {
      ...params,
      part: 'snippet',
    },
  })
}

export const useFetchVideos = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.VideoList>({
    queryKey,
    url: 'videos',
    params: {
      ...params,
      part: ['snippet', 'contentDetails', 'statistics'].toString(),
    },
  })
}
