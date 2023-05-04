import { screen } from '@testing-library/react'
import { Pencil } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Pencil>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Pencil />)
    expect(screen.getByTestId('Pencil')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})