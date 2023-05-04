import * as Styled from './styles'
import { TextComponent } from '../../TextComponent'
import { Button } from '../../Button'

interface modalDeleteProps {
  handleDelete: () => void;
  handleCancel: () => void;
  handleSuccess: () => void;
  message: string | null;
}

export const ModalDeletePost = ({ handleSuccess, handleCancel, handleDelete, message }: modalDeleteProps) => {

  return (
    <Styled.Container>
      <Styled.Wrapper >
        {message ? (
          <>
            <TextComponent>{message}</TextComponent>
            <Styled.Button data-testid='successbtn' onClick={handleSuccess}>
              <Button>OK</Button>
            </Styled.Button>
          </>
        ) : (
          <>
            <TextComponent>Are you sure to delete this post?</TextComponent>
            <Styled.Actions >
              <Styled.Button data-testid='deletebtn' onClick={handleDelete}>
                <Button>Yes</Button>
              </Styled.Button>
              <Styled.Button data-testid='cancelbtn' onClick={handleCancel}>
                <Button>Cancel</Button>
              </Styled.Button>
            </Styled.Actions>
          </>
        )}
      </Styled.Wrapper>
    </Styled.Container >
  )
}
