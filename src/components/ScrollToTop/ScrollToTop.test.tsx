import { ScrollToTop } from '.'
import { componentRender } from '../../render/componentRender'
import { screen, fireEvent } from '@testing-library/react'

describe('<ScrollToTop/>', () => {
  it('Should render on screen and call function', () => {
    window.scrollTo = jest.fn()
    const { container } = componentRender(<ScrollToTop />)
    const scroll = screen.getByTestId('scroll')
    expect(scroll).toBeInTheDocument();
    fireEvent.click(scroll);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    expect(container).toMatchSnapshot();
  })
})