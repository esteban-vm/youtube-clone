import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ApiResponse<T> {
  items?: T[]
  data?: T
  error?: {
    message: string
    name?: string
    status?: number
    details?: Record<string, unknown>
  }
}

export interface AxiosErrorType {
  message: string
  name: string
  status?: number
  code?: string
  stack?: string
  config: AxiosRequestConfig
  request?: XMLHttpRequest
  response?: AxiosResponse
}

export interface CommentSnippet {
  authorChannelId: {
    value: string
  }
  authorChannelUrl: string
  authorDisplayName: string
  authorProfileImageUrl: string
  canRate: boolean
  channelId: string
  likeCount: number
  videoId: string
  viewerRating: string
  textDisplay: string
  textOriginal: string
  publishedAt: string
  updatedAt: string
}

export interface SidebarStore {
  sidebar: boolean
  setSidebar: (sidebar: boolean) => void
  category: number
  setCategory: (category: number) => void
}

export interface TopLevelComment {
  etag: string
  id: string
  kind: string
  snippet: CommentSnippet
}

export interface VideoCardProps {
  item: VideoItem
}

export interface VideoDetails {
  duration: string
  viewCount: string
}

export interface VideoItem {
  id: {
    videoId: string
  }
  items: [
    {
      etag: string
      id: string
      kind: string
      publishedAt: string
      contentDetails: {
        relatedPlaylists: Record<string, string>
      }
      snippet: {
        title: string
        customUrl: string
        description: string
        thumbnails: VideoThumbnails
        localized: {
          title: string
          description: string
        }
      }
    },
  ]
  snippet: {
    title: string
    customUrl: string
    description: string
    channelTitle: string
    channelId: string
    publishedAt: string
    thumbnails: VideoThumbnails
    topLevelComment: TopLevelComment
    categoryId: string
  }
  statistics: {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
    subscriberCount: string
  }
  contentDetails: {
    videoId: string
    duration: string
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
    relatedPlaylists?: {
      like?: string
      uploads: string
    }
    regionRestriction?: {
      allowed?: string[]
      blocked?: string[]
    }
  }
  brandingSettings?: {
    channel?: {
      title?: string
      description?: string
      keywords?: string
      unsubscribedTrailer?: string
    }
    image?: {
      bannerExternalUrl?: string
    }
  }
}

export interface VideoSearchResponse {
  items: VideoItem[]
}

export type VideoThumbnails = Record<
  'default' | 'medium' | 'high',
  {
    url: string
    width: number
    height: number
  }
>
