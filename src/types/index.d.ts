import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'

// export interface ApiResponse<T> {
//   items?: T[]
//   data?: T
//   error?: {
//     message: string
//     name?: string
//     status?: number
//     details?: Record<string, unknown>
//   }
// }

// export interface AxiosErrorType {
//   message: string
//   name: string
//   status?: number
//   code?: string
//   stack?: string
//   config: AxiosRequestConfig
//   request?: XMLHttpRequest
//   response?: AxiosResponse
// }

// export interface CommentSnippet {
//   authorChannelId: {
//     value: string
//   }
//   authorChannelUrl: string
//   authorDisplayName: string
//   authorProfileImageUrl: string
//   canRate: boolean
//   channelId: string
//   likeCount: number
//   videoId: string
//   viewerRating: string
//   textDisplay: string
//   textOriginal: string
//   publishedAt: string
//   updatedAt: string
// }

// export interface TopLevelComment {
//   etag: string
//   id: string
//   kind: string
//   snippet: CommentSnippet
// }
// export interface VideoCardProps {
//   item: VideoItem
// }
// export interface VideoDetails {
//   duration: string
//   viewCount: string
// }
// export interface VideoItem {
//   id: {
//     videoId: string
//   }
//   items: [
//     {
//       etag: string
//       id: string
//       kind: string
//       publishedAt: string
//       contentDetails: {
//         relatedPlaylists: Record<string, string>
//       }
//       snippet: {
//         title: string
//         customUrl: string
//         description: string
//         thumbnails: VideoThumbnails
//         localized: {
//           title: string
//           description: string
//         }
//       }
//     },
//   ]
//   snippet: {
//     title: string
//     customUrl: string
//     description: string
//     channelTitle: string
//     channelId: string
//     publishedAt: string
//     thumbnails: VideoThumbnails
//     topLevelComment: TopLevelComment
//     categoryId: string
//   }
//   statistics: {
//     viewCount: string
//     likeCount: string
//     dislikeCount: string
//     favoriteCount: string
//     commentCount: string
//     subscriberCount: string
//   }
//   contentDetails: {
//     videoId: string
//     duration: string
//     dimension: string
//     definition: string
//     caption: string
//     licensedContent: boolean
//     relatedPlaylists?: {
//       like?: string
//       uploads: string
//     }
//     regionRestriction?: {
//       allowed?: string[]
//       blocked?: string[]
//     }
//   }
//   brandingSettings?: {
//     channel?: {
//       title?: string
//       description?: string
//       keywords?: string
//       unsubscribedTrailer?: string
//     }
//     image?: {
//       bannerExternalUrl?: string
//     }
//   }
// }
// export interface VideoSearchResponse {
//   items: VideoItem[]
// }
// export type VideoThumbnails = Record<
//   'default' | 'medium' | 'high',
//   {
//     url: string
//     width: number
//     height: number
//   }
// >
// export interface YouTubeDataAPIChannelItem {
//   kind: string
//   etag: string
//   id: string
//   snippet: {
//     title: string
//     description: string
//     customUrl: string
//     publishedAt: string
//     thumbnails: {
//       default: {
//         url: string
//         width: number
//         height: number
//       }
//       medium: {
//         url: string
//         width: number
//         height: number
//       }
//       high: {
//         url: string
//         width: number
//         height: number
//       }
//     }
//     localized: {
//       title: string
//       description: string
//     }
//     country: string
//   }
//   contentDetails: {
//     relatedPlaylists: {
//       likes: string
//       uploads: string
//     }
//   }
// }
// export interface YouTubeDataAPIChannelsResponse {
//   kind: string
//   etag: string
//   items: YouTubeDataAPIChannelItem[]
//   pageInfo: {
//     totalResults: number
//     resultsPerPage: number
//   }
// }
// export interface YouTubeDataAPIVideoItem {
//   kind: string
//   etag: string
//   id: string
//   snippet: {
//     publishedAt: string
//     channelId: string
//     title: string
//     description: string
//     thumbnails: {
//       default: {
//         url: string
//         width: number
//         height: number
//       }
//       medium: {
//         url: string
//         width: number
//         height: number
//       }
//       high: {
//         url: string
//         width: number
//         height: number
//       }
//       standard: {
//         url: string
//         width: number
//         height: number
//       }
//       maxres: {
//         url: string
//         width: number
//         height: number
//       }
//     }
//     channelTitle: string
//     tags?: string[]
//     categoryId: string
//     liveBroadcastContent: string
//     localized: {
//       title: string
//       description: string
//     }
//     defaultAudioLanguage: string
//     defaultLanguage?: string
//   }
//   contentDetails: {
//     duration: string
//     dimension: string
//     definition: string
//     caption: string
//     licensedContent: boolean
//     contentRating: object
//     projection: string
//   }
//   statistics: {
//     viewCount: string
//     likeCount: string
//     favoriteCount: string
//     commentCount: string
//   }
// }
// export interface YouTubeDataAPIVideosResponse {
//   kind: string
//   etag: string
//   items: YouTubeDataAPIVideoItem[]
//   nextPageToken: string
//   pageInfo: {
//     totalResults: number
//     resultsPerPage: number
//   }
// }

export namespace APIResponse {
  declare interface ChannelItem {
    kind: string
    etag: string
    id: string
    snippet: {
      title: string
      description: string
      customUrl: string
      publishedAt: string
      thumbnails?: {
        default?: {
          url: string
          width: number
          height: number
        }
        medium?: {
          url: string
          width: number
          height: number
        }
        high?: {
          url: string
          width: number
          height: number
        }
      }
      localized: {
        title: string
        description: string
      }
      country: string
    }
    contentDetails: {
      relatedPlaylists: {
        likes: string
        uploads: string
      }
    }
  }

  declare interface ChannelList {
    kind: string
    etag: string
    items: ChannelItem[]
    pageInfo: {
      totalResults: number
      resultsPerPage: number
    }
  }

  declare interface VideoItem {
    kind: string
    etag: string
    id: string
    snippet: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails?: {
        default?: {
          url: string
          width: number
          height: number
        }
        medium?: {
          url: string
          width: number
          height: number
        }
        high?: {
          url: string
          width: number
          height: number
        }
        standard?: {
          url: string
          width: number
          height: number
        }
        maxres?: {
          url: string
          width: number
          height: number
        }
      }
      channelTitle: string
      tags?: string[]
      categoryId: string
      liveBroadcastContent: string
      localized: {
        title: string
        description: string
      }
      defaultAudioLanguage: string
      defaultLanguage?: string
    }
    contentDetails: {
      duration: string
      dimension: string
      definition: string
      caption: string
      licensedContent: boolean
      contentRating: object
      projection: string
    }
    statistics: {
      viewCount: string
      likeCount: string
      favoriteCount: string
      commentCount: string
    }
  }

  declare interface VideoList {
    kind: string
    etag: string
    items: VideoItem[]
    nextPageToken: string
    pageInfo: {
      totalResults: number
      resultsPerPage: number
    }
  }
}

export namespace Props {
  declare interface WithChildren {
    children: ReactNode
  }

  declare interface WithVideoItem {
    item: APIResponse.VideoItem
  }

  declare interface BaseMenuItem {
    id: string
    label: string
    icon: IconType
    link?: string
  }
}
