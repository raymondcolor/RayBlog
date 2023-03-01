import React, {createContext, useState} from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <SearchContext.Provider value={{keyword, setKeyword}}>
      {children}
    </SearchContext.Provider>
  );
};
