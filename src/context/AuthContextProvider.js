import React, {createContext, useState, useEffect} from 'react';

import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase';

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
