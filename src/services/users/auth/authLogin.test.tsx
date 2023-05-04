import { authLogin } from './authLogin'

describe('authLogin function', () => {
  it('should resolve a promissse with undefined', async () => {
    const mockedResult = {}
    const email = 'test@gmail.com';
    const password = 'password';
    const token = '123'
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await authLogin(token, email, password, request)
    expect(result).toEqual(undefined);
  })

  it('should resolve a promisse with values', async () => {
    const mockedResult = {
      response: 200,
      json: {
        user: { name: 'test' }
      }
    }
    const email = 'test@gmail.com';
    const password = 'password';
    const token = '123';
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await authLogin(token, email, password, request);
    expect(result).toEqual(mockedResult);
  });
})