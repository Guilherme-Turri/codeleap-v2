/* eslint-disable testing-library/no-unnecessary-act */
import { Login } from '.'
import { pageRender } from '../../render/pageRender'
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as fetchLoginTest from '../../services/users/fetch/fetchLogin'
import * as authLoginTest from '../../services/users/auth/authLogin';
import * as setUserTest from '../../context/user/Login/setLoggeduser'
import * as userFetchTest from '../../hooks/useFetchData'

jest.setTimeout(10000)

const fetchLoginSpy = jest.spyOn(fetchLoginTest, 'fetchLogin')
const authLoginSpy = jest.spyOn(authLoginTest, 'authLogin')
const setUserSpy = jest.spyOn(setUserTest, 'setLoggedUser')

describe('<Login/> - Integration - navigation', () => {
  it('should navigate to register when link is clicked', () => {
    pageRender(<Login />)
    const link = screen.getByText('Register Now!')
    fireEvent.click(link)
    expect(window.location.pathname).toBe('/register');
  })
})

describe('<Login/> - Integration - calling submit', () => {
  it('should try to login calling onSubmit function by form', () => {
    const onSubmitMock = jest.fn();
    pageRender(<Login />)
    const form = screen.getByTestId('form')
    form.onsubmit = onSubmitMock;
    fireEvent.submit(form);
    expect(onSubmitMock).toHaveBeenCalled();
  })

  it('should try to login calling onSubmit function by button', () => {
    const onSubmitMock = jest.fn();
    pageRender(<Login />)
    const form = screen.getByTestId('form')
    form.onsubmit = onSubmitMock;
    const btn = screen.getByText('Enter')
    fireEvent.click(btn);
    expect(onSubmitMock).toHaveBeenCalled();
  })
})

describe('<Login/> - Integration - fetch user', () => {

  it('should try to login with incorrect values', async () => {
    fetchLoginSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        status: 'Invald Email/Password'
      }
    }))
    pageRender(<Login />)

    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('Invald Email/Password')).toBeInTheDocument();
    })
  })
  it('should try to login with correct values and call auth function', async () => {
    fetchLoginSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        token: '123'
      }
    }))
    pageRender(<Login />)

    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Enter')
    act(() => {
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(authLoginSpy).toHaveBeenCalled();
    })
  })

  it('should try to auth user with a wrong credentials', async () => {
    fetchLoginSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        token: '123'
      }
    }))

    authLoginSpy.mockResolvedValue(({
      response: {
        status: 401
      },
      json: {
        status: 'Unauthorized'
      }
    }))

    pageRender(<Login />)

    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('Unauthorized')).toBeInTheDocument();
    })
  })

  it('should try to auth user with right credentials and call function to store user', async () => {
    fetchLoginSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        token: '123'
      }
    }))
    authLoginSpy.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        user: { _id: '01', name: 'user', email: "test@email.com" }
      }
    }))

    pageRender(<Login />)

    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByTestId('check')).toBeInTheDocument();
    })
    await waitFor(() => {
      expect(setUserSpy).toHaveBeenCalled();
    })
  })
})
describe('<Login/> - Integration - display right actions by the custom hook useFetch', () => {
  it('should display loading on screen', async () => {
    jest.spyOn(userFetchTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });
    pageRender(<Login />)

    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeInTheDocument();
    })
  })
  it('should display error message on screen', async () => {
    jest.spyOn(userFetchTest, "useFetchData").mockReturnValue({
      error: 'Fail to Fetch',
      request: jest.fn(),
      loading: false
    });
    pageRender(<Login />)

    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(email, 'test@gmail.com');
      userEvent.type(password, 'test');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('Fail to Fetch')).toBeInTheDocument();
    })
  })
})






