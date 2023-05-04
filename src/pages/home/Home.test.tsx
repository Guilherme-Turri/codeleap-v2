/* eslint-disable testing-library/await-async-utils */
import { pageRender } from '../../render/pageRender'
import { Home } from '.'
import { screen, fireEvent } from '@testing-library/react'
import * as reactRedux from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));


describe('<Home/> - UnitTest', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should render properly', () => {
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
    pageRender(<Home />)
    const postCreate = screen.getByText('Whats on your mind? Create a Post!')
    expect(postCreate).toBeInTheDocument();
  })

  it('should render properly on mobile', () => {
    window.innerWidth = 400
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      modal: {
        showModal: true,
        modalType: 'update',
        postid: '235',
      }
    });
    pageRender(<Home />)
    const addPost = screen.getByTestId('AddPost')
    expect(addPost).toBeInTheDocument();
    fireEvent.click(addPost)
    const createPostContainer = screen.getByTestId('container')
    expect(createPostContainer).toBeInTheDocument();
  })
})


