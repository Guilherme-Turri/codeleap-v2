import { NavigateFunction } from 'react-router-dom'
import { Dispatch } from 'redux'
import { unsetUser } from '../../../store/user/user'
import { unsetPosts } from '../../../store/posts/posts';
import { closeModal } from '../../../store/modal/modal';
export const setUnloggedUser = (dispatch: Dispatch, navigate: NavigateFunction) => {
  localStorage.removeItem('token');
  dispatch(unsetUser());
  dispatch(unsetPosts());
  dispatch(closeModal());


  navigate('/')
}