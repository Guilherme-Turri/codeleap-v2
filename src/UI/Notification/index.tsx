import { BellPlus } from '@styled-icons/boxicons-solid/BellPlus'
import * as Styled from './styles'

export const Notification = () => {
  return (
    <Styled.Img data-testid='Notification'>
      <BellPlus />
    </Styled.Img>
  )
}