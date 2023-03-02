import React, {createContext} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../firebase';

export const BlogContext = createContext();

export const BlogContextProvider = ({children}) => {
  const PostCollectionRef = collection(db, 'blogs');

  const {data: blogList, isLoading} = useQuery(['blogs'], async () => {
    const data = await getDocs(PostCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  });

  console.log(blogList);

  return (
    <BlogContext.Provider value={{blogList, isLoading}}>
      {children}
    </BlogContext.Provider>
  );
};
