import { setPost } from './setPost'
import { setPosts } from '../../store/posts/posts'

describe('setPosts', () => {
  it('should store an array of posts', () => {
    const data = [
      {
        _id: '123',
        author: 'testAuthor',
        authorId: '123456',
        content: 'contentPost',
        title: 'testTilte',
        createdAt: '123456'
      }
    ]
    const dispatch = jest.fn();
    setPost(data, dispatch)
    expect(dispatch).toHaveBeenCalledWith(setPosts(data));
  })
})