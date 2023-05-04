import { screen } from '@testing-library/react'
import { Notification } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Pencil>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Notification />)
    expect(screen.getByTestId('Notification')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})