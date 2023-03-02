import React, {createContext} from 'react';
import {useQuery} from '@tanstack/react-query';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase';

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
  //geting user state
  const {data: currentUser, isLoading} = useQuery(['currentUser'], async () => {
    return new Promise((resolve, reject) => {
      const unsub = onAuthStateChanged(
        auth,
        (user) => {
          resolve(user);
          unsub();
        },
        reject,
      );
    });
  });
  console.log(currentUser);

  return (
    <AuthContext.Provider value={{currentUser, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
