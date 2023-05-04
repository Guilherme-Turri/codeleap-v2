/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from '../../render/pageRender'
import { Profile } from '.'
import { screen, fireEvent, waitFor, act } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import * as setModalTest from '../../context/modal/setModal'
import * as useParamsImport from 'react-router-dom'
import * as fetchUserTest from '../../services/users/profile/getProfile'

jest.setTimeout(10000)

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('<Profile /> - Integration', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const useParamsMock = useParamsImport.useParams as jest.Mock;
  const spyUser = jest.spyOn(fetchUserTest, 'getProfile')

  it('should call actions photo', () => {
    const spyModal = jest.spyOn(setModalTest, 'setModal')

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
    const picture = screen.getByTestId('photo');
    const add = screen.getByTestId('add');
    expect(add).toBeInTheDocument()
    expect(picture).toBeInTheDocument()
    fireEvent.click(picture)
    expect(spyModal).toHaveBeenCalled();
    fireEvent.click(add)
    expect(spyModal).toHaveBeenCalled();
  })
  it('should display modal', () => {
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
        showModal: true,
        modalType: 'showPhoto',
        userId: '123',
        avatarPic: '123',
      }
    });
    pageRender(<Profile />)
    const photo = screen.getByTestId('photo');
    fireEvent.click(photo)
    const containerModal = screen.getByTestId('container');
    expect(containerModal).toBeInTheDocument();
  })

  it('should display error message at fetch user', async () => {
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
    spyUser.mockResolvedValue(({
      response: {
        status: 401
      },
      json: {
        user: {
          _id: '123',
          name: 'testUser',
          email: "mail@test.com"
        },
        status: '',
        message: 'User not found'
      },
    }))

    pageRender(<Profile />)
    await waitFor(() => {
      const errorMsg = screen.getByText('User not found')
      expect(errorMsg).toBeInTheDocument();
    })
  });

  it('should fetch user on DB', async () => {
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
    spyUser.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        user: {
          _id: '123',
          name: 'testUser',
          email: "mail@test.com"
        },
        status: '',
        message: 'User not found'
      },
    }))

    await act(async () => {
      pageRender(<Profile />);
    });
    await waitFor(() => {
      expect(spyUser).toHaveBeenCalled();
    })
  });
})
