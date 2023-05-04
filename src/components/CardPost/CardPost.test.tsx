import { pageRender } from '../../render/pageRender'
import { CardPost } from '.'
import { screen } from '@testing-library/react'
describe('<CardPost />', () => {
  const cardProps = {
    author: 'AuthorTest',
    title: 'This is a Tittle',
    content: 'This is the content',
    _id: '123',
    authorId: '123',
    createdAt: '2022-09-23T14:25:37.504+00:00',
    user: '123'
  }
  it('should render on screen properly', () => {
    const { container } = pageRender(<CardPost {...cardProps} />)
    const title = screen.getByText('This is a Tittle');
    const content = screen.getByText('This is the content');
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render properly on a mobile', () => {
    window.innerWidth = 400;
    pageRender(<CardPost {...cardProps} />)
    const cardContainer = screen.getByTestId('cardContainer');
    expect(cardContainer).toHaveStyleRule('flex-direction', 'column')
  })

}

)