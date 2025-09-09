declare global {
  namespace APIResponse {
    interface ChannelItem {
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

    interface ChannelList {
      kind: string
      etag: string
      items: ChannelItem[]
      pageInfo: {
        totalResults: number
        resultsPerPage: number
      }
    }

    interface VideoItem {
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

    interface VideoList {
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

  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_KEY: string
      NEXT_PUBLIC_BASE_URL: string
    }
  }

  namespace Props {
    interface WithVideoItem {
      item: APIResponse.VideoItem
    }
  }
}

export {}
