import * as Styled from './styles'
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'


export const Check = () => {
  return (
    <Styled.Container data-testid='check'>
      <CheckCircleFill></CheckCircleFill>
    </Styled.Container>
  )
}