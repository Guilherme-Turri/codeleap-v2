import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'
import { Home } from '../../pages/home'
import { Login } from '../../pages/login'

export const ProtectedRoute = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return user?._id ? <Home /> : <Login />;
}