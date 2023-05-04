import { Left } from '.'
import { pageRender } from '../../render/pageRender'
import { screen } from '@testing-library/react'

describe('<Left />', () => {
  it('should render on screen properly at loginPage', () => {
    pageRender(<Left />)
    const codeleap = screen.getByText('CodeLeap')
    expect(codeleap).toBeInTheDocument();
  })
})