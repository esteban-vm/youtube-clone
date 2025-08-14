import type { AxiosRequestConfig } from 'axios'
import type { ApiResponse, AxiosErrorType, VideoSearchResponse } from '@/types'
import { getInstance } from '@/utils/axios.utils'

export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  const axiosInstance = getInstance()

  try {
    const { data } = await axiosInstance.get<T>(url, config)
    return { data }
  } catch (error) {
    const { response } = error as AxiosErrorType
    const status = response?.status
    const details = response?.data

    return {
      error: {
        status,
        details,
        name: '',
        message: `Failed to fetch data from ${url}`,
      },
    }
  }
}

export const getVideo = async (endpoint: string): Promise<ApiResponse<VideoSearchResponse>> => {
  const config: AxiosRequestConfig = {
    params: {
      key: process.env.NEXT_PUBLIC_API_KEY,
    },
  }

  return await getRequest(endpoint, config)
}
