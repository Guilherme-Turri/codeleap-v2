import { componentRender } from '../../render/componentRender'
import { FormLogin } from '.'
import { screen } from '@testing-library/react'

describe('<FormLogin/>', () => {
  const propsFormLogin = {
    usermail: {
      onChange: jest.fn(),
      value: '123',
      error: 'Msgerror'
    },
    userpassword: {
      onChange: jest.fn(),
      value: '123',
      error: 'Msgerror'
    },
    handleLogin: jest.fn(),
    loading: false
  }
  it('should render on screen properly', () => {
    componentRender(<FormLogin {...propsFormLogin} />)
    expect(screen.getByText('Enter')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  })
  it('should render on screen with Loading text', () => {
    propsFormLogin.loading = true;
    componentRender(<FormLogin {...propsFormLogin} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })
})
