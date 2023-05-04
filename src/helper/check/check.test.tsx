import { Check } from './'
import { screen } from '@testing-library/react'
import { componentRender } from '../../render/componentRender'

describe('</Check>', () => {
  it('should render on screen', () => {
    componentRender(<Check />)
    const svg = screen.getByTestId('check');
    expect(svg).toBeInTheDocument();
  })
})

