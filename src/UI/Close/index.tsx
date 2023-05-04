import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle'
import * as Styled from './styles'

export const Close = () => {
  return (
    <Styled.Img data-testid='Close'>
      <CloseCircle />
    </Styled.Img>
  )
}