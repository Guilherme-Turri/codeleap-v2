import * as Styled from './styles'
import { Edit } from '../../UI/Edit'
import { Delete } from '../../UI/Delete'
import { useWidth } from '../../hooks/useWidth';

interface ActionsHolderProps {
  handleDelete: () => void;
  handleEdit: () => void;
}

export const ActionsHolder = ({ handleDelete, handleEdit }: ActionsHolderProps) => {

  const width = useWidth();
  const isMobile = width <= 850;

  return (
    <Styled.Container isMobile={isMobile} >
      <Styled.Wrapper isMobile={isMobile} data-testid='edit' onClick={handleEdit}>
        <Edit></Edit>
      </Styled.Wrapper>
      <Styled.Wrapper isMobile={isMobile} data-testid='delete' onClick={handleDelete} >
        <Delete></Delete>
      </Styled.Wrapper >
    </Styled.Container >
  )
}