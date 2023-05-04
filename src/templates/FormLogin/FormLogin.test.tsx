import { componentRender } from '../../render/componentRender'
import { FormLogin } from '.'
import { screen } from '@testing-library/react'

describe('<FormLogin/>', () => {
  it('should render on screen properly', () => {
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
    }

    componentRender(<FormLogin {...propsFormLogin} />)
    expect(screen.getByText('Enter')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  })
})
