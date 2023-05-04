import { NotFound } from '.'
import { pageRender } from '../../render/pageRender'
import { screen } from '@testing-library/react';

describe('NotFound- UnitTest', () => {
  it('sould render on desk properly', () => {
    pageRender(<NotFound />)
    expect(screen.getByText('404 - Page not Found.')).toBeInTheDocument();
    const wrapper = screen.getByTestId('wrapper')
    expect(wrapper).toHaveStyleRule('width', '50%')
  })

  it('sould render on Mobile properly', () => {
    window.innerWidth = 400;
    pageRender(<NotFound />)
    expect(screen.getByText('404 - Page not Found.')).toBeInTheDocument();
    const wrapper = screen.getByTestId('wrapper')
    expect(wrapper).toHaveStyleRule('width', '90%')
  })
})
