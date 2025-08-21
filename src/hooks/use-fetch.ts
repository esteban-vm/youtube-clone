import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export const useFetch = <T>(url: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const [state, setState] = useState<FetchState<T>>({ data: null, loading: true, error: null })

  useEffect(() => {
    if (pathname !== '/') {
      router.push('/')
    }
  }, [pathname, router])

  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null })

      if (process.env.NODE_ENV === 'development') {
        await new Promise((resolve) => setTimeout(resolve, 5_000))
      }

      try {
        const { data } = await axios.get<T>(url, { baseURL: process.env.NEXT_PUBLIC_BASE_URL })
        setState({ data, loading: false, error: null })
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setState({ data: null, loading: false, error: error.message })
        }
      }
    }

    fetchData()
  }, [url])

  return state
}
