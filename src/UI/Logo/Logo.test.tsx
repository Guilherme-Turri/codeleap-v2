import { screen } from '@testing-library/react'
import { Logo } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Logo>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Logo />)
    expect(screen.getByTestId('Logo')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})