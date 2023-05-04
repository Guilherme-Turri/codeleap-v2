import { Close } from '../../../UI/Close';
import * as Styled from './styles'
import { useWidth } from '../../../hooks/useWidth';

interface ModalShowPhotoProps {
  handleCancel: () => void,
  avatarPic: string
}

export const ModalShowPhoto = ({ handleCancel, avatarPic }: ModalShowPhotoProps) => {
  const width = useWidth();
  const isMobile = width <= 850;

  return (
    <Styled.Container>
      <Styled.Close isMobile={isMobile} data-testid='cancelbtn' onClick={handleCancel}><Close /></Styled.Close>
      <Styled.Img data-testid='img' isMobile={isMobile} src={avatarPic} alt='Profile'></Styled.Img>
    </Styled.Container >
  )
}
