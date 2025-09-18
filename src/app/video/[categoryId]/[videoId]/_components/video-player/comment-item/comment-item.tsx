import Image from 'next/image'
import { LuThumbsDown, LuThumbsUp } from 'react-icons/lu'
import { List } from 'rsc-daisyui'
import { helpers } from '@/utils'
import * as $ from './comment-item.styled'

export function CommentItem({ comment }: Props.WithComment) {
  const { authorDisplayName, updatedAt, textDisplay, likeCount } = comment.snippet.topLevelComment.snippet
  const date = helpers.formatDate(updatedAt)
  const likes = helpers.formatValue(likeCount)

  return (
    <List.Row>
      <$.ImageContainer>
        <Image alt='' className='' src='https://img.daisyui.com/images/profile/demo/1@94.webp' fill />
      </$.ImageContainer>
      <$.InfoContainer>
        <$.CommenterName>@{authorDisplayName}</$.CommenterName>
        <span className='opacity-60'>{date}</span>
        <p>{textDisplay}</p>
        <LuThumbsUp />
        <span className='align-middle'>{likes}</span>&nbsp;
        <LuThumbsDown />
      </$.InfoContainer>
    </List.Row>
  )
}
