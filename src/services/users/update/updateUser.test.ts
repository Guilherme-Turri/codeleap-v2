import { updateUser } from './updateUser'

describe('updateUser function', () => {
  it('should resolve a promissse with undefined', async () => {
    const mockedResult = {}
    const id = '123';
    const file='url.com'
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await updateUser(id, file, request)
    expect(result).toEqual(undefined);
  })

  it('should resolve a promissse with values', async () => {
    const mockedResult = {
      response: 200,
      json: {
        status: 'ok',
        message: 'message',
        error:'error',
        user:{
          _id: '123',
          name: 'testUser',
          email: 'test@mail.com'
        }
      }
    }
    const id = '123';
    const file='url.com'
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await updateUser(id, file, request)
    expect(result).toEqual(mockedResult);
  })
})