import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { setUser } from "../../../store/user/user";
import { IUser } from "../../../types/types";

export const setLoggedUser = (data: IUser, dispatch: Dispatch, navigate: NavigateFunction, token:string) => {
  localStorage.setItem('token', token);
  dispatch(setUser(data));
    setTimeout(() => {
    navigate('/home')
  }, 600) 
}