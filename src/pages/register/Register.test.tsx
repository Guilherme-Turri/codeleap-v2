import { Register } from '.'
import { pageRender } from '../../render/pageRender'
import { screen } from '@testing-library/react';

describe('<Regsiter/> - UnitTest', () => {
  it('should render properly on desk', () => {
    pageRender(
      <Register />
    )
    const container = screen.getByTestId('containerRegiste')
    expect(container).toHaveStyleRule('flex-direction', 'row');
  })

  it('should render properly on mobile', () => {
    window.innerWidth = 400
    pageRender(
      <Register />
    )
    const container = screen.getByTestId('containerRegiste')
    expect(container).toHaveStyleRule('flex-direction', 'column');
  })
})