import { screen } from '@testing-library/react'
import {TextComponent} from '.'
import { componentRender } from '../../render/componentRender'

describe('<TextCompoenent />', ()=>{
  it('should render on screen', ()=>{
    const {container } = componentRender(<TextComponent>test</TextComponent>)
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})
