import type { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/utils'

export interface UseFetchProps<TData, TError> {
  queryKey: QueryKey
  url: 'videos' | 'channels'
  params: Record<string, string>
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
