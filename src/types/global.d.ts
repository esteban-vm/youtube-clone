import type { Route } from 'next'
import type { ReactNode } from 'react'

declare global {
  namespace APIResponse {
    interface Channel {
      kind: 'youtube#channel'
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
        defaultLanguage: string
        localized: {
          title: string
          description: string
        }
        country: string
      }
      contentDetails: {
        relatedPlaylists: {
          likes: string
          favorites: string
          uploads: string
        }
      }
      statistics: {
        viewCount: number
        subscriberCount: number
        hiddenSubscriberCount: boolean
        videoCount: number
      }
      brandingSettings: {
        channel: {
          title: string
          description: string
          keywords: string
          trackingAnalyticsAccountId: string
          unsubscribedTrailer: string
          defaultLanguage: string
          country: string
        }
        watch: {
          textColor: string
          backgroundColor: string
          featuredPlaylistId: string
        }
        image?: {
          bannerExternalUrl: string
        }
      }
    }

    interface ChannelList {
      kind: 'youtube#channelListResponse'
      etag: string
      nextPageToken: string
      prevPageToken: string
      items: Channel[]
      pageInfo: {
        totalResults: number
        resultsPerPage: number
      }
    }

    interface Comment {
      kind: 'youtube#comment'
      etag: string
      id: string
      snippet: {
        authorDisplayName: string
        authorProfileImageUrl: string
        authorChannelUrl?: string
        authorChannelId?: {
          value?: string
        }
        channelId: string
        textDisplay: string
        textOriginal: string
        parentId: string
        canRate: boolean
        viewerRating: string
        likeCount: number
        moderationStatus: string
        publishedAt: string
        updatedAt: string
      }
    }

    interface CommentThread {
      kind: 'youtube#commentThread'
      etag: string
      id: string
      snippet: {
        channelId: string
        videoId: string
        topLevelComment: Comment
        canReply: boolean
        totalReplyCount: number
        isPublic: boolean
      }
      replies: {
        comments: Comment[]
      }
    }

    interface CommentThreadList {
      kind: 'youtube#commentThreadListResponse'
      etag: string
      nextPageToken: string
      items: CommentThread[]
      pageInfo: {
        totalResults: number
        resultsPerPage: number
      }
    }

    interface PlaylistItem {
      kind: 'youtube#playlistItem'
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
        videoOwnerChannelTitle: string
        videoOwnerChannelId: string
        playlistId: string
        position: number
        resourceId: {
          kind: string
          videoId: string
        }
      }
      contentDetails: {
        videoId: string
        startAt: string
        endAt: string
        note: string
        videoPublishedAt: datetime
      }
      status: {
        privacyStatus: string
      }
    }

    interface PlaylistItemList {
      kind: 'youtube#playlistItemListResponse'
      etag: string
      nextPageToken: string
      prevPageToken: string
      items: PlaylistItem[]
      pageInfo: {
        totalResults: number
        resultsPerPage: number
      }
    }

    interface Video {
      kind: 'youtube#video'
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
        tags: string[]
        categoryId: string
        liveBroadcastContent: string
        defaultLanguage: string
        localized: {
          title: string
          description: string
        }
        defaultAudioLanguage: string
      }
      contentDetails: {
        duration: string
        dimension: string
        definition: string
        caption: string
        licensedContent: boolean
        regionRestriction: object
        contentRating: object
        projection: string
        hasCustomThumbnail: boolean
      }
      statistics: {
        viewCount: string
        likeCount: string
        dislikeCount: string
        favoriteCount: string
        commentCount: string
      }
    }

    interface VideoList {
      kind: 'youtube#videoListResponse'
      etag: string
      nextPageToken: string
      prevPageToken: string
      items: Video[]
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

  namespace Props {
    interface WithChannel {
      channel: APIResponse.Channel
    }

    interface WithComment {
      comment: APIResponse.CommentThread
    }

    interface WithVideo {
      video: APIResponse.Video
    }

    interface WithVideos {
      videos: APIResponse.Video[]
    }

    interface WithPlaylistItem {
      playlistItem: APIResponse.PlaylistItem
    }

    interface WithPlaylistItems {
      playlistItems: APIResponse.PlaylistItem[]
    }

    interface WithChildren {
      children: ReactNode
    }

    interface BaseItem {
      id: string
      label: Capitalize<string>
    }

    interface NavbarItem extends BaseItem {
      icon: IconType
      link?: Route
    }

    interface SidebarItem extends NavbarItem {
      categoryId: `${number}`
    }

    interface TabItem extends BaseItem, Partial<WithChildren> {
      link: Route<`/channel/${string}`>
      isDisabled?: boolean
    }
  }
}

export {}
