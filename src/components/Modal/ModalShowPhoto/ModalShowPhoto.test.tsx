import { ModalShowPhoto } from '.'
import { componentRender } from '../../../render/componentRender'
import { screen, fireEvent } from '@testing-library/react'

describe('<ModalShowPhoto/>', () => {
  const ModalShowPhotoProps = {
    handleCancel: jest.fn(),
    avatarPic: '123'
  }

  it('should render on screen properly on desk', () => {
    const { container } = componentRender(<ModalShowPhoto {...ModalShowPhotoProps} />)
    const btn = screen.getByTestId('cancelbtn')
    const img = screen.getByTestId('img')
    expect(btn).toHaveStyleRule('top', '-20px')
    expect(btn).toHaveStyleRule('right', '-20px')
    expect(img).toHaveStyleRule('width', '450px')
    expect(img).toHaveStyleRule('height', '450px')
    expect(container).toMatchSnapshot();
  })

  it('should call handleCancel when close button is clicked', () => {
    componentRender(<ModalShowPhoto {...ModalShowPhotoProps} />)
    const btn = screen.getByTestId('cancelbtn')
    fireEvent.click(btn);
    expect(ModalShowPhotoProps.handleCancel).toHaveBeenCalled();
  })
  it('should render on screen properly on Mobile', () => {
    window.innerWidth = 450
    componentRender(<ModalShowPhoto {...ModalShowPhotoProps} />)
    const btn = screen.getByTestId('cancelbtn')
    const img = screen.getByTestId('img')
    expect(btn).toHaveStyleRule('top', '65px')
    expect(btn).toHaveStyleRule('right', '15px')
    expect(img).toHaveStyleRule('width', '350px')
    expect(img).toHaveStyleRule('height', '350px')
  })
})