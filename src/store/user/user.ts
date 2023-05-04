import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IUser} from '../../types/types'

export interface UserState {
  user: IUser | null;
}

const initialState:UserState = {
  user: null,
};
 
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    unsetUser: (state) => {
      state.user = 
      {
        _id: '',
        name: '',
        email: '',
        avatarPic:null
      };
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;