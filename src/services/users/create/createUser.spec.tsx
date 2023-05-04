import { createUser } from './createUser'

describe('fetchLogin function', () => {
  it('should resolve a promissse with undefined', async () => {
    const mockedResult = {}
    const email = 'test@gmail.com';
    const name = 'testName';
    const password = 'password';
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await createUser(name, email, password, request)
    expect(result).toEqual(undefined);
  })

  it('should resolve a promissse with values', async () => {
    const mockedResult = {
      response: 200,
      json: {
        token: '123'
      }
    }
    const email = 'test@gmail.com';
    const password = 'password';
    const name = 'testName';
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await createUser(name, email, password, request)
    expect(result).toEqual(mockedResult);
  })
}) 