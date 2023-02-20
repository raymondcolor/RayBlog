import React, {useState, createContext} from 'react';

export const LogOutModalContext = createContext();

export const LogOutModalContextProvider = ({children}) => {
  const [show, setShow] = useState(false);

  return (
    <LogOutModalContext.Provider value={{show, setShow}}>
      {children}
    </LogOutModalContext.Provider>
  );
};
