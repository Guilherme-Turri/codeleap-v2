import { componentRender } from '../../render/componentRender'
import { AddPost } from '.'
import { screen } from '@testing-library/react'
describe('<AddPost />', () => {
  it('should render Post when isClicked is true', () => {
    const { container } = componentRender(<AddPost isClicked={true}></AddPost>)
    const close = screen.getByTestId('Close')
    expect(close).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should render AddPost when isClicked is false', () => {
    componentRender(<AddPost isClicked={false}></AddPost>)
    const addPost = screen.getByTestId('AddPost')
    expect(addPost).toBeInTheDocument();
  })
})