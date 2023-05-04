import { componentRender } from '../../render/componentRender'
import { Footer } from '.'
import { screen } from '@testing-library/react'

describe('<Footer/>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Footer />)
    expect(screen.getByText('Guilherme Turri - 2023')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})
