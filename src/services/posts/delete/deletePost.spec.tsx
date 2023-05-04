import { deletePost } from './deletePost'

describe('delete function', () => {
  const id = '123';
  it('should resolve a promisse with undefined', async () => {
    const mockedResult = {};
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await deletePost(id, request)
    expect(result).toEqual(undefined)
  })

  it('should resolve a promisse with value', async () => {
    const mockedResult = {
      response: 200,
      json: {
        msg: 'message'
      }
    };
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await deletePost(id, request)
    expect(result).toEqual(mockedResult)
  })
})