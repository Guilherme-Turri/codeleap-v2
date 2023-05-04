import { screen } from '@testing-library/react'
import { DoorOpened } from '.'
import { componentRender } from '../../render/componentRender'

describe('</DoorOpened>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<DoorOpened />)
    expect(screen.getByTestId('DoorOpened')).toBeInTheDocument();
    expect(container).toMatchSnapshot();

  })
})