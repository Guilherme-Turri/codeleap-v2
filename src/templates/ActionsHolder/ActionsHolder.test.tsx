import { pageRender } from '../../render/pageRender'
import { screen, fireEvent } from '@testing-library/react'
import { ActionsHolder } from './'

describe('<ActionsHolder />', () => {
  const ActionsHolderProps = {
    handleDelete: jest.fn(),
    handleEdit: jest.fn(),
  }

  it('should render on screen properly', () => {
    const { container } = pageRender(<ActionsHolder {...ActionsHolderProps} />)
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should render on screen properly and call handleDelete fn', () => {
    const { container } = pageRender(<ActionsHolder {...ActionsHolderProps} />)
    expect(container).toBeInTheDocument();
    const deletebtn = screen.getByTestId('delete')
    fireEvent.click(deletebtn);
    expect(ActionsHolderProps.handleDelete).toHaveBeenCalled();
  })

  it('should render on screen properly and call handleEdit fn', () => {
    const { container } = pageRender(<ActionsHolder {...ActionsHolderProps} />)
    expect(container).toBeInTheDocument();
    const editbtn = screen.getByTestId('edit')
    fireEvent.click(editbtn);
    expect(ActionsHolderProps.handleEdit).toHaveBeenCalled();
  })
})
