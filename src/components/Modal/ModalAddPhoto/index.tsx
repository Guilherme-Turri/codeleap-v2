import * as Styled from './styles'
import { TextComponent } from '../../TextComponent'
import { Button } from '../../Button'
import React from 'react';

/* type HandleAddPhoto =  */
interface ModalAddPhotoProps {
  handleAddPhoto?: (file: File) => void;
  handleCancel?: () => void;
  handleSuccessPhoto?: () => void;
  message?: string | null;
  loadPhoto?: boolean
}
export const ModalAddPhoto = ({ loadPhoto, message, handleCancel, handleSuccessPhoto, handleAddPhoto }: ModalAddPhotoProps) => {
  const [item, setItem] = React.useState()

  const handleAddPhotoWrapper = (event: any) => {
    const file = event.target.files?.[0];
    file && setItem(file)
  };

  const handleUploadClick = () => {
    /*     if (handleAddPhoto && item) {
          handleAddPhoto(item);
        } */
    handleAddPhoto && item && handleAddPhoto(item)
  };
  return (
    <Styled.Container>
      <TextComponent>Choose a picture to upload</TextComponent>
      <Styled.Wrapper>
        {message ? (
          <>
            <TextComponent>{message}</TextComponent>
            <Styled.Button loadPhoto={loadPhoto} data-testid='successbtn' onClick={handleSuccessPhoto}>
              <Button>OK</Button>
            </Styled.Button>
          </>
        ) : (
          <>
            <input data-testid='input' type='file' name='img' id='img' onChange={handleAddPhotoWrapper} />
            <Styled.Button data-testid='upload' onClick={handleUploadClick}>
              <Button>Upload</Button>
            </Styled.Button>
            <Styled.Button data-testid='cancelbtn' onClick={handleCancel}>
              <Button>Cancel</Button>
            </Styled.Button>
          </>
        )}
      </Styled.Wrapper>
    </Styled.Container >
  )
}
