import { Loading } from './'
import { screen } from '@testing-library/react'
import { componentRender } from '../../render/componentRender'

describe('</Loading>', () => {
  it('should render on screen', () => {
    componentRender(<Loading />)
    const svg = screen.getByTestId('loading');
    expect(svg).toBeInTheDocument();
  })
})

