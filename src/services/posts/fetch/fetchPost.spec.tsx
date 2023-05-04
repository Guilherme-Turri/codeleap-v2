import { fetchPost } from './fetchPost'

describe('Createfetch Post', () => {
  it('should resolve a promisse with undefined', async () => {
    const mockedResult = {};
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await fetchPost(request)
    expect(result).toEqual(undefined)
  })
  it('should resolve a promisse with values', async () => {
    const mockedResult = {
      response: 200,
      json: [
        {
          _id: '123',
          author: 'authorTest',
          authorId: '123',
          content: 'content',
          title: 'title',
          createdAt: '123456478'
        }
      ]
    };
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await fetchPost(request)
    expect(result).toEqual(mockedResult)
  })
})
