import Image from 'next/image'
import { LuThumbsDown, LuThumbsUp } from 'react-icons/lu'
import { List } from 'rsc-daisyui'
import { helpers } from '@/utils'
import * as $ from './comment-item.styled'

export function CommentItem({ comment }: Props.WithComment) {
  const { snippet } = comment.snippet.topLevelComment
  const { authorDisplayName, authorProfileImageUrl, updatedAt, textDisplay, likeCount } = snippet

  const date = helpers.formatDate(updatedAt)
  const likes = likeCount ? helpers.formatValue(likeCount) : ''

  return (
    <List.Row className='shadow-none'>
      <$.ImageContainer>
        <Image alt={authorDisplayName} src={authorProfileImageUrl} fill />
      </$.ImageContainer>
      <$.InfoContainer>
        <$.CommenterName>{authorDisplayName}</$.CommenterName>
        <span className='opacity-60'>{date}</span>
        <p>{textDisplay}</p>
        <LuThumbsUp />
        <span className='align-middle'>{likes}</span>&nbsp;
        <LuThumbsDown />
      </$.InfoContainer>
    </List.Row>
  )
}
