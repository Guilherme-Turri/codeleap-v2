import React from 'react'
import * as Styled from './styles'
import { TextArea } from '../../components/TextArea'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import { TextComponent } from '../../components/TextComponent'
import { valuesForm, valuesFormTextArea } from '../../types/types'


interface IFormProps {
  handleCreatePost?: (event: React.FormEvent<HTMLFormElement>) => void,
  handleUpdatePost?: (event: React.FormEvent<HTMLFormElement>) => void,
  postTitle: valuesForm,
  postContent: valuesFormTextArea,
  isClosable: boolean,
}

export const FormPost = ({ isClosable, handleUpdatePost, handleCreatePost, postTitle, postContent }: IFormProps) => {

  const actionToAPI = handleCreatePost || handleUpdatePost;

  return (
    <Styled.Container isClosable={isClosable} onSubmit={actionToAPI} data-testid='form'>
      <TextComponent> {isClosable ? 'Edit your post' : 'Whats on your mind? Create a Post!'}</TextComponent>
      <Input {...postTitle} type='text' name='Title'></Input>
      <Styled.TextArea>
        <TextArea {...postContent} />
      </Styled.TextArea>
      <SubmitButton error='' postTitle={postTitle.value} postContent={postContent.value}>Send</SubmitButton>
    </Styled.Container>
  )
}