import { NotFound } from '.'
import { pageRender } from '../../render/pageRender'
import { fireEvent, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('NotFound - Integration', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should navigate back to login page when user is not on context', () => {
    useSelectorMock.mockReturnValue({
      user: null
    });
    pageRender(<NotFound />)
    const link = screen.getByText('Back')
    fireEvent.click(link)
    expect(link).toHaveAttribute('href', '/')
  })

  it('should navigate back to home page when user is  on context', () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'TestUser',
        email: 'tes@email.com',
      },
    });
    pageRender(<NotFound />)
    const link = screen.getByText('Back')
    fireEvent.click(link)
    expect(link).toHaveAttribute('href', '/home')
  })
})