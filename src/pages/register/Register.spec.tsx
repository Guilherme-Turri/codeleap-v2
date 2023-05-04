/* eslint-disable testing-library/no-unnecessary-act */
import { Register } from '.'
import { pageRender } from '../../render/pageRender'
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as userFetchTest from '../../hooks/useFetchData'
import * as createUserTest from '../../services/users/create/createUser'
import * as setUserTest from '../../context/user/Login/setLoggeduser'

const createUserSpy = jest.spyOn(createUserTest, 'createUser')
const setUserSpy = jest.spyOn(setUserTest, 'setLoggedUser')

jest.setTimeout(10000)

describe('Regsiter - Integration - Navigate', () => {
  it('should navigate to Login', () => {
    pageRender(
      <Register />
    )
    const link = screen.getByText('Go to Login!')
    fireEvent.click(link)
    expect(window.location.pathname).toBe('/');
  })
})
describe('<Register/> - Integration - Calling Submit', () => {
  it('should try to login calling onSubmit function by form', () => {
    const onSubmitMock = jest.fn();
    pageRender(<Register />)
    const form = screen.getByTestId('form')
    form.onsubmit = onSubmitMock;

    fireEvent.submit(form);
    expect(onSubmitMock).toHaveBeenCalled();
  })

  it('should try to login calling onSubmit function by button', () => {
    const onSubmitMock = jest.fn();
    pageRender(<Register />)
    const form = screen.getByTestId('form')
    form.onsubmit = onSubmitMock;
    const btn = screen.getByText('Register')
    fireEvent.click(btn);
    expect(onSubmitMock).toHaveBeenCalled();
  })
})

describe('<Register/> - Try to create User', () => {
  it('should try create user thats already exist', async () => {
    createUserSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        msg: 'User Already Exist'
      }
    }))
    pageRender(<Register />)

    const name = screen.getByPlaceholderText('Name')
    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Register')
    act(() => {
      userEvent.type(name, 'testName');
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(screen.getByText('User Already Exist')).toBeInTheDocument();
    })
  })

  it('should try create user with right values and dispatch user', async () => {
    createUserSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        token: '123456',
        msg: 'User Created',
        user: {
          _id: '123',
          name: 'test@test.com',
          email: 'email@test.com'
        }
      }
    }))
    pageRender(<Register />)

    const name = screen.getByPlaceholderText('Name')
    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Register')
    act(() => {
      userEvent.type(name, 'testName');
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('User Created')).toBeInTheDocument();
    })
    await waitFor(() => {
      expect(setUserSpy).toHaveBeenCalled();
    })
  })
})

describe('<Register/> - Integration - Display actions by useFetch Custom Hook', () => {
  it('should render loading svg when its true', () => {
    jest.spyOn(userFetchTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });
    pageRender(<Register />)
    const loading = screen.getByTestId('loading')
    expect(loading).toBeInTheDocument()

  })
  it('should render error message  when its true', () => {
    jest.spyOn(userFetchTest, "useFetchData").mockReturnValue({
      error: 'ErrorMsg',
      request: jest.fn(),
      loading: true
    });

    pageRender(<Register />)
    const error = screen.getByText('ErrorMsg')
    expect(error).toBeInTheDocument()
  })
})

