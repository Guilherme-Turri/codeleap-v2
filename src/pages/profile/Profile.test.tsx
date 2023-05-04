/* eslint-disable testing-library/await-async-utils */
import { pageRender } from '../../render/pageRender'
import { Profile } from '.'
import { screen, waitFor } from '@testing-library/react'
import * as useParamsImport from 'react-router-dom'
import * as reactRedux from 'react-redux'
jest.setTimeout(10000)

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));


describe('<Profile/> - UnitTest', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const useParamsMock = useParamsImport.useParams as jest.Mock;

  it('should render properly when is a loggedUser Profile', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      modal: {
        showModal: false,
        modalType: '',
        userId: '',
        avatarPic: '',
      }
    });
    pageRender(<Profile />)
    waitFor(() => {
      const add = screen.getByTestId('add')
      expect(add).toHaveStyleRule('display', 'flex');
    })

  })

  it('should render properly when is not a loggedUser Profile', () => {
    useParamsMock.mockReturnValue({
      id: '321'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      modal: {
        showModal: false,
        modalType: '',
        userId: '',
        avatarPic: '',
      }
    });
    pageRender(<Profile />)
    const add = screen.getByTestId('add')
    expect(add).toHaveStyleRule('display', 'none');
  })

  it('should render on desk screen properly', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      modal: {
        showModal: false,
        modalType: '',
        userId: '',
        avatarPic: '',
      }
    });
    pageRender(<Profile />)
    const content = screen.getByTestId('content')
    expect(content).toHaveStyleRule('width', '50rem');
  })

  it('should render on Mobile properly', () => {
    window.innerWidth = 400
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      modal: {
        showModal: false,
        modalType: '',
        userId: '',
        avatarPic: '',
      }
    });
    pageRender(<Profile />)
    const content = screen.getByTestId('content')
    expect(content).toHaveStyleRule('width', '85%');
  })
})


