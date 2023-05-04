import { updatePost } from './updatePost'

describe('Update function', () => {
  const postTitle = 'title'
  const postContent = 'content'
  const user = {
    _id: '123456',
    name: 'userTest',
    email: 'test@mail.cpm'
  }
  const id = '123456'

  it('should resolve a promisse with undefined', async () => {
    const mockedResult = {};
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await updatePost(postTitle, postContent, request, user, id)
    expect(result).toEqual(undefined)
  })

  it('should resolve a promisse with value', async () => {
    const mockedResult = {
      response: 200,
      json: {
        status: 'ststus',
        msg: 'msg',
        error: 'error'
      }
    };
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await updatePost(postTitle, postContent, request, user, id)
    expect(result).toEqual(mockedResult)
  })
})