import { setUser } from '../../../store/user/user';
import { setLoggedUser } from './setLoggeduser';


describe('setLoggedUser', () => {
  jest.useFakeTimers();

  it('should store user and navigate to home', async () => {
    const data = {
      _id: '123',
      name: 'testUser',
      email: "test@email.com"
    }
    const token = '123'
    const dispatch = jest.fn();
    const navigate = jest.fn();

    setLoggedUser(data, dispatch, navigate, token)
    expect(dispatch).toHaveBeenCalledWith(setUser(data));
    jest.advanceTimersByTime(600)
    expect(navigate).toHaveBeenCalledWith('/home');

  })
})