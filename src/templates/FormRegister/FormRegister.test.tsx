import { componentRender } from '../../render/componentRender'
import { FormRegister } from '.'
import { screen } from '@testing-library/react'

describe('<FormRegister/>', () => {
  const propsFormRegister = {
    username: {
      onChange: jest.fn(),
      value: '123',
    },
    usermail: {
      onChange: jest.fn(),
      value: '123',
      error: 'Msgerror'
    },
    userpassword: {
      onChange: jest.fn(),
      value: '123',
    },
    handleRegister: jest.fn(),
    loading: false
  }
  it('should render on screen properly', () => {
    componentRender(<FormRegister {...propsFormRegister} />)
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  })
  it('should render on screen with Loading text', () => {
    propsFormRegister.loading = true
    componentRender(<FormRegister {...propsFormRegister} />)
    expect(screen.getByText('Creating...')).toBeInTheDocument();
  })
})
