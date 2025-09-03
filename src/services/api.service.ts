import { api } from '@/utils'

// import type { AxiosRequestConfig } from 'axios'
// import type { ApiResponse, VideoSearchResponse } from '@/types'

// export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
//   const axiosInstance = getInstance()
//   try {
//     const { data } = await axiosInstance.get<T>(url, config)
//     return { data }
//   } catch (error) {
//     const { response } = error as AxiosErrorType
//     const status = response?.status
//     const details = response?.data
//     return {
//       error: {
//         status,
//         details,
//         name: '',
//         message: `Failed to fetch data from ${url}`,
//       },
//     }
//   }
// }

// export const getVideo = async (endpoint: string): Promise<ApiResponse<VideoSearchResponse>> => {
//   // const config: AxiosRequestConfig = {
//   //   params: {
//   //     key: process.env.NEXT_PUBLIC_API_KEY,
//   //   },
//   // }

//   return await getRequest(endpoint)
// }

export const makeRequest = async <T>(url: 'videos' | 'channels', params: Record<string, string>): Promise<T> => {
  const instance = api.getInstance()
  const { data } = await instance.get<T>(url, { params })
  return data
}
