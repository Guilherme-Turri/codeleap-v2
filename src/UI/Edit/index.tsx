import { MessageEdit } from '@styled-icons/boxicons-regular/MessageEdit'
import * as Styled from './styles'

export const Edit = () => {
  return (
    <Styled.Img data-testid='Edit'>
      <MessageEdit />
    </Styled.Img>
  )
}