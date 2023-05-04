import { TextArea } from '.'
import { componentRender } from '../../render/componentRender'
import { screen } from '@testing-library/react'


describe('<TextArea/>', () => {
  it('should render on screeen properly', () => {
    const onChange = jest.fn();
    componentRender(<TextArea value={'value'} onChange={onChange}></TextArea>)
    expect(screen.getByPlaceholderText('Content Here')).toBeInTheDocument();
  })
})