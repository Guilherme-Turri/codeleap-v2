import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModal } from '../../types/types';

export interface ModalState {
  modal: IModal
  }
  
const initialState: ModalState = {
 modal: {
  showModal: false,
  modalType:'',
  userId:'',
  postId:''
 }
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      state.modal = action.payload;
      },
    closeModal: (state) => {
       state.modal = initialState.modal;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;