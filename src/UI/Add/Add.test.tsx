import { screen } from '@testing-library/react'
import { Add } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Add>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Add />)
    expect(screen.getByTestId('Add')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})