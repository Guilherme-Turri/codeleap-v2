import { DoorOpen } from '@styled-icons/bootstrap/DoorOpen'
import * as Styled from './styles'

export const DoorOpened = () => {
  return (
    <Styled.Img data-testid='DoorOpened'>
      <DoorOpen />
    </Styled.Img>
  )
}