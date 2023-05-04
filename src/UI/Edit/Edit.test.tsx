import { screen } from '@testing-library/react'
import { Edit } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Edit>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Edit />)
    expect(screen.getByTestId('Edit')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})