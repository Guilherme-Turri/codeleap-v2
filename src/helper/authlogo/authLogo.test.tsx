import { AuthLogo } from './'
import { screen } from '@testing-library/react'
import { componentRender } from '../../render/componentRender'

describe('</AuthLogo>', () => {
  it('should render on screen', () => {
    componentRender(<AuthLogo />)
    const svg = screen.getByTestId('authlogo');
    expect(svg).toBeInTheDocument();
  })
})

