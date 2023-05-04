import { FeatherPointed } from '@styled-icons/fa-solid/FeatherPointed'
import { Close } from '../Close'
import * as Styled from './styles'

interface AddPostProps {
  isClicked: boolean
}
export const AddPost = ({ isClicked }: AddPostProps) => {
  return (
    <Styled.Img data-testid='AddPost'>
      {isClicked ? <Close /> : <FeatherPointed />}
    </Styled.Img>

  )
}