import { Helmet } from '.'
import { render } from '@testing-library/react'
describe('<Helmet>', () => {
  it('should change the title page', () => {
    render(<Helmet title='Login' />)
    expect(document.title).toBe('Login | Codeleap Test')
  })
})