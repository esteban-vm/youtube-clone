import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const getInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    params: {
      key: process.env.NEXT_PUBLIC_API_KEY,
    },
  })
}
