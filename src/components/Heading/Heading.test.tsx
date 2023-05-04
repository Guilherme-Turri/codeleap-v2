import { componentRender } from '../../render/componentRender'
import { Heading } from '.'
import { screen } from '@testing-library/react'

describe('<Heading />', () => {
  it('should render on screen with h1 and uppercase true', () => {
    componentRender(<Heading big={true} as='h1' uppercase={true}>test</Heading>)
    expect(screen.getByText('test')).toHaveStyle('text-transform: uppercase');
  })
  it('should render on screen with h2 and uppercase false', () => {
    const { container } = componentRender(<Heading big={false} as='h2' uppercase={false}>test</Heading>)
    expect(screen.getByText('test')).toHaveStyle('text-transform: none');
    expect(container).toMatchSnapshot();
  })
})