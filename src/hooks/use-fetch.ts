import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export type DataState<T> = T | null
export type ErrorState = string | null

export interface FetchState<T> {
  isLoading: boolean
  data: DataState<T>
  error: ErrorState
}

export const useFetch = <T>(url: string): FetchState<T> => {
  const router = useRouter()
  const pathname = usePathname()

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<DataState<T>>(null)
  const [error, setError] = useState<ErrorState>(null)

  useEffect(() => {
    if (pathname !== '/') {
      router.push('/')
    }
  }, [pathname, router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setData(null)
        setError(null)

        if (process.env.NODE_ENV === 'development') {
          await new Promise((resolve) => setTimeout(resolve, 5_000))
        }

        const { data, status } = await axios.get<T>(url, {
          baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        })

        if (status === 200) {
          setData(data)
          setError(null)
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setData(null)
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}
