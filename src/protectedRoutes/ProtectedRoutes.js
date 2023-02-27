import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContextProvider';
import {Navigate, Outlet} from 'react-router-dom';

export const ProtectedRoutes = () => {
  const {currentUser} = useContext(AuthContext);

  return currentUser ? (
    <Outlet />
  ) : !currentUser ? (
    <Navigate to='/' exact />
  ) : (
    <Navigate to='/' exact />
  );
};
