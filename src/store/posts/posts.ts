import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IPost} from '../../types/types'

export interface PostState {
  post: IPost[];
  update:boolean,
}

const initialState:PostState = {
  post: [],
  update:false
};
 
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.post = action.payload;
      },
    unsetPosts: (state) => {
      state.post = [];
    },
    setUpdate:(state) => {
      state.update = !state.update;
    },
  },
});

export const { setPosts, unsetPosts, setUpdate } = postSlice.actions;
export default postSlice.reducer;

