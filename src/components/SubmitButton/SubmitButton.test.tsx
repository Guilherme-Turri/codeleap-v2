import { SubmitButton } from '.'
import { componentRender } from '../../render/componentRender'
import { screen } from '@testing-library/react'
import { theme } from '../../styles/theme'


describe('<SubmitButton>', () => {
  it('should render on screen with disable button', () => {
    componentRender(<SubmitButton usermail='' userpassword='' error=''>test</SubmitButton>)
    const btn = screen.getByText('test')
    expect(btn).toHaveStyle('background: grey');
    expect(btn).toHaveStyle('cursor: auto');
  })


  it('should render on screen with enamble button', () => {
    const { container } = componentRender(<SubmitButton usermail='aaa@gmail.com' userpassword='aaaaa' error=''>test</SubmitButton>)
    const btn = screen.getByText('test')
    expect(btn).toHaveStyle('cursor: pointer');
    expect(btn).toHaveStyle(`background:${theme.color.secondaryColor}`);
    expect(container).toMatchSnapshot();

  })
})