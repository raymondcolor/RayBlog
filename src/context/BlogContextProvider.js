import React, {useState, createContext, useEffect} from 'react';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../firebase';

export const BlogContext = createContext();

export const BlogContextProvider = ({children}) => {
  const [blogList, setBlogList] = useState([]);
  const PostCollectionRef = collection(db, 'blogs');

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(PostCollectionRef);
      setBlogList(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };

    getBlogs();
  },[PostCollectionRef]);
  return (
    <BlogContext.Provider value={{blogList}}>{children}</BlogContext.Provider>
  );
};
