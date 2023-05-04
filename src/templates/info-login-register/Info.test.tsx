import { componentRender } from '../../render/componentRender'
import { Info } from '.'
import { screen } from '@testing-library/react'

describe('<Info/>', () => {
  it('should render on screen with loading', () => {
    const propsInfo = {
      loading: true,
      error: null,
      message: null,
      lock: false,
      loginSucess: false
    }
    const { container } = componentRender(<Info {...propsInfo} />)
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should render on screen with ErrorMsg', () => {
    const propsInfo = {
      loading: false,
      error: 'ErrorMsg',
      message: null,
      lock: false,
      loginSucess: false
    }
    componentRender(<Info {...propsInfo} />)
    expect(screen.getByText('ErrorMsg')).toBeInTheDocument();
  })

  it('should render on screen with msg', () => {
    const propsInfo = {
      loading: false,
      error: null,
      message: 'msg',
      lock: false,
      loginSucess: false
    }
    componentRender(<Info {...propsInfo} />)
    expect(screen.getByText('msg')).toBeInTheDocument();
  })

  it('should render on screen with lock', () => {
    const propsInfo = {
      loading: false,
      error: null,
      message: null,
      lock: true,
      loginSucess: false
    }
    componentRender(<Info {...propsInfo} />)
    expect(screen.getByTestId('authlogo')).toBeInTheDocument();
  })

  it('should render on screen with success logo', () => {
    const propsInfo = {
      loading: false,
      error: null,
      message: null,
      lock: false,
      loginSucess: true
    }
    componentRender(<Info {...propsInfo} />)
    expect(screen.getByTestId('check')).toBeInTheDocument();
  })
})
