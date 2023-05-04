import { screen } from '@testing-library/react'
import { UpArrow } from '.'
import { componentRender } from '../../render/componentRender'

describe('</UpArrow>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<UpArrow />)
    expect(screen.getByTestId('UpArrow')).toBeInTheDocument();
    expect(container).toMatchSnapshot();

  })
})