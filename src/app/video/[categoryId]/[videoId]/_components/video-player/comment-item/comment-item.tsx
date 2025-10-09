import Image from 'next/image'
import Link from 'next/link'
import { LuThumbsDown, LuThumbsUp } from 'react-icons/lu'
import { List } from 'rsc-daisyui'
import { helpers } from '@/utils'
import * as $ from './comment-item.styled'

export function CommentItem({ comment }: Props.WithComment) {
  const { snippet } = comment.snippet.topLevelComment
  const { authorDisplayName, authorChannelId, authorProfileImageUrl, updatedAt, textDisplay, likeCount } = snippet

  const commentDate = helpers.formatDate(updatedAt)
  const commentLikes = likeCount ? helpers.formatValue(likeCount) : ''
  const channelRoute = helpers.typedRoute(`/channel/${authorChannelId?.value}/videos`)

  return (
    <List.Row className='shadow-none'>
      <Link href={channelRoute}>
        <$.ImageContainer>
          <Image alt={authorDisplayName} src={authorProfileImageUrl} fill />
        </$.ImageContainer>
      </Link>
      <$.InfoContainer>
        <$.AuthorName title={authorDisplayName}>
          <Link href={channelRoute}>{authorDisplayName}</Link>
        </$.AuthorName>
        <span className='opacity-60'>{commentDate}</span>
        <p>{textDisplay}</p>
        <LuThumbsUp />
        <span className='align-middle'>{commentLikes}</span>&nbsp;
        <LuThumbsDown />
      </$.InfoContainer>
    </List.Row>
  )
}
