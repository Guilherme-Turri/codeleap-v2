import { Header } from '.'
import { pageRender } from '../../render/pageRender'
import { screen, fireEvent } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import { setUnloggedUser } from '../../context/user/Logout/setUnloggedUser'
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('../../context/user/Logout/setUnloggedUser', () => ({
  setUnloggedUser: jest.fn(),
}));

describe('<Header />', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should render on screen properly', () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      }
    });
    const { container } = pageRender(<Header />)
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should call handleLogout fn', () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      }
    });
    pageRender(<Header />)
    const logout = screen.getByTestId('logout')
    fireEvent.click(logout)
    expect(setUnloggedUser).toHaveBeenCalled();
  })
  it('should navigate to home', () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      }
    });
    pageRender(<Header />)
    const home = screen.getByText('Home')
    fireEvent.click(home)
    expect(window.location.href).toEqual(expect.stringContaining('/home'));
  })
  it('should navigate to Profile', () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      }
    });
    pageRender(<Header />)
    const home = screen.getByText('Profile')
    fireEvent.click(home)
    expect(window.location.href).toEqual(expect.stringContaining('/user'));
  })
  it('should click menu Mobile', () => {
    window.innerWidth = 400
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      }
    });
    pageRender(<Header />)
    const menu = screen.getByTestId('menu')
    fireEvent.click(menu)
    const blur = screen.getByTestId('blur')
    expect(blur).toHaveStyleRule('position', 'fixed')

  })
})
