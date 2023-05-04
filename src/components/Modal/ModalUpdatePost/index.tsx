import * as Styled from './styles'
import { TextComponent } from '../../TextComponent'
import { Button } from '../../Button'
import { FormPost } from '../../../templates/FormPost';
import { valuesForm, valuesFormTextArea } from '../../../types/types';
import { Close } from '../../../UI/Close';
import { useWidth } from '../../../hooks/useWidth'

interface IModalUpdateProps {
  postTitle: valuesForm,
  postContent: valuesFormTextArea,
  handleUpdatePost?: (event: React.FormEvent<HTMLFormElement>) => void,
  handleCancel: () => void;
  handleSuccess: () => void;
  message: string | null;
}

export const ModalUpdatePost = ({ postTitle, postContent, handleSuccess, handleCancel, handleUpdatePost, message }: IModalUpdateProps) => {

  const width = useWidth();
  const isMobile = width <= 850;

  return (
    <Styled.Container>
      <Styled.Wrapper>
        {message ? (
          <>
            <TextComponent>{message}</TextComponent>
            <Styled.Button data-testid='successbtn' onClick={handleSuccess}>
              <Button>OK</Button>
            </Styled.Button>
          </>
        ) : (
          <>
            <Styled.Close isMobile={isMobile} data-testid='cancelbtn' onClick={handleCancel}><Close /></Styled.Close>
            <FormPost handleUpdatePost={handleUpdatePost} isClosable={true} postTitle={postTitle} postContent={postContent}></FormPost>
          </>
        )}
      </Styled.Wrapper>
    </Styled.Container >
  )
}
