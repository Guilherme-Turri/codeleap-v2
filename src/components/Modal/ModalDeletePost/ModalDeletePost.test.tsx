import { ModalDeletePost } from '.'
import { componentRender } from '../../../render/componentRender'
import { screen, fireEvent } from '@testing-library/react'
describe('<ModalDeletePost />', () => {
  const modalProps = {
    handleSuccess: jest.fn(),
    handleCancel: jest.fn(),
    handleDelete: jest.fn(),
    message: 'Message displayed'
  }
  it('should render on screen with message and action suceess', () => {
    const { container } = componentRender(<ModalDeletePost {...modalProps} />)
    expect(screen.getByText(modalProps.message)).toBeInTheDocument();
    const succesBtn = screen.getByTestId("successbtn");
    expect(succesBtn).toBeInTheDocument();
    fireEvent.click(succesBtn);
    expect(modalProps.handleSuccess).toHaveBeenCalled();
    expect(container).toMatchSnapshot();


  })
  it('should render on screen and Cancel Action', () => {
    modalProps.message = '';
    componentRender(<ModalDeletePost {...modalProps} />)
    expect(screen.getByText('Are you sure to delete this post?')).toBeInTheDocument();
    const cancelBtn = screen.getByTestId("cancelbtn");
    expect(cancelBtn).toBeInTheDocument();
    fireEvent.click(cancelBtn);
    expect(modalProps.handleCancel).toHaveBeenCalled();
  })
  it('should render on screen and do Delete Action', () => {
    modalProps.message = '';
    componentRender(<ModalDeletePost {...modalProps} />)
    expect(screen.getByText('Are you sure to delete this post?')).toBeInTheDocument();
    const deletebtn = screen.getByTestId("deletebtn");
    expect(deletebtn).toBeInTheDocument();
    fireEvent.click(deletebtn);
    expect(modalProps.handleDelete).toHaveBeenCalled();
  })

})