/* eslint-disable testing-library/no-unnecessary-act */
import { PostHolder } from '.'
import { pageRender } from '../../render/pageRender'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import * as useParamsImport from 'react-router-dom'
import React from 'react'
import * as setModalTest from '../../context/modal/setModal'
import * as fetchPostTest from '../../services/posts/fetch/fetchPost'
jest.setTimeout(10000)

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('<PostHoler/>', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const useParamsMock = useParamsImport.useParams as jest.Mock;
  const spyfetch = jest.spyOn(fetchPostTest, 'fetchPost')
  it('should render on screen properly with no Post', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      post: []
    });
    pageRender(<PostHolder />)
    const msg = screen.getByText('There are no posts yet')
    expect(msg).toBeInTheDocument();
  })

  it('should render on screen properly with  Post', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      post:
        [
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
        ]
    });

    pageRender(<PostHolder />)
    const postTitle = screen.getByText('title1')
    expect(postTitle).toBeInTheDocument();
  });

  it('Should display edit actions when user is owner of a post and call functions', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      post:
        [
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
        ]
    });

    const spyModal = jest.spyOn(setModalTest, 'setModal')

    pageRender(<PostHolder />)

    const deleteBtn = screen.getByTestId('delete')
    const editBtn = screen.getByTestId('Edit')
    expect(deleteBtn).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    fireEvent.click(editBtn);
    expect(spyModal).toHaveBeenCalled();
    fireEvent.click(deleteBtn);
    expect(spyModal).toHaveBeenCalled();
  })

  it('Should render post properly when user is not owner of posts', () => {
    useParamsMock.mockReturnValue({
      id: ''
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '1234',
        name: 'testUser',
        email: "mail@test.com",
      },
      post:
        [
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
        ]
    });

    pageRender(<PostHolder />)

    const deleteBtn = screen.queryByTestId('delete')
    expect(deleteBtn).toBeNull();
  })
  it('should render properly on a mobile', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
      post:
        [
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
        ]
    });
    window.innerWidth = 400;
    pageRender(<PostHolder />)
    const cardContainer = screen.getByTestId('cardContainer');
    expect(cardContainer).toHaveStyleRule('flex-direction', 'column')
  })
  it('Should render post properly with load more button and call functions', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '1234',
        name: 'testUser',
        email: "mail@test.com",
      },
      post:
        [
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
        ]
    });
    pageRender(<PostHolder />)
    const spyState = jest.spyOn(React, 'useState');
    const loadMore = screen.getByTestId('loadmore')
    expect(loadMore).toBeInTheDocument();
    fireEvent.click(loadMore)
    expect(spyState).toHaveBeenCalledWith(3);
    spyState.mockRestore();
  })

  it('should fetch posts on DB', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '1234',
        name: 'testUser',
        email: "mail@test.com",
      },
      post:
        [
          {
            _id: '1',
            author: 'Author1',
            authorId: '123',
            content: 'content1',
            title: 'title1',
            createdAt: '2022-09-23T14:25:37.504+00:00',
            avatarPic: 'www.test.com'
          },
        ]
    });
    spyfetch.mockResolvedValue(({
      response: {
        status: 200
      },
      json: [
        {
          _id: '1',
          author: 'Author1',
          authorId: '123',
          content: 'content1',
          title: 'title1',
          createdAt: '2022-09-23T14:25:37.504+00:00',
          avatarPic: 'www.test.com'
        },
      ]
    }))
    pageRender(<PostHolder />)

    expect(spyfetch).toHaveBeenCalled();
  })

  it('should display message on error fetch posts', async () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    useSelectorMock.mockReturnValue({
      user: {
        _id: '1234',
        name: 'testUser',
        email: "mail@test.com",
      },
      post: [
        {
          _id: '1',
          author: 'Author1',
          authorId: '456',
          content: 'content1',
          title: 'title1',
          createdAt: '2022-09-23T14:25:37.504+00:00',
          avatarPic: 'www.test.com'
        }
      ]
    });
    spyfetch.mockResolvedValue(({
      response: {
        status: 401
      },
      json: []
    }))

    pageRender(<PostHolder />)

    await waitFor(() => {
      const errorMsg = screen.getByText('Error to fetch posts')
      expect(errorMsg).toBeInTheDocument();
    })
  })

  it('should call useSelector with the correct state/arguments in User', () => {
    useParamsMock.mockReturnValue({
      id: '123'
    });
    const stateUser = { user: { _id: '123', name: 'TestUser', email: 'test@email.com' } };
    useSelectorMock.mockReturnValue({
      stateUser,
      post: [{
        _id: '1',
        author: 'Author1',
        authorId: '456',
        content: 'content1',
        title: 'title1',
        createdAt: '2022-09-23T14:25:37.504+00:00',
        avatarPic: 'www.test.com'
      },]
    });

    pageRender(<PostHolder />)

    expect(useSelectorMock).toHaveBeenCalledWith(expect.any(Function));
    const selectorFn = useSelectorMock.mock.calls[0][0];
    const result = selectorFn(stateUser);
    expect(result).toEqual(stateUser.user);
  })
})


