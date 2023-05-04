import { unsetUser } from '../../../store/user/user';
import { setUnloggedUser } from './setUnloggedUser'

describe('setUnloggedUser', () => {
  jest.useFakeTimers();

  it('should delete user form store user and navigate to login', async () => {
    const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'removeItem');
    const dispatch = jest.fn();
    const navigate = jest.fn();
    setUnloggedUser(dispatch, navigate)
    expect(dispatch).toHaveBeenCalledWith(unsetUser());
    expect(localStorageSpy).toHaveBeenCalled();
    jest.advanceTimersByTime(600)
    expect(navigate).toHaveBeenCalledWith('/');

  })
})