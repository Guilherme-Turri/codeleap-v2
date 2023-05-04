import { screen } from '@testing-library/react'
import { Menu } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Menu>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Menu />)
    expect(screen.getByTestId('MenuOutline')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})