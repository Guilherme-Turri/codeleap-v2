import { ModalUpdatePost } from '.'
import { componentRender } from '../../../render/componentRender'
import { screen, fireEvent } from '@testing-library/react'
describe('<ModalUpdatePost/>', () => {
  const modalProps = {
    postTitle: {
      value: '',
      error: '',
      onChange: jest.fn()
    },
    postContent: {
      value: '',
      error: '',
      onChange: jest.fn()
    },
    handleSuccess: jest.fn(),
    handleCancel: jest.fn(),
    handleUpdatePost: jest.fn(),
    message: 'Message displayed'
  }

  it('should render on screen with message and action suceess', () => {
    const { container } = componentRender(<ModalUpdatePost {...modalProps} />);
    expect(screen.getByText(modalProps.message)).toBeInTheDocument();
    const sucessBtn = screen.getByTestId('successbtn');
    expect(sucessBtn).toBeInTheDocument()
    fireEvent.click(sucessBtn)
    expect(modalProps.handleSuccess).toHaveBeenCalled()
    expect(container).toMatchSnapshot();
  })

  it('should render on screen and Cancel Action', () => {
    modalProps.message = '';
    componentRender(<ModalUpdatePost {...modalProps} />);
    expect(screen.getByText('Edit your post')).toBeInTheDocument();
    const cancelBtn = screen.getByTestId('cancelbtn');
    expect(cancelBtn).toBeInTheDocument()
    fireEvent.click(cancelBtn)
    expect(modalProps.handleCancel).toHaveBeenCalled()
  })

  it('should render properly on mobile', () => {
    modalProps.message = '';
    window.innerWidth = 400;
    componentRender(<ModalUpdatePost {...modalProps} />);
    const closebnt = screen.getByTestId('cancelbtn')
    expect(closebnt).toHaveStyleRule('top', '60px')
    expect(closebnt).toHaveStyleRule('right', '30px')
  })
})