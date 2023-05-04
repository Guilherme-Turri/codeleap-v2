import { createPost } from './createPost'
describe('Create Post', () => {
  const postTitle = 'title';
  const postValue = 'content';
  const user = {
    _id: '123',
    name: 'testName',
    email: 'test@email.com'
  }
  it('should resolve a promisse with undefined', async () => {
    const mockedResult = {};
    const request = jest.fn().mockResolvedValue(mockedResult)
    const result = await createPost(postTitle, postValue, request, user)
    expect(result).toEqual(undefined)
  })

  it('should resolve a promisse with value', async () => {
    const mockedResult = {
      response: 200,
      json: {
        status: 'test',
        msg: 'msg',
        error: 'some error'
      }
    };
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await createPost(postTitle, postValue, request, user);
    expect(result).toEqual(mockedResult);
  });
})
