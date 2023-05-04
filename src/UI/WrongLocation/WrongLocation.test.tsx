import { screen } from '@testing-library/react'
import { WrongLocation } from '.'
import { componentRender } from '../../render/componentRender'

describe('</WrongLocation>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<WrongLocation />)
    expect(screen.getByTestId('WrongLocation')).toBeInTheDocument();
    expect(container).toMatchSnapshot();

  })
})