import { getProfile } from './getProfile'

describe('getProfile function', () => {
  it('should resolve a promissse with undefined', async () => {
    const mockedResult = {}
    const id = '123';
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getProfile(id, request)
    expect(result).toEqual(undefined);
  })
  
  it('should resolve a promissse with values', async () => {
    const mockedResult = {
      response: 200,
      json: {
        user: {
          _id: '123',
          name: 'testName',
          email: 'test@mail.com'
        },
        status: 'ok',
        message: 'ok message'
      }
    }
    const id = '123';
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getProfile(id, request)
    expect(result).toEqual(mockedResult);
  })
})