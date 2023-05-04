import { unSetPost } from './unSetPost'
import { unsetPosts } from '../../store/posts/posts'

describe('closeModal', () => {
  it('should put on store with no params', () => {
    const dispatch = jest.fn();
    unSetPost(dispatch)
    expect(dispatch).toHaveBeenCalledWith(unsetPosts());
  })
})