import { pageRender } from '../../render/pageRender'
import { screen } from '@testing-library/react'
import { ProtectedRoute } from '.'
import * as reactRedux from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));


describe('<ProtectedRoute/>', () => {

  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should render home componenet when user is  on context!', () => {
    useSelectorMock.mockReturnValue({
      user: {
        _id: '123',
        name: 'TestUser',
        email: 'tes@email.com',
      },
    });
    pageRender(<ProtectedRoute />)

    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  })

  it('should render login componenet when user is not on context!', () => {
    useSelectorMock.mockReturnValue({
      user: null
    });
    pageRender(<ProtectedRoute />)

    expect(screen.getByTestId('loginpage')).toBeInTheDocument();
  })
})

describe('<ProtectedRoute />', () => {
  it('should call useSelector with the correct state/arguments', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const state = { user: { _id: '123', name: 'TestUser', email: 'test@email.com' } };
    useSelectorMock.mockReturnValue(state);
    pageRender(<ProtectedRoute />)
    expect(useSelectorMock).toHaveBeenCalledWith(expect.any(Function));
    const selectorFn = useSelectorMock.mock.calls[0][0];
    const result = selectorFn(state);
    expect(result).toEqual(state.user);
  })
})
