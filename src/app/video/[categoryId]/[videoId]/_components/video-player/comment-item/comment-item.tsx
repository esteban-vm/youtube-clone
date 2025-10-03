import Image from 'next/image'
import Link from 'next/link'
import { LuThumbsDown, LuThumbsUp } from 'react-icons/lu'
import { List } from 'rsc-daisyui'
import { helpers } from '@/utils'
import * as $ from './comment-item.styled'

export function CommentItem({ comment }: Props.WithComment) {
  const { snippet } = comment.snippet.topLevelComment
  const { authorDisplayName, authorProfileImageUrl, channelId, updatedAt, textDisplay, likeCount } = snippet

  const channelLink = helpers.typedRoute(`/channel/${channelId}/videos`)
  const formattedDate = helpers.formatDate(updatedAt)
  const formattedLikes = likeCount ? helpers.formatValue(likeCount) : ''

  return (
    <List.Row className='shadow-none'>
      <Link href={channelLink}>
        <$.ImageContainer>
          <Image alt={authorDisplayName} src={authorProfileImageUrl} fill />
        </$.ImageContainer>
      </Link>
      <$.InfoContainer>
        <$.AuthorName title={authorDisplayName}>
          <Link href={channelLink}>{authorDisplayName}</Link>
        </$.AuthorName>
        <span className='opacity-60'>{formattedDate}</span>
        <p>{textDisplay}</p>
        <LuThumbsUp />
        <span className='align-middle'>{formattedLikes}</span>&nbsp;
        <LuThumbsDown />
      </$.InfoContainer>
    </List.Row>
  )
}
