import React from 'react'
import * as Styled from './styles'
import { TextComponent } from '../TextComponent'
import { parseISO, formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { useWidth } from '../../hooks/useWidth';

interface cardProps {
  author: string,
  title: string,
  content: string,
  avatarPic?: string | null | undefined,
  _id: string,
  createdAt: string,
  authorId: string,
}
export const CardPost = ({ author, title, content, createdAt, authorId, avatarPic }: cardProps) => {
  const date = formatDistanceToNow(parseISO(createdAt), { addSuffix: true });
  const width = useWidth();
  const isMobile = width <= 850;
  return (
    <Styled.Container data-testid='cardContainer' isMobile={isMobile}>
      <Styled.User>
        <Styled.Img src={avatarPic!} alt='Profile'></Styled.Img>
        <Link to={`/user/${authorId}`}>@{author}</Link>
      </Styled.User>
      <Styled.Post>
        <TextComponent >{title}</TextComponent>
        <TextComponent>{content}</TextComponent>
        <TextComponent>{date}</TextComponent>
      </Styled.Post>
    </Styled.Container>

  )

}
