import useReducer, { setUser, unsetUser } from './user';

describe('userStore', () =>{
  it('should store an user on context', () =>{
  const initialState={
      user :{
        _id:'',
        avatarPic:null,
        name:'', 
        email:''
      }
    }
    const payload = {
          _id:'123',
          avatarPic:'avatartext',
        name:'UserTest', 
        email:'test@mail.com'
      }
    const action = setUser(payload)
    const state = useReducer(initialState, action)
    expect(state.user).toEqual(payload)
  })
  
  it('should store  null on context', () =>{
    const initialState={
        user:{
          _id:'123',
          name:'UserTest', 
          email:'test@mail.com'
        }
      }
      const payload =  {
        _id:'',
        avatarPic:null,
        name:'', 
        email:''
      };
      const action = unsetUser()
      const state = useReducer(initialState, action)
      expect(state.user).toEqual(payload)
    })
})

