import React from 'react'
import { ModalAddPhoto } from '.'
import { componentRender } from '../../../render/componentRender'
import { screen, fireEvent } from '@testing-library/react'

describe('<ModalAddPhoto>', () => {

  it('should render on screen properly on success', () => {
    const ModalPhotoAddProps = {
      handleAddPhoto: jest.fn(),
      handleCancel: jest.fn(),
      handleSuccessPhoto: jest.fn(),
      message: 'Message',
      loadPhoto: false
    }
    componentRender(<ModalAddPhoto {...ModalPhotoAddProps} />)

    const successbtn = screen.getByText('OK')
    fireEvent.click(successbtn);
    expect(ModalPhotoAddProps.handleSuccessPhoto).toHaveBeenCalled();
  })

  it('should render on screen properly on LoadPhotoTrue', () => {
    const ModalPhotoAddProps = {
      handleAddPhoto: jest.fn(),
      handleCancel: jest.fn(),
      handleSuccessPhoto: jest.fn(),
      message: 'Message',
      loadPhoto: true
    }
    const { container } = componentRender(<ModalAddPhoto {...ModalPhotoAddProps} />)
    const successbtn = screen.getByTestId('successbtn')

    expect(successbtn).toHaveStyleRule('display', 'none');
    expect(container).toMatchSnapshot();
  })

  it('should render on screen properly when adding a photo and cancel this action', () => {
    const ModalPhotoAddProps = {
      handleAddPhoto: jest.fn(),
      handleCancel: jest.fn(),
      handleSuccessPhoto: jest.fn(),
      message: null,
      loadPhoto: false
    }
    componentRender(<ModalAddPhoto {...ModalPhotoAddProps} />)
    const cancelBtn = screen.getByTestId('cancelbtn')
    fireEvent.click(cancelBtn);
    expect(ModalPhotoAddProps.handleCancel).toHaveBeenCalled();

  })
  it('should render on screen properly when adding a photo', () => {
    const ModalPhotoAddProps = {
      handleAddPhoto: jest.fn(),
      handleCancel: jest.fn(),
      handleSuccessPhoto: jest.fn(),
      message: null,
      loadPhoto: false
    }

    componentRender(<ModalAddPhoto {...ModalPhotoAddProps} />)
    const inputElement = screen.getByTestId('input')
    const file = new File(['test content'], 'test.png', { type: 'image/png' });
    fireEvent.change(inputElement, { target: { files: [file] } });

    const uploadBtn = screen.getByTestId('upload')
    fireEvent.click(uploadBtn)
    expect(ModalPhotoAddProps.handleAddPhoto).toHaveBeenCalled();
  })
})
