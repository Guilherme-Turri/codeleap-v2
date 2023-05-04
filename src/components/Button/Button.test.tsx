import { Button } from './'
import { componentRender } from '../../render/componentRender'
import { screen } from '@testing-library/react'

describe('<Button />', () => {
  it('Should render on screen properly', () => {
    const { container } = componentRender(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(container).toMatchSnapshot()
  })
})