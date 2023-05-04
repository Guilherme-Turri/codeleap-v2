import { screen } from '@testing-library/react'
import { Delete } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Delete>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Delete />)
    expect(screen.getByTestId('Delete')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})