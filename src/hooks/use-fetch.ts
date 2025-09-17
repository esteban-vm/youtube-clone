import type { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/utils'

export interface UseFetchBaseProps {
  queryKey: QueryKey
  params: Record<string, string>
}

export interface UseFetchProps<TData, TError> extends UseFetchBaseProps {
  url: 'videos' | 'channels' | 'commentThreads'
  requestConfig?: Omit<AxiosRequestConfig, 'baseURL' | 'url' | 'params'>
  queryOptions?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
}

export const useFetch = <TData, TError = AxiosError>({
  url,
  params,
  queryKey,
  requestConfig,
  queryOptions,
}: UseFetchProps<TData, TError>) => {
  const queryFn = async (): Promise<TData> => {
    const instance = api.getInstance()

    const { data } = await instance.request<TData, AxiosResponse<TData, TError>>({
      url,
      params,
      ...requestConfig,
    })

    return data
  }

  return useQuery<TData, TError>({
    queryFn,
    queryKey,
    ...queryOptions,
  })
}

export const useFetchChannels = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.ChannelList>({
    queryKey,
    url: 'channels',
    params: {
      ...params,
      part: ['snippet', 'statistics', 'contentDetails'].toString(),
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

export const useFetchVideos = ({ params, queryKey }: UseFetchBaseProps) => {
  return useFetch<APIResponse.VideoList>({
    queryKey,
    url: 'videos',
    params: {
      ...params,
      part: ['snippet', 'statistics', 'contentDetails'].toString(),
    },
  })
}
