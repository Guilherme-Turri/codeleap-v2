import { componentRender } from '../../render/componentRender'
import { ErrorMessage } from '.'
import { screen } from '@testing-library/react'
import { theme } from '../../styles/theme'

describe('<ErrorMessage/>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<ErrorMessage>test</ErrorMessage>)
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('test')).toHaveStyle(`color:${theme.color.error}`)
    expect(container).toMatchSnapshot();
  })
})