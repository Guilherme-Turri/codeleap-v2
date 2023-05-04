import useReducer, { setPosts, unsetPosts } from './posts';
describe('postStore', () => {

  it('should store an array of posts on context', () => {
    const initialState = {
      post: [],
      update: false
    }

    const payload = [
      {
        _id: '123',
        author: 'testAuthor',
        authorId: '123456',
        content: 'contentPost',
        title: 'testTilte',
        createdAt: '123456'
      }
    ]
    const action = setPosts(payload)
    const state = useReducer(initialState, action)
    expect(state.post).toEqual(payload)
  })

  it('should store  empety array on context', () => {
    const initialState = {
      post: [],
      update: false
    }
    const action = unsetPosts()
    const state = useReducer(initialState, action)
    expect(state.post).toEqual([])
  })
})

