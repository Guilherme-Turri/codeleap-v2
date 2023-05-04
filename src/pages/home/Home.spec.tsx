/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from '../../render/pageRender'
import { Home } from '.'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as createPostTest from '../../services/posts/create/createPost'

import * as reactRedux from 'react-redux'
jest.setTimeout(10000)

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));


describe('<Home/> - Integration', () => {
  const spyCreate = jest.spyOn(createPostTest, 'createPost')

  const useSelectorMock = reactRedux.useSelector as jest.Mock;

  it('should create post', async () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
    });
    spyCreate.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        status: 'Post Created',
        msg: '',
        error: ''
      }

    }))
    pageRender(<Home />)

    const title = screen.getByPlaceholderText('Title')
    const content = screen.getByPlaceholderText('Content Here')
    const form = screen.getByTestId('form');

    act(() => {
      userEvent.type(title, 'This is a title');
      userEvent.type(content, 'content');
      fireEvent.submit(form);
    });
    await waitFor(() => {
      expect(screen.getByTestId('check')).toBeInTheDocument();
    })
  })

  it('should fail to create post and display message', async () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'testUser',
        email: "mail@test.com",
      },
    });
    spyCreate.mockResolvedValue(({
      response: {
        status: 400
      },
      json: {
        status: 'Fail to Create',
        msg: '',
        error: ''
      }
    }))
    pageRender(<Home />)

    const title = screen.getByPlaceholderText('Title')
    const content = screen.getByPlaceholderText('Content Here')
    const form = screen.getByTestId('form');

    act(() => {
      userEvent.type(title, 'This is a title');
      userEvent.type(content, 'content');
      fireEvent.submit(form);
    });
    await waitFor(() => {
      const failMsg = screen.getByText('Fail to Create')
      expect(failMsg).toBeInTheDocument();
    })
  })
})


